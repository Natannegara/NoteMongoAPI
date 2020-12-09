const express = require('express')
const errorMiddleware = require('../../middlewares/errorMiddleware')
const NoteModel = require('../../model/noteModel')
const app = express()

app.patch('/note/:id', async (req, res, next) => {
  const _id = req.params.id
  const updatedNote = await NoteModel.findByIdAndUpdate(_id, req.body, { new: true })
    .catch((error) => {
      next(error)
    })
  res.send(updatedNote)
})

app.use(errorMiddleware)

module.exports = app