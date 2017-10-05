var router = require('koa-router')();
const config = require('../../config');
const UserService = require('../services/user-service');
const PasswordService = require('../services/password-service');
const SecurityService = require('../services/security-service');

async function login(ctx) {
  try {
    const {username, password} = ctx.request.body;

    let user = await UserService.getByUsername(username.toLowerCase());
    if (!user) {
      user = await UserService.getByEmail(username.toLowerCase());

      if (!user) {
        return ctx.forbidden({
          error: 'Invalid credentials'
        });
      }
    }

    if (!(await PasswordService.compare(password, user.password))) {
      return ctx.forbidden({
        error: 'Invalid credentials'
      });
    }

    return ctx.ok({
      user: UserService.stripSensitiveInfo(user),
      token: SecurityService.generateJwtToken({
        id: user._id,
        email: user.email
      }, config.AUTH_TOKEN_VALIDITY)
    });
  } catch( e ) {
    console.log(e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .post('/login', login);

module.exports = router;