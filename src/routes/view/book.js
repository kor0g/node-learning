const BookModel = require('../../models/book')

const renderBook = async (req, res) => {
  const { id } = req.params

  try {
    const data = await BookModel.findById(id)

    res.render('index', {
      content: 'book',
      pageTitle: 'Book',
      data,
    })
  } catch (e) {
    res.redirect('/error')
  }
}

module.exports = { renderBook }
