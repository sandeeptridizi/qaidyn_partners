import express from 'express';
import { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.post('/', adminAuthMiddleware, createBlog);
router.put('/:id', adminAuthMiddleware, updateBlog);
router.delete('/:id', adminAuthMiddleware, deleteBlog);

export default router;
