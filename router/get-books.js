const { getBook, getAllBooks } = require('../books')

const getAllBooksHandler = (_, res) => {
  res.json({ data: getAllBooks() })
}

const getBookHandler = (req, res) => {
  const { id } = req.params
  const book = getBook(id)

  if (!book) res.status(404)

  res.json({ data: getBook(id) })
}

const downloadBookFileHandler = (req, res) => {
  const { id } = req.params

  const book = getBook(id)

  if (!book?.fileBook) {
    res.status(404).json({ message: 'Can not download file' })
  }

  res.download(book?.fileBook)
}

module.exports = { getAllBooksHandler, getBookHandler, downloadBookFileHandler }
