var router = require('koa-router')();
const UserService = require('../services/user-service');
const ValidatorService = require('../services/validator-service');
const templates = require('../templates');
const SendGrid = require('../helpers/sendgrid');

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
      password,
      occupation,
      webAddress,
      instagram,
      twitter,
      patreon,
      snapchat
    } = ctx.request.body;

    if (!ValidatorService.isUsernameValid(username)) {
      return ctx.badRequest({
        error: 'Username is invalid. Should have at least one character'
      });
    }

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

    const user = await UserService.addUser(username, firstName, lastName, email, ethnicity, birthDate, gender, password,
      occupation, webAddress, instagram, twitter, patreon, snapchat);

    await SendGrid.sendEmail({
      from: 'noreply@theladieschampion.com',
      to: email,
      subject: 'Welcome to The Ladies Champion',
      html: templates.signup({username})
    });

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