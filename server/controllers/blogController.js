import Blog from '../models/Blog.js';

// Public: list all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ created_at: -1 }).lean();
        const list = blogs.map((b) => ({ ...b, id: b._id.toString(), _id: undefined }));
        res.json({ success: true, blogs: list });
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching blogs.' });
    }
};

// Public: get single blog by id
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).lean();
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found.' });
        }
        res.json({ success: true, blog: { ...blog, id: blog._id.toString(), _id: undefined } });
    } catch (error) {
        console.error('Get blog error:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching blog.' });
    }
};

// Admin: create blog
export const createBlog = async (req, res) => {
    try {
        const { title, DepartmentOfblog, image_url, blog_content, author_name } = req.body;
        if (!title) {
            return res.status(400).json({ success: false, message: 'Title is required.' });
        }
        const doc = await Blog.create({
            title: title.trim(),
            DepartmentOfblog: DepartmentOfblog || '',
            image_url: image_url || '',
            blog_content: blog_content || '',
            author_name: author_name || '',
        });
        const blog = doc.toJSON ? doc.toJSON() : { ...doc.toObject(), id: doc._id.toString() };
        res.status(201).json({ success: true, blog });
    } catch (error) {
        console.error('Create blog error:', error);
        res.status(500).json({ success: false, message: 'Server error while creating blog.' });
    }
};

// Admin: update blog
export const updateBlog = async (req, res) => {
    try {
        const { title, DepartmentOfblog, image_url, blog_content, author_name } = req.body;
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                ...(title !== undefined && { title: title.trim() }),
                ...(DepartmentOfblog !== undefined && { DepartmentOfblog }),
                ...(image_url !== undefined && { image_url }),
                ...(blog_content !== undefined && { blog_content }),
                ...(author_name !== undefined && { author_name }),
                updated_at: Date.now(),
            },
            { new: true }
        );
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found.' });
        }
        const out = blog.toJSON ? blog.toJSON() : { ...blog.toObject(), id: blog._id.toString() };
        res.json({ success: true, blog: out });
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({ success: false, message: 'Server error while updating blog.' });
    }
};

// Admin: delete blog
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found.' });
        }
        res.json({ success: true, message: 'Blog deleted successfully.' });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({ success: false, message: 'Server error while deleting blog.' });
    }
};
