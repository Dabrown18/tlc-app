const mongoose = require('mongoose');
const models   = require('../models');
const SecurityService = require('./security-service');

module.exports = {

  async addStory(title, details, category, userId) {
    const now = Date();

    return await models.story.create({
      title,
      details,
      category,
      userId,
      creationDate: now,
      lastUpdateDate: now
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
    })
  },

  async getProfilePictureData(id) {
    return models.story.findOne({ _id: id }, { _id: 1, profilePicture: 1 });
  }
};