const express = require('express')
const NoteModel = require('../../model/noteModel')
const app = express()

app.get('/note/param/:id', async (req, res) => {
  const _id = req.params.id
  const user = req.user
  const notesByUser = await NoteModel.find({
    user: user._id,
    _id
  }).lean()
  res.send(notesByUser)
})

module.exports = app