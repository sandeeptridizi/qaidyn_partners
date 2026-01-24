import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import {
    getHomeContent,
    updateContent,
    uploadImage,
    getAllContent,
    deleteContent
} from '../controllers/contentController.js';
import adminAuthMiddleware from '../middleware/adminAuthMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure Storage (Cloudinary vs Local)
const useCloudinary = process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET;

if (useCloudinary) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log('Using Cloudinary Storage');
} else {
    console.log('Using Local Disk Storage');
}

const storage = useCloudinary
    ? new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: 'qaidyn_partners',
            allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        },
    })
    : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../uploads/'));
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, 'img-' + uniqueSuffix + path.extname(file.originalname));
        }
    });

const fileFilter = (req, file, cb) => {
    // Accept images only
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
});

// Public routes
router.get('/home', getHomeContent);

// Protected routes (Admin only)
router.put('/update', adminAuthMiddleware, updateContent);
router.post('/upload-image', adminAuthMiddleware, upload.single('image'), uploadImage);
router.get('/all', adminAuthMiddleware, getAllContent);
router.delete('/:key', adminAuthMiddleware, deleteContent);

export default router;
