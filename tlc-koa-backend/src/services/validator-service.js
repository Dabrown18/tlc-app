const config = require('../../config');
const moment = require('moment');

module.exports = {
  /**
   * Determines if a passwordResetToken is valid. The password reset request date is taken into
   * consideration.
   * Currently, the algorithm is simple. We just check the validity time.
   *
   * @param passwordResetRequestDate
   * @param passwordResetToken
   */
  isPasswordResetTokenValid(passwordResetRequestDate, passwordResetToken) {
    if (!passwordResetRequestDate || !passwordResetToken) {
      return false;
    }
    return moment().diff(passwordResetRequestDate, 'minute') < config.PASSWORD_RESET_TOKEN_VALIDITY;
  },

  /**
   * A password is considered valid if it contains at least 7 characters including trailing or leading spaces.
   *
   * @param password
   */
  isPasswordValid(password) {
    return password && password.length >= 7;
  }
};