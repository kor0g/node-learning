const express = require('express')
const { apiRouter, viewRouter } = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)

app.use('/', viewRouter)
app.use('/api', apiRouter)

app.listen(process.env.PORT || 3001)
