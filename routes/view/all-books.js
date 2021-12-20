const { getAllBooks } = require('../../books')

const renderAllBooks = (req, res) => {
  res.render('index', {
    content: 'all-books',
    pageTitle: 'All books',
    data: getAllBooks(),
  })
}

module.exports = { renderAllBooks }
