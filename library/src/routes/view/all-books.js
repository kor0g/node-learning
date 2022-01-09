const { getAllBooks } = require('../../books')

const renderAllBooks = (req, res) => {
  const books = getAllBooks()

  const data = books.map((book) =>
    // const views = await fetch(`localhost:3000/counter/${book.id}`, { method: 'GET' })
    ({
      ...book,
      // views: views || 0,
    }))

  res.render('index', {
    content: 'all-books',
    pageTitle: 'All books',
    data,
  })
}

module.exports = { renderAllBooks }
