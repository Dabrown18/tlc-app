const router   = require('koa-router')();
const StoryService = require('../services/story-service');
const UserService = require('../services/user-service');

async function getFeed(ctx) {
  try {
    const user = await UserService.getById(ctx.user.id);
    const feed = await StoryService.getFeed(user);

    if (!user) {
      return ctx.notFound({
        error: 'Token belongs to non-existent user'
      });
    }

    ctx.body = {
      status: 1,
      feed
    };
  } catch( e ) {
    ctx.log.error('Error on getFeed()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/feed', getFeed);


module.exports = router;