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
};