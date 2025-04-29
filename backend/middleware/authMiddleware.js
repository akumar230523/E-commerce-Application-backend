// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret_key';

export const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('JWT')) {
        return res.status(401).send('Access denied. No token provided.');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Invalid or expired token.');
    }
};

