const BookModel = require('../../models/book')

const renderAllBooks = async (req, res) => {
  let data = []

  try {
    data = await BookModel.find()
  } catch (err) {
    console.error(err)
  } finally {
    res.render('index', {
      content: 'all-books',
      pageTitle: 'All books',
      data,
    })
  }
}

module.exports = { renderAllBooks }
