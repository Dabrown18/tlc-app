var router = require('koa-router')();
const UserService = require('../services/user-service');
const PasswordService = require('../services/password-service');
const SecurityService = require('../services/security-service');

async function login(ctx) {
  try {
    const {username, password} = ctx.request.body;

    const user = await UserService.getByUsername(username);
    if (!user) {
      return ctx.forbidden({
        error: 'Invalid credentials'
      });
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
      }, 30)
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