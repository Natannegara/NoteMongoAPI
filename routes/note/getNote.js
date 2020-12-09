const express = require('express')
const authorize = require('../../middlewares/authorizationMiddleware')
const NoteModel = require('../../model/noteModel')
const app = express()

app.use(authorize)

app.get('/note', async (req, res) => {
  const user = req.user
  const notesByUser = await NoteModel.find({ userId: user.id }).lean()
  res.send(notesByUser)
})

module.exports = app