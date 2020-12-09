const express = require('express')
const errorMiddleware = require('../../middlewares/errorMiddleware')
const NoteModel = require('../../model/noteModel')
const app = express()

app.delete('/note/:id', async (req, res, next) => {
  const _id = req.params.id
  await NoteModel.deleteOne({ _id })
    .catch((error) => {
      next(error)
    })
  res.send('Ok')
})

app.use(errorMiddleware)

module.exports = app