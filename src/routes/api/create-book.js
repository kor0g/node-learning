const BookModel = require('../../models/book')

const createBookHandler = async (req, res) => {
  const {
    body: {
      title, description, author, favourite,
    }, file,
  } = req

  const newBook = {
    title, description, author, favourite,
  }
  // const newBook = createBook({ id: bookId, ...body, cover: file?.path })

  try {
    await BookModel.create(newBook)
    res.json({ data: newBook })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: { message: 'Book creating error', code: 500 } })
  }
}

module.exports = { createBookHandler }
