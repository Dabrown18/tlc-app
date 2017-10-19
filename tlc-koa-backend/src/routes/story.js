const fs       = require('fs');
const AWS      = require('aws-sdk');
const router   = require('koa-router')();
const multer   = require('koa-multer');
const multerS3 = require('multer-s3');
const uuid     = require('uuid/v4');
const StoryService = require('../services/story-service');
const config = require('../../config');

const s3 = new AWS.S3();

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
    console.log('addStory');

    return ctx.ok({
      status: 1
    });
  } catch( e ) {
    ctx.log.error('Error on addStory()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}


router
  .get('/stories/:id', getStory)
  .post('/stories', addStory);


module.exports = router;