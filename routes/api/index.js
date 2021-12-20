const express = require('express')

const { upload, setBookId } = require('../../middlewares/form-data')

const { loginHandler } = require('./login')
const { getAllBooksHandler, getBookHandler, downloadBookFileHandler } = require('./get-books')
const { createBookHandler } = require('./create-book')
const { updateBookHandler } = require('./update-book')
const { deleteBookHandler } = require('./delete-book')

const router = express.Router()

router.post('/user/login', loginHandler)
router.get('/books', getAllBooksHandler)
router.get('/books/:id', getBookHandler)
router.post('/books/create', setBookId, upload.single('cover'), createBookHandler)
router.post('/books/update/:id', upload.single('cover'), updateBookHandler)
router.post('/books/delete/:id', deleteBookHandler)
router.get('/books/:id/download', downloadBookFileHandler)

module.exports = router
