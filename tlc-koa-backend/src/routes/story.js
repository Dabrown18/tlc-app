const fs       = require('fs');
const AWS      = require('aws-sdk');
const router   = require('koa-router')();
const multer   = require('koa-multer');
const multerS3 = require('multer-s3');
const uuid     = require('uuid/v4');
const StoryService = require('../services/story-service');
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

    const result = await StoryService.addStory(ctx.user.id, title, details, category, location, originalname, mimetype, size);

    ctx.ok({
      status: 1,
      result
    })
  } catch( e ) {
    ctx.log.error('Error on addStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}


router
  .get('/stories/:id', getStory)
  .post('/stories', uploadMiddleware.fields(fields), addStory);


module.exports = router;