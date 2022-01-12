const { unlink } = require('fs')
const BookModel = require('../../models/book')

const deleteBook = async (req, res) => {
  const { id } = req.params

  try {
    await BookModel.findByIdAndDelete(id)
    res.json({ message: `Book ${id} successfully deleted` })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: { message: `Book ${id} deletion error`, code: 500, data: err } })
  }

  // const book = getBook(id)
  //
  // if (!book) {
  //   res.redirect('/error')
  // }
  //
  // deleteBook(id)
  // if (book.cover) {
  //   unlink(book.cover, (err) => {
  //     if (err) console.log(err)
  //   })
  // }
}

module.exports = { deleteBook }
