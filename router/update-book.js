const { updateBook } = require('../books')

const updateBookHandler = (req, res) => {
  const { params, body } = req
  const isUpdated = updateBook(params.id, body)

  if (!isUpdated) {
    res.status(404).send('Can not update book')
    return
  }

  res.send('OK')
}

module.exports = { updateBookHandler }
