const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: String,
  details: String,
  creationDate: Date,
  lastUpdateDate: Date,
  thumbnail: {
    _id: mongoose.Schema.Types.ObjectId,
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
  }
});

module.exports = mongoose.model('Story', StorySchema);