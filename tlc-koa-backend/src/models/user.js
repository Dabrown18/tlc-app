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
    originalName: String,
    filename: String,
    url: String,
    uploadDate: Date
  }
});

module.exports = mongoose.model('User', UserSchema);