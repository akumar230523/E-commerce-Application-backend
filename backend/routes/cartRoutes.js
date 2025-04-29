import express from 'express';
import { addToCart, updateCartItem, deleteCartItem } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addToCart);
router.put('/:id', protect, updateCartItem);
router.delete('/:id', protect, deleteCartItem);

// router.post('/', addToCart);
// router.put('/:id', updateCartItem);
// router.delete('/:id', deleteCartItem);

export default router;
