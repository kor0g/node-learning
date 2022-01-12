const express = require('express')

const { upload } = require('../../middlewares/form-data')

// const { getAllBooksHandler, getBookHandler, downloadBookFileHandler } = require('./get-books')
const { getAllBooks, getBook } = require('./get-books')
const { createBookHandler } = require('./create-book')
const { updateBook } = require('./update-book')
const { deleteBook } = require('./delete-book')

const router = express.Router()

router.get('/books', getAllBooks)
router.get('/books/:id', getBook)
router.post('/books/create', upload.single('cover'), createBookHandler)
router.post('/books/update/:id', upload.single('cover'), updateBook)
router.post('/books/delete/:id', deleteBook)
// router.get('/books/:id/download', downloadBookFileHandler)

module.exports = router
