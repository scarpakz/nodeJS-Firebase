import express from 'express';
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../Controllers/productControllers.js';
import {
  getEmployees
} from '../Controllers/employeeControllers.js';
import { 
  userAuth,
  authVerify
} from '../Controllers/authController.js';
import {
  test
} from '../Controllers/testController.js';

const router = express.Router();

// Authentication
router.post('/login', userAuth)

// Breakdown routes into separate files
// Product Routes
router.get('/products', authVerify, getProducts);
router.post('/new', authVerify, createProduct);
router.get('/product/:id', authVerify, getProduct);
router.put('/update/:id', authVerify, updateProduct);
router.delete('/delete/:id', authVerify, deleteProduct);

// Employee Routes
router.get('/employees', authVerify, getEmployees);

// Test Router Only
router.get('/test', test);

export default router;