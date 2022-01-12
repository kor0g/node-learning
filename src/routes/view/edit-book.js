const BookModel = require('../../models/book')

const editBook = (req, res) => {
  const { id } = req.params

  try {
    const book = BookModel.findById(id)

    res.render('index', {
      content: 'form',
      pageTitle: 'Edit book',
      data: book,
      action: `/api/books/update/${id}`,
    })
  } catch (e) {
    res.redirect('/error')
  }
}

module.exports = { editBook }
