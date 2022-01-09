const createBook = (req, res) => {
  res.render('index', {
    content: 'form',
    pageTitle: 'Create Book',
    action: '/api/books/create',
    data: {},
  })
}

module.exports = { createBook }
