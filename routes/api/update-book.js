const { updateBook } = require('../../books')

const updateBookHandler = (req, res) => {
  const { params, body } = req
  const isUpdated = updateBook(params.id, body)

  if (!isUpdated) {
    res.redirect('/error')
  }

  res.redirect(`/${params.id}`)
}

module.exports = { updateBookHandler }
