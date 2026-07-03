const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/booksController');
const authController = require('./../controllers/authController');

router.use(authController.authenticate);
router.use(authController.restrictToAdmin);

router.route('/books')
.get(booksController.getAllBooks);

router.route('/books/statistics').get(booksController.getBooksStates);

router.route('/addBook').post(booksController.uploadBookImage, booksController.createBook);

router.route('/book/:bookId')
.get(booksController.getBookById)
.patch(booksController.updateBook)
.delete(booksController.deleteBook); 

module.exports = router;