const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  ethnicity: String,
  gender: String,
  birthDate: Date,
  email: String,
  password: String,
  creationDate: Date,
  lastLoginDate: Date,
  passwordResetRequestDate: Date,
  passswordResetToken: String
});

module.exports = mongoose.model('User', UserSchema);