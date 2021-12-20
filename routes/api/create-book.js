const { createBook } = require('../../books')

const createBookHandler = (req, res) => {
  const {
    body, bookId, file,
  } = req

  const newBook = createBook({ id: bookId, ...body, cover: file?.path })

  if (!newBook) {
    res.redirect('/error')
  }

  res.redirect(`/${newBook.id}`)
}

module.exports = { createBookHandler }
