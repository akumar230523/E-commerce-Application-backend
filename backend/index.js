import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './config/database.js';

import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);

connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});


