const router = require('koa-router')();
const UserService = require('../services/user-service');

async function getUser(ctx) {
  try {
    const { id } = ctx.params;

    if (ctx.user.id !== id) {
      ctx.log.info('here');
      return ctx.unauthorized({
        error: 'You do not have permissions to view this user info'
      });
    }

    const user = await UserService.getById(id);
    ctx.body = {
      status: 1,
      user: UserService.stripSensitiveInfo(user)
    };
  } catch( e ) {
    ctx.log.error('Error on getUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function updateUser(ctx) {
  try {
    const { id } = ctx.params;
    const {
      username,
      firstName,
      lastName,
      email,
      ethnicity,
      birthDate,
      gender,
      occupation,
      webAddress,
      instagram,
      twitter,
      patreon,
      snapchat
    } = ctx.request.body;

    if (ctx.user.id !== id) {
      return ctx.unauthorized({
        error: 'You do not have permissions to update this user info'
      });
    }

    const user = await UserService.updateUser(id, {
      //username,
      firstName,
      lastName,
      //email,
      ethnicity,
      birthDate,
      gender,
      occupation,
      webAddress,
      instagram,
      twitter,
      patreon,
      snapchat
    });

    ctx.body = {
      status: 1
    };
  } catch( e ) {
    ctx.log.error('Error on updateUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}
router
  .get('/users/:id', getUser)
  .put('/users/:id/profile', updateUser);

module.exports = router;