import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
