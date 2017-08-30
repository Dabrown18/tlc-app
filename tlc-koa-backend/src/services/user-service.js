const models = require('../models');
const PasswordService = require('./password-service');

module.exports = {

  async addUser(username, firstName, lastName, email, ethnicity, birthDate, gender, plainPassword) {
    const password = await PasswordService.hashPassword(plainPassword);

    return await models.user.create({
      username,
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
  }
};