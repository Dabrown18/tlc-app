const mongoose = require('mongoose');
const models   = require('../models');
const SecurityService = require('./security-service');

module.exports = {

  async addStory(userId, title, details, category, location, originalName, mimeType, size) {
    const now = Date();

    return await models.story.create({
      title,
      details,
      category,
      user: userId,
      creationDate: now,
      lastUpdateDate: now,
      thumbnail: {
        originalName,
        mimeType,
        url: location,
        size,
        uploadDate: now
      }
    });
  },

  async getById(_id) {
    return await models.story.findOne({ _id });
  },

  async updateStory(_id, story) {
    return models.story.findOneAndUpdate({ _id }, { $set: story }, { new: true });
  },

  async deleteStory(_id) {
    return models.story.remove({ _id }, { justOne: true });
  },

  async updateStoryPicture(_id, location, originalName, mimeType, size) {
    const fileId = mongoose.Types.ObjectId();
    return models.story.update({ _id }, {
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
    });
  },

  async getProfilePictureData(id) {
    return models.story.findOne({ _id: id }, { _id: 1, profilePicture: 1 });
  },

  /**
   * Determines whether a user is allowed to access a story.
   * For now assuming true. After clarification on rules they
   * will be implemented.
   *
   * @param userId
   * @param story
   * @returns {Promise.<Boolean>}
   */
  async userCanViewStory(userId, story) {
    return true;
  },

  /**
   *
   * @param userId
   * @param otherUserId
   * @returns {Promise.<void>}
   */
  async canUserViewOtherUserStories(userId, otherUserId) {
    return true;
  },

  stripSensitiveInfo(story) {
    const storyJson = story && story.toObject ? story.toObject() : story;

    if (storyJson) {
    }
    return storyJson;
  },

  /**
   *
   * @param userId
   * @returns {Query|Document}
   */
  getUserStories(userId) {
    return models.story.find({ user: userId })
      .populate('user')
      .populate('comments.author');
  },

  /**
   *
   * @param storyId
   * @param userId
   * @param text
   * @returns {Promise}
   */
  async addComment(storyId, userId, text) {
    const commentId = mongoose.Types.ObjectId();
    const newComment = {
      _id: commentId,
      author: userId,
      text,
      creationDate: new Date()
    };

    await models.story.update({ _id: storyId }, {
      $push: {
        comments: newComment
      }
    });

    return newComment;
  }
};