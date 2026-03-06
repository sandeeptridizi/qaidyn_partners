import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    DepartmentOfblog: { type: String, trim: true, default: '' },
    image_url: { type: String, default: '' },
    blog_content: { type: String, default: '' },
    author_name: { type: String, trim: true, default: '' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

blogSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

blogSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => { ret.id = ret._id.toString(); delete ret._id; }
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
