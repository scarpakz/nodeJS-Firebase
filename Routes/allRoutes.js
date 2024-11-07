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

const router = express.Router();

// Product Routes
router.get('/', getProducts);
router.post('/new', createProduct);
router.get('/product/:id', getProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

// Employee Routes
router.get('/employees', getEmployees);

export default router;