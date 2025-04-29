import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret_key';

// Register user //
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        // First check if the user exists
        if (userExists) {
            return res.status(400).send('User already exists');
        }
        // Second, create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();  // Save the user to the database
        return res.status(201).send('Registration successful');
    } 
    catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).send('Server error');
    }
};


// Login user //
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try { 
        const user = await User.findOne({ email });
        // Check user exists and password matches
        if (!user || user.password !== password) {
            return res.status(401).send('Invalid email or password');
        }
        // Generate JWT
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30d' });
        res.status(200).send({ message: 'Login successful', token });
    } 
    catch (error) {
        res.status(500).send('Server error');
    }
};
