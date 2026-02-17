import express from 'express';
import { loginAdmin, createAdmin, verifyToken } from '../controllers/authController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

// Public routes
router.post('/login', loginAdmin);
router.post('/create', createAdmin); // For initial setup only

// Protected routes
router.get('/verify', adminAuthMiddleware, verifyToken);

export default router;
