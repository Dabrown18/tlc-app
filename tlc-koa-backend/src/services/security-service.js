const bcrypt = require('bcrypt');
const uid = require('uid-safe');

module.exports = {

  /**
   * Returns the hash of the given clear text password
   * @param password
   * @returns {string}
   */
  hashPassword(password) {
    return bcrypt.hash(password, SALT_ROUNDS);
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
  }
};