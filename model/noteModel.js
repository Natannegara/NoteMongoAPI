const mongoose = require('mongoose');
const db = require('../connections/dbConnection');

const NoteSchema = new mongoose.Schema({
  note: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const NoteModel = db.model('Note', NoteSchema);

module.exports = NoteModel