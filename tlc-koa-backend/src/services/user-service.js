const models = require('../models');
const PasswordService = require('./password-service');
const SecurityService = require('./security-service');

module.exports = {

  async addUser(username, firstName, lastName, email, ethnicity, birthDate, gender, plainPassword) {
    const password = await PasswordService.hashPassword(plainPassword);

    return await models.user.create({
      username: username.toLowerCase(),
      firstName,
      lastName,
      email,
      ethnicity,
      birthDate,
      gender,
      password,
      creationDate: new Date()
    });
  },

  async getByEmail(email) {
    return await models.user.findOne({ email }).exec();
  },

  async getByUsername(username) {
    return await models.user.findOne({ username }).exec();
  },

  stripSensitiveInfo(user) {
    const userJson = user && user.toObject ? user.toObject() : user;

    if (userJson) {
      delete userJson.password;
      delete userJson.__v;
    }
    return userJson;
  },

  async generatePasswordResetDetails(userId) {
    const passwordResetToken = await SecurityService.generateSafeUID(20);
    const passwordResetRequestDate = new Date();

    await models.user.updateOne({ _id: userId }, { passwordResetToken, passwordResetRequestDate });

    return {
      passwordResetRequestDate,
      passwordResetToken
    };
  },

  async getByPasswordResetToken(passwordResetToken) {
    return models.user.findOne({ passwordResetToken });
  },

  async resetPassword(userId, plainPassword) {
    const password = await PasswordService.hashPassword(plainPassword);

    return models.user.update({ _id: userId }, {
      password,
      passwordResetToken: null,
      passwordResetRequestDate: null
    });
  }
};