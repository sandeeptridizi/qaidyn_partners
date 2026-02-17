import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Admin Login
export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password.'
            });
        }

        // Find admin
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials.'
            });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials.'
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: admin._id,
                email: admin.email,
                name: admin.name
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: 'Login successful.',
            token,
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during login.'
        });
    }
};

// Create Initial Admin (for setup only)
export const createAdmin = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'Admin already exists.'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create admin
        const admin = new Admin({
            email,
            password: hashedPassword,
            name: name || 'Admin'
        });

        await admin.save();

        res.status(201).json({
            success: true,
            message: 'Admin created successfully.',
            admin: {
                id: admin._id,
                email: admin.email,
                name: admin.name
            }
        });
    } catch (error) {
        console.error('Create admin error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during admin creation.'
        });
    }
};

// Verify Token
export const verifyToken = async (req, res) => {
    try {
        // If middleware passed, token is valid
        res.json({
            success: true,
            admin: req.admin
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error.'
        });
    }
};
