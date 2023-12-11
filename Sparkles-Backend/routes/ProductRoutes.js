const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');
const {createCategory,
    updateCategory,
    getAllCategories,
    deleteCategory,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory,
    getAllSubCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts} = require('../controllers/Productcontroller');


    //catgs routes

    router.post('/catg/',authenticateUser, authorizePermissions('admin'), createCategory);
    router.get('/catg/',authenticateUser, getAllCategories);
    router.patch('/catg/:categoryId',authenticateUser, authorizePermissions('admin'), updateCategory);
    router.delete('/catg/:categoryId',authenticateUser, authorizePermissions('admin'), deleteCategory);



    //sub catgs routes
router.post('/subcatg/:categoryId', createSubCategory);
router.patch('/subcatg/:subCategoryId', updateSubCategory);
router.delete('/subcatg/:subCategoryId', deleteSubCategory);
router.get('/subcatg/:categoryId', getAllSubCategories);


//for products main
router.post('/', createProduct); // Create a new product
router.patch('/:productId', updateProduct); // Update a product by ID
router.delete('/:productId', deleteProduct); // Delete a product by ID
router.get('/', getAllProducts); // Get all products

module.exports = router;
