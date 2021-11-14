const getBooks = async (req, res) => {
  res.json([]).status(200);
};

module.exports = {
  getBooks,
};
