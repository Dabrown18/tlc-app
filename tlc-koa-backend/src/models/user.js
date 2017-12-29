const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  ethnicity: String,
  gender: String,
  birthDate: Date,
  password: String,
  creationDate: Date,
  lastLoginDate: Date,
  passwordResetRequestDate: Date,
  passwordResetToken: String,
  status: Number,
  occupation: String,
  webAddress: String,
  facebook: String,
  instagram: String,
  twitter: String,
  patreon: String,
  snapchat: String,
  location: {
    lat: Number,
    lng: Number
  },
  profilePicture: {
    _id: mongoose.Schema.Types.ObjectId,
    originalName: String,
    filename: String,
    url: String,
    uploadDate: Date,
    mimeType: String,
    size: Number
  },
  categories: [String],
  followingCount: Number,
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model('User', UserSchema);