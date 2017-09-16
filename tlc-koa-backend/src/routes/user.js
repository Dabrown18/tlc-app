const router = require('koa-router')();
const UserService = require('../services/user-service');
const config = require('../../config');

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
      facebook,
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
      facebook,
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

async function tempDeleteUser(ctx) {
  try {
    const { username } = ctx.params;

    const user = await UserService.getByUsername(username);

    if (user) {
      await UserService.deleteUser(user._id);

      return ctx.ok({
        status: 1
      });
    }

    ctx.notFound({
      error: 'User does not exist'
    });
  } catch( e ) {
    ctx.log.error('Error on tempDeleteUser()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/users/:id', getUser)
  .put('/users/:id/profile', updateUser);

// TODO: This should either active on DEV or removed in the future. SHOULD NOT BE ENABLED ON PRODUCTION
if (config.DEV) {
  router.get('/temp-delete-user/:username', tempDeleteUser);
}

module.exports = router;