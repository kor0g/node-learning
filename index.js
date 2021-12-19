const express = require('express')

const router = require('./router')

const app = express()
app.use('/api', router)

app.listen(process.env.PORT || 3000)
