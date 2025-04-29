import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Add a product to the cart //
export const addToCart = async (req, res) => {
    try {
        const { _id, quantity } = req.body;
        // First check product exists ?
        const product = await Product.findById(_id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        // Second check product is in the cart ?
        let cartItem = await Cart.findById(_id);

        if (cartItem) {    // If yes, update the quantity   
            return res.status(400).send('Product already in you cart');
        } 
        else {    // If not, create a new cart item
            const newCartItem = new Cart({ _id, quantity });
            const savedItem = await newCartItem.save();
            return res.status(201).send(savedItem);
        }
    } 
    catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
};

// Update the product quantity //
export const updateCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);
        // Cheak product
        if (!cartItem) {
            return res.status(404).send('Cart item not found');
        }
        // Update product
        cartItem.quantity = req.body.quantity;
        const updatedItem = await cartItem.save();
        return res.status(200).send(updatedItem);
    } 
    catch (error) {
        res.status(500).send('Server error');
    }
};

// Delete a product from the cart
export const deleteCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);
        // Cheak product
        if (!cartItem) {
            return res.status(404).send('Cart item not found');
        }
        // Delete product
        await cartItem.deleteOne();
        return res.status(200).send('Cart item deleted');
    } 
    catch (error) {
        res.status(500).send('Server error');
    }
};



















// import Cart from '../models/Cart.js';
// import Product from '../models/Product.js';

// // Add product to cart //
// export const addToCart = async (req, res) => {
//     try {
//         const { _id , quantity } = req.body;
//         // First check item exists in product or not
//         const product = await Product.findById(_id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         } 
//         // Second check item exists in cart or not
//         let cartItem = await Cart.findById(_id);
//         if (cartItem) {
//             cartItem.quantity += quantity;    // if exist -> Update quantity
//             const updatedQuantity = await cartItem.save();
//             return res.status(200).send(updatedQuantity);
//         } 
//         else {
//             cartItem = new Cart({ _id, quantity });    // if not exist -> Create new cart item
//             const savedCartItem = await cartItem.save();
//             return res.status(201).send(savedCartItem);
//         }
//     } 
//     catch (error) {
//         res.status(500).send(error);
//     }
// };

// // Update product quantity in cart //
// export const updateCartItem = async (req, res) => {
//     try {
//         const cartItem = await Cart.findById(req.params.id);
        
//         if (!cartItem) {
//             return res.status(404).send('Cart item not found');
//         }
        
//         // If you want to add user logic, you can uncomment this after adding user field
//         // if (cartItem.user.toString() !== req.user._id.toString()) {
//         //     return res.status(401).send('Not authorized to update this cart item');
//         // }
      
//         cartItem.quantity = req.body.quantity || cartItem.quantity;
//         const updatedCartItem = await cartItem.save();
      
//         return res.status(200).send(updatedCartItem);
//     } 
//     catch (error) {
//         res.status(500).send(error);
//     }
// };

// // Delete item from cart //
// export const deleteCartItem = async (req, res) => {
//     try {
//         const cartItem = await Cart.findById(req.params.id);
        
//         if (!cartItem) {
//             return res.status(404).send('Cart item not found');
//         }
        
//         // Again, if user checking is needed, uncomment below
//         // if (cartItem.user.toString() !== req.user._id.toString()) {
//         //     return res.status(401).send('Not authorized to delete this cart item');
//         // }
      
//         await cartItem.deleteOne();
//         return res.status(200).send('Cart item removed');
//     } 
//     catch (error) {
//         res.status(500).send(error);
//     }
// };
