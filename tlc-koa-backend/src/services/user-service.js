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
      email: email.toLowerCase(),
      firstName,
      lastName,
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
      followingCount: 0,
      creationDate: new Date()
    });
  },

  async getById(_id) {
    return await models.user.findOne({ _id });
  },

  async getByEmail(email) {
    return await models.user.findOne({ email: email.trim().toLowerCase() });
  },

  async getByUsername(username) {
    return await models.user.findOne({ username: username.trim().toLowerCase() });
  },

  async stripSensitiveInfo(user) {
    const userJson = user && user.toObject ? user.toObject() : user;

    if (userJson) {
      delete userJson.passwordResetToken;
      delete userJson.passwordResetRequestDate;
      delete userJson.password;
      delete userJson.__v;

      userJson.stats = {
        followers: await this.countFollowers(user._id),
        following: user.following.length
      };
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

  async updateProfilePicture(_id, location, originalName, mimeType, size) {
    const fileId = mongoose.Types.ObjectId();
    return models.user.update({ _id }, {
      $set: {
        profilePicture: {
          _id: fileId,
          originalName,
          mimeType,
          size,
          uploadDate: new Date,
          url: location
        }
      }
    })
  },

  async getProfilePictureData(userId) {
    return models.user.findOne({ _id: userId }, { _id: 1, profilePicture: 1 });
  },

  /**
   * Checks whether or not a user is allowed to follow another user.
   * For now, it always returns true.
   *
   * @param userId
   * @param toBeFollowedUserId
   * @returns {Promise<boolean>}
   */
  async canFollowUser(userId, toBeFollowedUserId) {
    return true;
  },

  async followUser(userId, toBeFollowedUserId) {
    return models.user.findOneAndUpdate({ _id: userId }, {
      $push: { following: toBeFollowedUserId },
      $inc: { followingCount: 1 }
    }, { new: true });
  },

  /**
   * The user model captures info about the followed users by the user.
   * This method returns the number of users that are following a particular user.
   *
   * @param userId
   * @returns {Promise.<Number>}
   */
  async countFollowers(userId) {
    return models.user.count({ following: userId });
  },

  async unFollowUser(userId, toBeUnfollowedUserId) {
    return models.user.findOneAndUpdate({ _id: userId }, {
      $pull: { following: toBeUnfollowedUserId },
      $inc: { followingCount: -1 }
    }, { new: true });
  },

  async isUserFollowing(userId, targetUserId) {

  },

  async getNumFollowers(userId) {

  },

  async getNumFollowing(userId) {

  },

  async canUserViewUser(viewerId, vieweeId) {
    return true;
  }
};