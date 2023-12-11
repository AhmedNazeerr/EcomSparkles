const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');

  const { addToCart, inccartitem,deccartitem ,getCartItems} = require('../controllers/CartController');

router.post('/add-to-cart',authenticateUser, authorizePermissions('admin'), addToCart);
router.patch('/inccart/:id',authenticateUser, authorizePermissions('admin'), inccartitem);
router.patch('/deccart/:id',authenticateUser, authorizePermissions('admin'), deccartitem );
router.get('/get-cart-items',authenticateUser, authorizePermissions('admin'), getCartItems);

module.exports = router;
