const { getBook } = require('../../books')

const editBook = (req, res) => {
  const { id } = req.params
  const book = getBook(id)

  res.render('index', {
    content: 'form',
    pageTitle: 'Edit book',
    data: book,
    action: `/api/books/update/${id}`,
  })
}

module.exports = { editBook }
