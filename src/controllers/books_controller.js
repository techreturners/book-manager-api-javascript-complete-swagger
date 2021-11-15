const {bookService} = require('../services');

const getBooks = async (req, res) => {
  const books = await bookService.getBooks();
  res.json(books).status(200);
};

const getBook = async (req, res) => {
  const bookId = req.params.bookId;
  const book = await bookService.getBook(Number(bookId));

  if (book) {
    res.json(book).status(200);
  } else {
    res.status(404).json('Not found');
  }
};

module.exports = {
  getBooks,
  getBook,
};
