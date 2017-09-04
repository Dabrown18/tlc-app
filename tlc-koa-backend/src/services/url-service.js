const config = require('../../config');

module.exports = {
  generateResetLink(passwordResetToken) {
    return `${config.BASE_URL}/forgot/${passwordResetToken}`;
  }
};