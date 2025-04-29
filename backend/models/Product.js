import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    discountPercentage: Number,
    description: String,
    stockQuantity: Number,
    thumbnail: String,
    rating: Number,
    category: String,
    warrantyInformation: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
