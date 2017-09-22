const mongoose = require('mongoose');
const models   = require('../models');
const PasswordService = require('./password-service');
const SecurityService = require('./security-service');
const UrlService      = require('./url-service');

module.exports = {

  async addUser(username, firstName, lastName, email, ethnicity, birthDate, gender, plainPassword,
                occupation, webAddress, instagram, twitter, patreon, snapchat) {
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
      occupation,
      webAddress,
      instagram,
      twitter,
      patreon,
      snapchat,
      creationDate: new Date()
    });
  },

  async getById(_id) {
    return await models.user.findOne({ _id });
  },

  async getByEmail(email) {
    return await models.user.findOne({ email });
  },

  async getByUsername(username) {
    return await models.user.findOne({ username });
  },

  stripSensitiveInfo(user) {
    const userJson = user && user.toObject ? user.toObject() : user;

    if (userJson) {
      delete userJson.passwordResetToken;
      delete userJson.passwordResetRequestDate;
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
  },

  async updateUser(_id, profile) {
    return models.user.findOneAndUpdate({ _id }, { $set: profile }, { new: true });
  },

  async deleteUser(_id) {
    return models.user.remove({ _id }, { justOne: true });
  },

  async updateProfilePicture(_id, filename, originalName) {
    const fileId = mongoose.Types.ObjectId();
    return models.user.update({ _id }, {
      $set: {
        profilePicture: {
          _id: fileId,
          filename,
          originalName,
          uploadDate: new Date,
          url: UrlService.generateProfilePictureUrl(filename)
        }
      }
    })
  }
};