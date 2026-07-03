const express = require('express');
const router = express.Router();
const booksController = require('./../controllers/booksController');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

router.route('/signup')
.post(authController.signupUser);

router.route('/login')
.post(authController.loginUser);

router.use(authController.authenticate);

router.route('/books')
.get(booksController.getAllBooks);

router.route('/book/:bookId')
.get(booksController.getBookById);

router.route('/carts').get(userController.getUserAllCarts);
router.route('/cart/:cartId')
.get(userController.getUserCartById)
.delete(userController.deleteCart);

router.route('/book/:bookId/addToCart')
.post(userController.addToNewCart);

router.route('/book/:bookId/addToCart/:cartId')
.patch(userController.addToGivenCart);

router.route('/cart/:cartId/removeFromCart/:bookId')
.patch(userController.removeBookFromCart);

router.route('/cart/:cartId/changeQuantity/:bookId')
.patch(userController.updateBookCartQuantity);

router.route('/cart/:cartId/purchase').post(userController.orderBooks);
router.route('/orders').get(userController.getUserOrders);
router.route('/order/:orderId').get(userController.getUserOrderById);

module.exports = router;