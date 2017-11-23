const _ = require('lodash');
const mongoose = require('mongoose');
const models   = require('../models');
const UserService = require('./user-service');

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
    return await models.story.findOne({ _id })
      .populate('user')
      .populate('comments.author');
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
  async addComment(storyId, user, text) {
    const commentId = mongoose.Types.ObjectId();
    const newComment = {
      _id: commentId,
      author: user.id,
      text,
      creationDate: new Date()
    };

    await models.story.update({ _id: storyId }, {
      $push: {
        comments: newComment
      }
    });

    return Object.assign({}, newComment, {
      author: [UserService.stripSensitiveInfo(user)]
    });
  },

  async removeComment(storyId, commentId) {
    return models.story.update({ _id: storyId }, {
      $pull: {
        comments: {
          _id: commentId
        }
      }
    });
  },

  async getFeed(user) {
    const projectSpec = {
      isFollowingCategory: { $in: ['$category', user.categories] },
      isFollowingUser: { $in: ['$user', user.following] },
      creationDate: 1,
      title: 1,
      category: 1,
      details: 1,
      thumbnail: 1,
      user: 1,
      comments: 1
    };

    const sortSpec = {
      creationDate: -1,
      isFollowingUser: -1,
      isFollowingCategory: -1,
    };

    return models.story.aggregate([
        { $project: projectSpec },
        { $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user"
        }},
        { $unwind: '$user' },
        { $unwind: 
          {
            path: "$comments",
            preserveNullAndEmptyArrays: true          
          } 
        },
        { $lookup: {
          from: "users",
          localField: "comments.author",
          foreignField: "_id",
          as: "comments.author"
        }},
        {
          $group: {
            _id: '$_id',
            title: { $first: '$title' },
            category: { $first: '$category' },
            details: { $first: '$details' },
            thumbnail: { $first: '$thumbnail' },
            creationDate: { $first: '$creationDate' },
            isFollowingUser: { $first: '$isFollowingUser' },
            isFollowingCategory: { $first: '$isFollowingCategory' },
            user: { $first: '$user' },
            comments: { $push: '$comments' },
          }
        },
        { $sort: sortSpec }
    ]);
  },

  async canUserDeleteComment(userId, story, commentId) {
    return _.some(story.comments, c => c._id === commentId && c.author === userId);
  },

  async followStory(userId, storyId) {
    return models.story.update({ _id: storyId }, { $push: {
      followers: {
        user: userId,
        when: new Date()
      }
    }})
  },

  async unFollowStory(userId, storyId) {
    return models.story.update({ _id: storyId }, { $pull: {
      followers: {
        user: userId
      }
    }});
  },

  /**
   * Returns the bookmark object associated with given userId and storyId.
   * Null is returned if there is no bookmark for that story by the user.
   *
   * @param userId
   * @param storyId
   * @returns {Promise<object>}
   */
  async getBookmark(userId, storyId) {
    return models.bookmark.findOne({ user: userId, story: storyId });
  },

  /**
   *
   * @param userId
   * @param storyId
   * @returns {Promise.<void>}
   */
  async bookmarkStory(userId, storyId) {
    return models.bookmark.findOneAndUpdate(
      {
        user: userId,
        story: storyId,
      },
      {
        $set: {
          user: userId,
          story: storyId,
          creationDate: new Date()
        }
      },
      {
        new: 1,
        upsert: 1
      }
    );
  },
  /**
   *
   * @param userId
   * @param storyId
   * @returns {Promise.<void>}
   */
  async unBookmarkStory(userId, storyId) {
    return models.bookmark.remove({
      user: userId,
      story: storyId
    });
  },

};