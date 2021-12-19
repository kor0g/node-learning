const { deleteBook } = require('../books')

const deleteBookHandler = (req, res) => {
  const { id } = req.params
  const isDeleted = deleteBook(id)

  if (!isDeleted) {
    res
      .status(404)
      .json({ message: 'Can not delete book by id: ' + id })
  }

  res.send('OK')
}

module.exports = { deleteBookHandler }
