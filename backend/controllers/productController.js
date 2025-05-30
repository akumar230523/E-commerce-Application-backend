import Product from '../models/Product.js';

// Get all products //
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Get single product by ID //
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).send(product);
    } 
    catch (error) {
        res.status(500).send('Server error');
    }
};