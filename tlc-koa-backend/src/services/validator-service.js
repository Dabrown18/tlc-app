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
   * Returns true if a given username is valid.
   *
   * @param username
   * @returns {boolean}
   */
  isUsernameValid(username) {
    return username && username.trim().length >= 3;
  },

  /**
   * A password is considered valid if it contains at least 5 characters including trailing or leading spaces.
   *
   * @param password
   */
  isPasswordValid(password) {
    return password && password.length >= 5;
  },

  isValidEmail(email) {
    // eslint-disable-next-line max-len
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  },

  isValidUrl(url) {
    // eslint-disable-next-line max-len
    const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    return res !== null;
  },

  isValidTwitterUrl(url) {
    const re = new RegExp('^(?:http://)?(?:www\\.)?twitter\\.com/(\\w+)$', 'i');

    return re.test(url);
  }
};