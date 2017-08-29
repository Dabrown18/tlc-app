const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = {

  hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
  },

  compare(plainPassword, hash) {
    return bcrypt.compare(plainPassword, hash);
  }
};