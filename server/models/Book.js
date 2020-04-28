const  { Schema, model } = require('mongoose');

//build book schema

const bookSchema = new Schema({
  authors: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  title: {
    type: String,
    required: true
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;