import express from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// @route GET /products
router.get('/', getProducts);

// @route GET /products/:id
router.get('/:id', getProductById);

export default router;
