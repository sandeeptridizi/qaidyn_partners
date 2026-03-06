import express from 'express';
import { getCareers, getCareerById, createCareer, updateCareer, deleteCareer } from '../controllers/careerController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.get('/', getCareers);
router.get('/:id', getCareerById);
router.post('/', adminAuthMiddleware, createCareer);
router.put('/:id', adminAuthMiddleware, updateCareer);
router.delete('/:id', adminAuthMiddleware, deleteCareer);

export default router;
