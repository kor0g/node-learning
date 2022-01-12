const BookModel = require('../../models/book')

const updateBook = async (req, res) => {
  const { params, body: { title, description: author, favourite } } = req

  const bookData = { title, description: author, favourite }

  try {
    await BookModel.findByIdAndUpdate(params.id, bookData)
    res.json({ data: bookData })
  } catch (err) {
    res.status(500).json({ error: { message: `Book ${params.id} updating error`, code: 500, data: err } })
  }
}

module.exports = { updateBook }
