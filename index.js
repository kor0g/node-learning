const express = require('express')
const { apiRouter, viewRouter } = require('./routes')

const app = express()

app.set('view engine', 'ejs')

app.use('/', viewRouter)
app.use('/api', apiRouter)

app.listen(process.env.PORT || 3000)
