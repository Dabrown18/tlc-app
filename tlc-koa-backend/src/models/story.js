const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  details: String,
  creationDate: Date,
  lastUpdateDate: Date,
  thumbnail: {
    originalName: String,
    filename: String,
    url: String,
    uploadDate: Date,
    mimeType: String,
    size: Number
  },
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      _id:  mongoose.Schema.Types.ObjectId,
      creationDate: Date,
      text: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],
  followers: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    when: Date
  }]
});

module.exports = mongoose.model('Story', StorySchema);