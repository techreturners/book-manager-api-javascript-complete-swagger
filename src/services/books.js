const Book = require('../models/book');

const getBooks = async () => {
  return Book.findAll();
};

const getBook = async (bookId) => {
  return Book.findOne({
    where: {bookId},
  });
};

const saveBook = async (book) => {
  return Book.create(book);
};

module.exports = {
  getBooks,
  getBook,
  saveBook,
};
