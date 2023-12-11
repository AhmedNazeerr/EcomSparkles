const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');

const {createOrder,getAllOrdersByUserId,getUserOrdersById,deleteOrder} = require('../controllers/OrderController.js');
router.post('/',authenticateUser, authorizePermissions('admin'), createOrder);
router.get('/',authenticateUser, authorizePermissions('admin'), getAllOrdersByUserId);
router.get('/:userId',authenticateUser, authorizePermissions('admin'), getUserOrdersById);
router.delete('/:orderId',authenticateUser, authorizePermissions('admin'),deleteOrder);

module.exports = router;
