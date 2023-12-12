const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');

const {createOrder,getAllOrdersByUserId,getUserOrdersById,deleteOrder} = require('../controllers/OrderController.js');
router.post('/',authenticateUser, authorizePermissions('user'), createOrder);
router.get('/',authenticateUser, authorizePermissions('user'), getAllOrdersByUserId);
router.get('/:userId',authenticateUser, authorizePermissions('admin'), getUserOrdersById);
router.delete('/:orderId',authenticateUser, authorizePermissions('admin'),deleteOrder);

module.exports = router;
