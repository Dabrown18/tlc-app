var router = require('koa-router')();
const UserService = require('../services/user-service');

async function signup(ctx) {
  try {
    const {
      username,
      firstName,
      lastName,
      email,
      ethnicity,
      birthDate,
      gender,
      password
    } = ctx.request.body;

    if (await UserService.getByEmail(email)) {
      return ctx.badRequest({
        error: 'Email is already taken'
      });
    }

    if (await UserService.getByUsername(email)) {
      return ctx.badRequest({
        error: 'Username is already taken'
      });
    }

    const user = await UserService.addUser(username, firstName, lastName, email, ethnicity, birthDate, gender, password);
    return ctx.ok(UserService.stripSensitiveInfo(user));
  } catch( e ) {
    console.log(e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .post('/signup', signup);

module.exports = router;