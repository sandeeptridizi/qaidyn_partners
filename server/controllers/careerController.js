import Career from '../models/Career.js';

// Public: list all careers
export const getCareers = async (req, res) => {
    try {
        const careers = await Career.find().sort({ createdAt: -1 }).lean();
        const list = careers.map((c) => ({ ...c, id: c._id.toString(), _id: undefined }));
        res.json({ success: true, careers: list });
    } catch (error) {
        console.error('Get careers error:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching careers.' });
    }
};

// Public: get single career by id
export const getCareerById = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id).lean();
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found.' });
        }
        res.json({ success: true, career: { ...career, id: career._id.toString(), _id: undefined } });
    } catch (error) {
        console.error('Get career error:', error);
        res.status(500).json({ success: false, message: 'Server error while fetching career.' });
    }
};

// Admin: create career
export const createCareer = async (req, res) => {
    try {
        const body = req.body;
        const doc = await Career.create({
            JobTitle: body.JobTitle || '',
            Type: body.Type || '',
            FieldOfJob: body.FieldOfJob || '',
            Category: body.Category || '',
            Qualification: body.Qualification || '',
            PostDate: body.PostDate || '',
            Location: body.Location || '',
            ShortDiscription: body.ShortDiscription || '',
            JobDiscription: body.JobDiscription || '',
            Requirements: body.Requirements || '',
        });
        const career = doc.toJSON ? doc.toJSON() : { ...doc.toObject(), id: doc._id.toString() };
        res.status(201).json({ success: true, career });
    } catch (error) {
        console.error('Create career error:', error);
        res.status(500).json({ success: false, message: 'Server error while creating career.' });
    }
};

// Admin: update career
export const updateCareer = async (req, res) => {
    try {
        const body = req.body;
        const updateFields = {
            updated_at: Date.now(),
        };
        const allowed = ['JobTitle', 'Type', 'FieldOfJob', 'Category', 'Qualification', 'PostDate', 'Location', 'ShortDiscription', 'JobDiscription', 'Requirements'];
        allowed.forEach((key) => {
            if (body[key] !== undefined) updateFields[key] = body[key];
        });

        const career = await Career.findByIdAndUpdate(req.params.id, updateFields, { new: true });
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found.' });
        }
        const out = career.toJSON ? career.toJSON() : { ...career.toObject(), id: career._id.toString() };
        res.json({ success: true, career: out });
    } catch (error) {
        console.error('Update career error:', error);
        res.status(500).json({ success: false, message: 'Server error while updating career.' });
    }
};

// Admin: delete career
export const deleteCareer = async (req, res) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        if (!career) {
            return res.status(404).json({ success: false, message: 'Career not found.' });
        }
        res.json({ success: true, message: 'Career deleted successfully.' });
    } catch (error) {
        console.error('Delete career error:', error);
        res.status(500).json({ success: false, message: 'Server error while deleting career.' });
    }
};
