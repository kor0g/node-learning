const express = require('express')

const passport = require('../../passport')

const { renderAllBooks } = require('./all-books')
const { createBook } = require('./create-book')
const { renderBook } = require('./book')
const { editBook } = require('./edit-book')
const { renderError } = require('./error')
const {
  ensureAuthenticated, renderAccount, logout,
} = require('./auth')

const router = express.Router()

router.get('/error', renderError)
router.get('/', renderAllBooks)
router.get('/create', createBook)
router.get('/edit/:id', editBook)
router.get('/:id', renderBook)

// auth
router.get('/account', ensureAuthenticated, renderAccount)
router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }))
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/error' }),
  renderAccount,
)
router.get('/logout', logout)

module.exports = router
