import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization || req.cookies.userToken;

        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, "helloWorld");

        const user = await User.findById({
            _id: decoded.userId
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error('Error in authentication middleware:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
