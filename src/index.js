const express = require('express')
const mongoose = require('mongoose')

const apiRouter = require('./routes/api')
const viewRouter = require('./routes/view')

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

app.use('/', viewRouter)
app.use('/api', apiRouter)

const PORT = process.env.PORT || 3000
const { DB_HOST } = process.env

const connectWithContainer = () => mongoose.connect(process.env.DB_HOST, {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connectWithAtlas = () => mongoose.connect(DB_HOST)

const connect = {
  atlas: connectWithAtlas,
  container: connectWithContainer,
  default: () => {
    throw Error('Configure DB connection mode')
  },
}

const start = async () => {
  try {
    await connect[process.env.DB_MODE || 'default']()

    app.listen(PORT, () => {
      console.log('Server running on port:', PORT)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
