const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  title: String,
  creationDate: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  isRead: Boolean,

  // Currently can be user, story
  entity: String,

  // Can be follow, post-add, post-comment
  actionType: String,

  refId: String
});

module.exports = mongoose.model('Notification', NotificationSchema);