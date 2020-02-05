const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();



//   /admin/add-product =>GET
router.get('/add-product',adminController.getAddProduct);

//   /admin/products =>GET
router.get('/products',adminController.getProducts);

//   /admin/add-product =>POST
router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

//  /admin/edit-product =>POST
router.post('/edit-product',adminController.postEditProduct);

//delete a product 
router.post('/delete-product',adminController.postDeleteProduct)

// exports.routes = router;
// exports.products = products;

module.exports = router;