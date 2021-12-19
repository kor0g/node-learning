const books = [{
  id: Date.now(),
  title: '1984',
  author: 'Джорж Оруэлл',
}]

const createBook = ({
  id,
  title,
  description,
  author,
  favorite,
  fileCover,
  fileName,
  fileBook,
}) => {
  if (!id || !title) return

  books.push({
    id,
    title,
    description,
    author,
    favorite,
    fileCover,
    fileName,
    fileBook,
  })

  return books.find((book) => book.id === id)
}

const getAllBooks = () => books

const getBook = (id) => books.find((book) => book.id === id)

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id)
  return !!books.splice(index, 1).length
}

const updateBook = (id, bookData) => {
  const index = books.findIndex((book) => book.id === id)

  if (index === -1) return false

  books[index] = {
    ...books[index],
    ...bookData,
  }

  return true
}

module.exports = {
  createBook, getAllBooks, getBook, deleteBook, updateBook,
}
