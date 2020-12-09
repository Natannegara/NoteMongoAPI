const express = require('express')
const NoteModel = require('../../model/noteModel')
const app = express()

app.get('/note/query', async (req, res) => {
  const search = req.query.search
  const user = req.user
  const notesByUser = await NoteModel
    .find({
      user: user._id,
      note: { $regex: search }
    }).lean()
  res.send(notesByUser)
})

module.exports = app