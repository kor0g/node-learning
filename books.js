const books = [{
  id: '123',
  title: '1984',
  author: 'Джорж Оруэлл',
  cover: 'uploads\\123.jpeg',
}]

const createBook = ({
  id,
  title,
  author,
  description,
  cover,
}) => {
  if (!id || !title) return

  books.push({
    id,
    title,
    author,
    description,
    cover,
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
