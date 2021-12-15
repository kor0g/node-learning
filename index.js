const express = require('express')
const formData = require('express-form-data')

const { createBook, getAllBooks, getBook, deleteBook, updateBook } = require('./books')

const app = express()
app.use(formData.parse())

app.post('/api/user/login', (_, res) => {
  res
  .status(201)
  .send({ id: 1, mail: "test@mail.ru" })
})

app.get('/api/books', (_, res) => {
  res.send(getAllBooks())
})

app.get('/api/books/:id', (req, res) => {
  const { params } = req
  const book = getBook(params.id)

  if (!book) return res.status(404)

  res.send(getBook(params.id))
})

app.post('/api/books', (req, res) => {
  const { body } = req
  const newBook = createBook(body)

  if (!newBook) return res.status(404).send('Can not create book')
  
  res.send(newBook)
})

app.put('/api/books/:id', (req, res) => {
  const { params, body } = req
  const isUpdated = updateBook(params.id, body)

  if (!isUpdated) return res.status(404).send('Can not update book')

  res.send('OK')
})

app.delete('/api/books/:id', (req, res) => {
  const { params } = req
  const isDeleted = deleteBook(params.id)

  if (!isDeleted) return res.status(404).send('Can not delete book')

  res.send('OK')
})

app.listen(process.env.PORT || 3000)