import jwt from 'jsonwebtoken';
import { Hospital } from '../models/hospital.model.js';

export async function authHospitalMiddleware(req, res, next) {
    try {
        const token = req.cookies.hospitalToken ;

        console.log(token)

        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, "helloWorld");

        const hospital = await Hospital.findById({
            _id: decoded.hospitalId
        });

        if (!hospital) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.hospital = hospital;

        next();
    } catch (error) {
        console.error('Error in hospital authentication middleware:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
