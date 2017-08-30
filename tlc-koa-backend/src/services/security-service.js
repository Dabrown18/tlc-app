const config = require('../../config');
const bcrypt = require('bcrypt');
const uid = require('uid-safe');
const jwt = require('jsonwebtoken');

module.exports = {

  /**
   * Returns the hash of the given clear text password
   * @param password
   * @returns {string}
   */
  hashPassword(password) {
    return bcrypt.hash(password, config.SALT_ROUNDS);
  },

  /**
   * Checks if the plain password corresponds to the passed hash.
   * @param plainPassword
   * @param hash
   * @returns {Promise}
   */
  compare(plainPassword, hash) {
    return bcrypt.compare(plainPassword, hash);
  },

  /**
   * Generates cryptographically secure UIDs safe for both cookie and URL usage.
   * @param byteLength
   * @returns {Promise}
   */
  generateSafeUID(byteLength) {
    return uid(byteLength);
  },

  generateJwtToken(obj, validDays) {
    return jwt.sign(obj, config.TOKEN_SIGN_SECRET, {
      expiresIn: validDays * 24 * 60 * 60
    });
  }

};