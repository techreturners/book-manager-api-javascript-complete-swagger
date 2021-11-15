const Book = require('../models/book');

const getBooks = async () => {
  return Book.findAll();
};

module.exports = {
  getBooks,
};
