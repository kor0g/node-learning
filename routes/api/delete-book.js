const { unlink } = require('fs')
const { deleteBook, getBook } = require('../../books')

const deleteBookHandler = (req, res) => {
  const { id } = req.params
  const book = getBook(id)

  if (!book) {
    res.redirect('/error')
  }

  deleteBook(id)
  unlink(book.cover, (err) => {
    if (err) console.log(err)
  })

  res.redirect('/')
}

module.exports = { deleteBookHandler }
