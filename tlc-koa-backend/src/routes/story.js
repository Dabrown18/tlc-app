const fs       = require('fs');
const AWS      = require('aws-sdk');
const router   = require('koa-router')();
const multer   = require('koa-multer');
const multerS3 = require('multer-s3');
const uuid     = require('uuid/v4');
const StoryService = require('../services/story-service');
const UserService = require('../services/user-service');
const NotificationService = require('../services/notification-service');
const config = require('../../config');

const s3 = new AWS.S3();

const fields = [
  { name: 'title', maxCount: 1 },
  { name: 'details', maxCount: 1 },
  { name: 'category', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
];

const uploadMiddleware = multer({
  storage: multerS3({
    s3,
    bucket: 'theladieschampion-dev',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      console.log('file', file);
      cb(null, `images/story/${uuid()}`);
    }
  }),

  limits: {
    fileSize: config.MAX_IMAGE_SIZE
  }
});


async function getStory(ctx) {
  try {
    const { id } = ctx.params;

    const story = await StoryService.getById(id);

    if (!story) {
      return ctx.notFound({
        error: 'Story not found'
      });
    }

    if (!StoryService.userCanViewStory(ctx.user.id, story)) {
      return ctx.unauthorized({
        error: 'User does not have permission to view this story'
      });
    }

    ctx.body = {
      status: 1,
      story: StoryService.stripSensitiveInfo(story)
    };
  } catch( e ) {
    ctx.log.error('Error on getStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function addStory(ctx) {
  try {
    const { originalname, location, mimetype, size } = ctx.req.files['thumbnail'][0];
    const { title, details, category } = ctx.req.body;

    const story = await StoryService.addStory(ctx.user.id, title, details, category, location, originalname, mimetype, size);
    const user = await UserService.getById(ctx.user.id);

    await NotificationService.notifyNewStory(story, user);

    ctx.ok({
      status: 1,
      result: story
    })
  } catch( e ) {
    ctx.log.error('Error on addStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function addComment(ctx) {
  try {
    const { id } = ctx.params;
    const { text } = ctx.request.body;

    const story = await StoryService.getById(id);
    if (!story) {
      return ctx.notFound({
        error: 'Story not found'
      });
    }

    if (!text || text.length === 0) {
      return ctx.notFound({
        error: 'Comment text should not be empty'
      });
    }

    const user    = await UserService.getById(ctx.user.id);
    const comment = await StoryService.addComment(id, user, text);

    await NotificationService.notifyNewComment(story, comment);

    ctx.ok({
      status: 1,
      storyId: id,
      comment
    });
  } catch( e ) {
    ctx.log.error('Error on addComment()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function deleteComment(ctx) {
  try {
    const { storyId, commentId } = ctx.params;

    const story = await StoryService.getById(storyId);

    if (!StoryService.canUserDeleteComment(ctx.user.id, story, commentId)) {
      return ctx.unauthorized({
        error: 'User cannot delete the comment'
      });
    }

    await StoryService.removeComment(storyId, commentId);

    ctx.ok({
      status: 1,
      storyId,
      commentId
    });
  } catch( e ) {
    ctx.log.error('Error on removeComment()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function followStory(ctx) {
  try {
    const { storyId } = ctx.params;

    await StoryService.followStory(ctx.user.id, storyId);

    ctx.ok({
      storyId,
      status: 1
    });
  } catch( e ) {
    ctx.log.error('Error on followStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function unFollowStory(ctx) {
  try {
    const { storyId } = ctx.params;

    await StoryService.unFollowStory(ctx.user.id, storyId);

    ctx.ok({
      storyId,
      status: 1
    });
  } catch( e ) {
    ctx.log.error('Error on followStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/stories/:id', getStory)
  .post('/stories', uploadMiddleware.fields(fields), addStory)
  .post('/stories/:id/comments', addComment)
  .delete('/stories/:storyId/comments/:commentId', deleteComment)
  .post('/stories/:storyId/followers', followStory)
  .delete('/stories/:storyId/followers', unFollowStory);


module.exports = router;