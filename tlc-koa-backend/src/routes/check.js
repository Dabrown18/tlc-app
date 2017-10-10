const router   = require('koa-router')();
const UserService = require('../services/user-service');

/**
 * Returns 200 { status: 1} when the username is available.
 * Returns 400 { error: ... } when the username is already taken.
 *
 * @param ctx
 * @returns {Promise.<void>}
 */
async function checkUsername(ctx) {
  try {
    const { username } = ctx.params;

    const user = await UserService.getByUsername(username);

    if (user) {
      ctx.badRequest({
        error: 'Username already exists'
      });
    } else {
      ctx.ok({
        status: 1
      });
    }
  } catch( e ) {
    ctx.log.error('Error on checkUsername()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

/**
 * Returns 200 { status: 1} when the email is available.
 * Returns 400 { error: ... } when the email is already taken.
 *
 * @param ctx
 * @returns {Promise.<void>}
 */
async function checkEmail(ctx) {
  try {
    const { email } = ctx.params;

    const user = await UserService.getByEmail(email);

    if (user) {
      ctx.badRequest({
        error: 'Email already exists'
      });
    } else {
      ctx.ok({
        status: 1
      });
    }
  } catch( e ) {
    ctx.log.error('Error on checkEmail()', e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .get('/check/username/:username', checkUsername)
  .get('/check/email/:email', checkEmail);

module.exports = router;
