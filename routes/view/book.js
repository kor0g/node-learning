const { getBook } = require('../../books')

const renderBook = (req, res) => {
  const { id } = req.params
  const book = getBook(id)

  if (!book) res.redirect('/error')

  res.render('index', {
    content: 'book',
    pageTitle: 'Book',
    data: book,
  })
}

module.exports = { renderBook }
