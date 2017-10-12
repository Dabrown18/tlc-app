const router = require('koa-router')();
const config = require('../../config');
const UserService = require('../services/user-service');
const SecurityService = require('../services/security-service');
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
      facebook,
      instagram,
      twitter,
      patreon,
      snapchat
    } = ctx.request.body;

    if (!ValidatorService.isValidEmail(email)) {
      return ctx.badRequest({
        error: 'Email is invalid'
      });
    }

    if (webAddress && !ValidatorService.isValidUrl(webAddress)) {
      return ctx.badRequest({
        error: 'Web address is invalid'
      });
    }

    if (facebook && !ValidatorService.isValidFacebookUrl(facebook)) {
      return ctx.badRequest({
        error: 'Facebook url is invalid'
      });
    }

    if (twitter && !ValidatorService.isValidTwitterUrl(twitter)) {
      return ctx.badRequest({
        error: 'Twitter url is invalid'
      });
    }

    if (patreon && !ValidatorService.isValidPatreonUrl(patreon)) {
      return ctx.badRequest({
        error: 'Patreon url is invalid'
      });
    }

    if (facebook && !ValidatorService.isValidFacebookUrl(facebook)) {
      return ctx.badRequest({
        error: 'Facebook url is invalid'
      });
    }

    if (instagram && !ValidatorService.isValidInstagramUrl(instagram)) {
      return ctx.badRequest({
        error: 'Instagram url is invalid'
      });
    }

    if (snapchat && !ValidatorService.isValidSnapchatUsername(snapchat)) {
      return ctx.badRequest({
        error: 'Snapchat username is invalid'
      });
    }

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

    if (await UserService.getByUsername(username)) {
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
  .post('/signup', signup);

module.exports = router;