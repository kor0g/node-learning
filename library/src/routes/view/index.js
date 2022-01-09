const express = require('express')

const { renderAllBooks } = require('./all-books')
const { createBook } = require('./create-book')
const { renderBook } = require('./book')
const { editBook } = require('./edit-book')
const { renderError } = require('./error')

const { countViews, getViews } = require('../../middlewares/counter')

const router = express.Router()

router.get('/error', renderError)
router.get('/', getViews, renderAllBooks)
router.get('/create', createBook)
router.get('/edit/:id', editBook)
router.get('/:id', renderBook)

module.exports = router
