import PageContent from '../models/PageContent.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get Page Content (Public)
export const getHomeContent = async (req, res) => {
    try {
        // Fetch all content (or filter by page prefix if provided in query)
        const { page } = req.query;
        const filter = page ? { key: { $regex: `^${page}\\.` } } : {};

        const content = await PageContent.find(filter);

        // Convert array to object for easier frontend consumption
        const contentMap = {};
        content.forEach(item => {
            contentMap[item.key] = {
                type: item.type,
                value: item.value,
                updatedAt: item.updatedAt
            };
        });

        res.json({
            success: true,
            content: contentMap
        });
    } catch (error) {
        console.error('Get content error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching content.'
        });
    }
};

// Update Content (Admin Only)
export const updateContent = async (req, res) => {
    try {
        const { key, type, value } = req.body;

        // Debug logging
        console.log('Update content request:', { key, type, value, valueType: typeof value });

        // Validation
        if (!key || !type || value === undefined || value === null) {
            console.log('Validation failed:', { key: !!key, type: !!type, value });
            return res.status(400).json({
                success: false,
                message: 'Key, type, and value are required.'
            });
        }

        // Validate type
        if (!['text', 'image'].includes(type)) {
            console.log('Invalid type:', type);
            return res.status(400).json({
                success: false,
                message: 'Type must be either "text" or "image".'
            });
        }

        // Update or create content
        const content = await PageContent.findOneAndUpdate(
            { key },
            { key, type, value, updatedAt: Date.now() },
            { new: true, upsert: true }
        );

        res.json({
            success: true,
            message: 'Content updated successfully.',
            content: {
                key: content.key,
                type: content.type,
                value: content.value,
                updatedAt: content.updatedAt
            }
        });
    } catch (error) {
        console.error('Update content error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while updating content.'
        });
    }
};

// Upload Image (Admin Only)
export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded.'
            });
        }

        const { key } = req.body;

        if (!key) {
            return res.status(400).json({
                success: false,
                message: 'Content key is required.'
            });
        }

        // Generate image URL
        let imageUrl;
        // If path starts with http, it's a Cloudinary/remote URL
        if (req.file.path && (req.file.path.startsWith('http') || req.file.path.startsWith('https'))) {
            imageUrl = req.file.path;
        } else {
            // Local upload fallback
            imageUrl = `/uploads/${req.file.filename}`;
        }

        // Update or create content
        const content = await PageContent.findOneAndUpdate(
            { key },
            { key, type: 'image', value: imageUrl, updatedAt: Date.now() },
            { new: true, upsert: true }
        );

        res.json({
            success: true,
            message: 'Image uploaded successfully.',
            content: {
                key: content.key,
                type: content.type,
                value: content.value,
                updatedAt: content.updatedAt
            }
        });
    } catch (error) {
        console.error('Upload image error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while uploading image.'
        });
    }
};

// Get All Content (Admin Only - for debugging)
export const getAllContent = async (req, res) => {
    try {
        const content = await PageContent.find({});
        res.json({
            success: true,
            content
        });
    } catch (error) {
        console.error('Get all content error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching content.'
        });
    }
};

// Delete Content (Admin Only)
export const deleteContent = async (req, res) => {
    try {
        const { key } = req.params;

        await PageContent.findOneAndDelete({ key });

        res.json({
            success: true,
            message: 'Content deleted successfully.'
        });
    } catch (error) {
        console.error('Delete content error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while deleting content.'
        });
    }
};
