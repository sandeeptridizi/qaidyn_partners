import mongoose from 'mongoose';

const pageContentSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['text', 'image'],
        required: true
    },
    value: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt field before saving
pageContentSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const PageContent = mongoose.model('PageContent', pageContentSchema);

export default PageContent;
