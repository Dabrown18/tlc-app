const path = require('path');

module.exports = {
  // Network port we will be running on
  PORT: 3000,

  // True if we are running on development env
  DEV: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',

  // True if we are running on production env
  PROD: process.env.NODE_ENV === 'production',

  // True if we should enable displaying of hello text for ping purposes
  SHOW_HELLO: true,

  SALT_ROUNDS: 10,

  // Reset token validity in minutes
  PASSWORD_RESET_TOKEN_VALIDITY: 60,

  PICTURE_UPLOAD_DIR: path.resolve(__dirname, '../uploads'),

  // Auth token validity in days
  AUTH_TOKEN_VALIDITY: 30,

  // Max image size in MBytes
  MAX_IMAGE_SIZE: 5 * 1024 * 1024
};