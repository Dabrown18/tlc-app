const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  creationDate: Date,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  story: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story"
  }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);