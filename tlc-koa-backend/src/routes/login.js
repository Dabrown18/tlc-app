var router = require('koa-router')();
const UserService = require('../services/user-service');
const PasswordService = require('../services/password-service');

async function login(ctx) {
  try {
    const {username, password} = ctx.request.body;

    return ctx.ok('login');

  } catch( e ) {
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .post('/login', login);

module.exports = router;