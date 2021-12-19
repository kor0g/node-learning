const express = require('express')

const { loginHandler } = require('./login')
const { getAllBooksHandler, getBookHandler, downloadBookFileHandler } = require('./get-books')
const { createBookHandlers } = require('./create-book')
const { updateBookHandler } = require('./update-book')
const { deleteBookHandler } = require('./delete-book')

const router = express.Router()

router.post('/user/login', loginHandler)
router.get('/books', getAllBooksHandler)
router.get('/books/:id', getBookHandler)
router.post('/books', ...createBookHandlers)
router.put('/books/:id', updateBookHandler)
router.delete('/books/:id', deleteBookHandler)
router.get('/books/:id/download', downloadBookFileHandler)

module.exports = router
