const mongoose = require('mongoose');
const db = require('../connections/dbConnection');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

const UserModel = db.model('User', UserSchema);

module.exports = UserModel