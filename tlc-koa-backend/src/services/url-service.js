const config = require('../../config');

module.exports = {
  generateResetLink(passwordResetToken) {
    return `${config.BASE_URL}/forgot/${passwordResetToken}`;
  },

  generateProfilePictureUrl(userId, fileId) {
    return `${config.BASE_URL}/users/${userId}/profile/picture/:fileId`
  }
};