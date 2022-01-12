const { Schema, model } = require('mongoose')

const bookScheme = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: String },
  favorite: { type: Boolean },
})

module.exports = model('book', bookScheme)
