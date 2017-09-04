const router = require('koa-router')();
const UserService = require('../services/user-service');
const UrlService = require('../services/url-service');
const ValidatorService = require('../services/validator-service');
const templates = require('../templates');
const SendGrid = require('../helpers/sendgrid');

async function forgot(ctx) {
  try {
    const { email } = ctx.request.body;

    const user = await UserService.getByEmail(email);
    if (!user) {
      return ctx.badRequest({
        error: 'Email is not registered'
      });
    }

    const { passwordResetToken } =  await UserService.generatePasswordResetDetails(user.id);
    const resetLink = UrlService.generateResetLink(passwordResetToken);

    await SendGrid.sendEmail({
      from: 'noreply@theladieschampion.com',
      to: email,
      subject: 'Password Reset',
      html: templates.passwordReset({ resetLink })
    });

    return ctx.ok({
      status: 1
    });
  } catch( e ) {
    console.log(e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

async function update(ctx) {
  try {
    const { password, passwordResetToken } = ctx.request.body;

    const user = await UserService.getByPasswordResetToken(passwordResetToken);

    if (!user) {
      return ctx.forbidden({
        error: 'Invalid reset token'
      });
    }

    if (!ValidatorService.isPasswordResetTokenValid(user.passwordResetRequestDate, passwordResetToken)) {
      return ctx.forbidden({
        error: 'Invalid reset token'
      });
    }

    if (!ValidatorService.isPasswordValid(password)) {
      return ctx.badRequest({
        error: 'Password must have at least 7 characters'
      });
    }

    await UserService.resetPassword(user._id, password);

    return ctx.ok({
      status: 1
    });
  } catch( e ) {
    console.log(e);
    ctx.badRequest({
      error: 'Unexpected error'
    });
  }
}

router
  .post('/forgot', forgot)
  .post('/forgot/update', update);

module.exports = router;