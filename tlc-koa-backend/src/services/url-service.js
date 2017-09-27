const config = require('../../config');

module.exports = {
  generateResetLink(passwordResetToken) {
    return `${config.BASE_URL}/forgot/${passwordResetToken}`;
  },

  generateProfilePictureUrl(fileId) {
    return `https://s3-us-west-2.amazonaws.com/theladieschampion-dev/images/${fileId}`
  }
};