const { v4: getNewId } = require('uuid')

const books = [{
  id: getNewId(),
  title: '1984',
  author: 'Джордж Оруэлл',
}]

const createBook = ({
  title,
  description,
  author,
  favorite,
  fileCover,
  fileName,
}) => {
  const newId = getNewId()

  books.push({
    id: newId,
    title,
    description,
    author,
    favorite,
    fileCover,
    fileName,
  })

  return books.find(({ id }) => id === newId)
}

const getAllBooks = () => books

const getBook = id => books.find(book => book.id === id)

const deleteBook = id => {
  const index = books.findIndex(book => book.id === id)
  return !!books.splice(index, 1).length
}

const updateBook = (id, bookData) => {
  const index = books.findIndex(book => book.id === id)

  if (index === -1) return false

  books[index] = {
    ...books[index],
    ...bookData,
  }

  return true
}

module.exports = { createBook, getAllBooks, getBook, deleteBook, updateBook }