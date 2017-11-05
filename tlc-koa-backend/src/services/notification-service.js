const _ = require('lodash');
const models   = require('../models');
const TextService = require('./text-service');
const UserService = require('./user-service');
const NotificationConstants = require('../constants/notifications');

module.exports = {

  async addNotification(actionUser, user, title, entity, actionType, refId) {
    return models.notification.create({
      actionUser,
      title,
      user,
      entity,
      actionType,
      refId,
      creationDate: new Date(),
      isRead: false
    });
  },

  async notifyStoryInCategory(user, story) {
    const { title, category } = story;

    let poster = await UserService.getById(story.user);
    let actionUser = _.isObject(story.user) ? story.user._id : story.user;

    return this.addNotification(actionUser,
      user,
      `${TextService.abbreviateText(title)} added in category ${category}, by ${poster.username}`,
      NotificationConstants.ENTITY_STORY,
      NotificationConstants.ACTION_ADD,
      story._id);
  },

  async notifyFollowerAboutNewStory(user, story) {
    const { username } = user;
    const { title } = story;
    const poster = _.isObject(story.user) ? story.user : (await UserService.getById(story.user));

    return this.addNotification(poster._id,
      user,
      `New story: "${TextService.abbreviateText(title)}" added by ${poster.username}`,
      NotificationConstants.ENTITY_STORY,
      NotificationConstants.ACTION_ADD,
      story._id);
  },

  async notifyNewStory(story, user) {
    const notifiedUsersSoFar = {};

    const usersInterestedInCategory = await models.user.find({ categories: story.category });

    for (let i = 0; i < usersInterestedInCategory.length; i++) {
      const u = usersInterestedInCategory[i];
      if (u._id !== story.user) {
        await this.notifyStoryInCategory(u, story);
        notifiedUsersSoFar[u._id] = true;
      }
    }

    const followingUsers = await models.user.find({ following: user._id });
    for (let i = 0; i < followingUsers.length; i++) {
      const u = followingUsers[i];

      if (!notifiedUsersSoFar[u._id]) {
        await this.notifyFollowerAboutNewStory(u, story);
      }
    }
  },

  async notifyNewComment(story, comment) {
    const commentAuthor = comment.author[0];

    // Notify the story owner that someone posted a comment on his story
    if (commentAuthor._id !== story.user) {
      const { username } = commentAuthor;
      const title = TextService.abbreviateText(story.title);

      return this.addNotification(commentAuthor._id,
        story.user,
        `${username} posted a comment on ${title}`,
        NotificationConstants.ENTITY_COMMENT,
        NotificationConstants.ACTION_ADD,
        comment._id);
    }

    return false;
  },

  async notifyFollow(followerUser, followedUser) {
    return this.addNotification(followerUser._id,
      followedUser._id,
      `${followerUser.username} is following you`,
      NotificationConstants.ENTITY_USER,
      NotificationConstants.ACTION_FOLLOW,
      followerUser._id);
  },

  getById(id) {
    return models.notification.findOne({ _id: id });
  },

  getUserNotifications(userId) {
    return models.notification.find({ user: userId })
      .populate('user')
      .populate('actionUser');
  },

  deleteNotification(id) {
    return models.notification.remove({ _id: id });
  },

  markNotificationAsRead(notificationId) {
    return models.notification.update({ _id: notificationId}, { $set: { isRead: true } });
  }
};