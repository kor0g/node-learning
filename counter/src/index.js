const express = require('express')
const redis = require('redis')

const PORT = process.env.PORT || 3000
const REDIS_URL = process.env.REDIS_URL || 'localhost'

const app = express()
const db = redis.createClient({ url: `redis://${REDIS_URL}` })
db.connect()

app.post('/counter/:bookId/incr', async (req, res) => {
  const { bookId } = req.params

  try {
    const counter = await db.incr(bookId)
    res.json({ counter })
  } catch (err) {
    res.status(500).json({ errorCode: 500, errorMsg: 'redis error' })
  }
})

app.get('/counter/:bookId', async (req, res) => {
  const { bookId } = req.params

  try {
    const counter = await db.get(bookId)
    res.json({ counter })
  } catch (err) {
    res.status(500).json({ errorCode: 500, errorMsg: 'redis error' })
  }
})

app.listen(PORT, (err) => {
  if (!err) console.log('Listen on port:', PORT)
})