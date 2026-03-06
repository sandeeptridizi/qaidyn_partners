import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    JobTitle: { type: String, required: true, trim: true },
    Type: { type: String, trim: true, default: '' },
    FieldOfJob: { type: String, trim: true, default: '' },
    Category: { type: String, trim: true, default: '' },
    Qualification: { type: String, trim: true, default: '' },
    PostDate: { type: String, trim: true, default: '' },
    Location: { type: String, trim: true, default: '' },
    ShortDiscription: { type: String, default: '' },
    JobDiscription: { type: String, default: '' },
    Requirements: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

careerSchema.pre('save', function (next) {
    this.updated_at = Date.now();
    next();
});

careerSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => { ret.id = ret._id.toString(); delete ret._id; }
});

const Career = mongoose.model('Career', careerSchema);
export default Career;
