const BookModel = require('../../models/book')

const getAllBooks = async (_, res) => {
  try {
    const data = await BookModel.find().select('-__v')
    res.json({ data })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: { message: 'Book receiving error', code: 500, data: err } })
  }
}

const getBook = async (req, res) => {
  const { id } = req.params

  try {
    const book = await BookModel.findById(id)
    res.json({ data: book })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: { message: `Book ${id} receiving error`, code: 500, data: err } })
  }
}

// const downloadBookFileHandler = (req, res) => {
//   const { id } = req.params
//
//   const book = getBook(id)
//
//   if (!book?.cover) {
//     res.status(404).json({ message: 'Can not download file' })
//   }
//
//   res.download(book?.cover)
// }

module.exports = { getAllBooks, getBook }
