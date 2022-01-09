const fetch = require('cross-fetch')
const { getBook } = require('../../books')

const renderBook = async (req, res) => {
  const { id } = req.params
  const book = getBook(id)

  if (!book) {
    res.redirect('/error')
    return
  }

  let views = 0

  const url = `http://${process.env.COUNTER_URL}:${process.env.PORT}/counter/${book.id}/incr`

  try {
    const response = await fetch(url, { method: 'POST' })
    const data = await response.json()
    views = data.counter || 0
  } catch (err) {
    console.error(err)
  }

  const data = { ...book, views }

  res.render('index', {
    content: 'book',
    pageTitle: 'Book',
    data,
  })
}

module.exports = { renderBook }
