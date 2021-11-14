const express = require('express');
const {booksController} = require('../controllers');

const router = new express.Router();
router.get('/books', booksController.getBooks);

module.exports = router;
