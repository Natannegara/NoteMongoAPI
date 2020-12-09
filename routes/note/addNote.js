const express = require('express')
const authorize = require('../../middlewares/authorizationMiddleware')
const errorMiddleware = require('../../middlewares/errorMiddleware')
const NoteModel = require('../../model/noteModel')
const app = express()

app.use(authorize)

app.post('/note', async (req, res, next) => {
  const body = req.body
  const user = req.user
  body.user = user._id
  const result = await NoteModel.create(body)
    .catch((error) => {
      next(error)
    })
  res.send(result)
})

app.use(errorMiddleware)

module.exports = app