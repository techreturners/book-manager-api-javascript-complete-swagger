const {bookService} = require('../services');

const getBooks = async (req, res) => {
  const books = await bookService.getBooks();
  res.json(books).status(200);
};

module.exports = {
  getBooks,
};
