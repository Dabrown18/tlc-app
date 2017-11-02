const _ = require('lodash');
const models   = require('../models');
const UserService = require('./user-service');

module.exports = {

  async notifyStoryInCategory(user, story) {
    models.notification.create({

    })
  },

  async notifyNewStory(storyId) {
    const story = await models.story.findOne({ _id: storyId });

    models.user
      .find({ categories: story.category })
      .then(u => {
        this.notifyStoryInCategory(u, story);
      });
  },

  async notifyNewComment(storyId, comment) {

  },

  async notifyFollow(notifiedUserId, followerUserId) {

  }
};