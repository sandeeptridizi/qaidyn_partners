import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

const setupAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Check if admin exists
        const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });

        if (existingAdmin) {
            console.log('⚠️  Admin already exists!');
            console.log(`Email: ${existingAdmin.email}`);
            process.exit(0);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

        // Create admin
        const admin = new Admin({
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            name: 'Admin'
        });

        await admin.save();

        console.log('✅ Admin created successfully!');
        console.log(`Email: ${admin.email}`);
        console.log(`Password: ${process.env.ADMIN_PASSWORD}`);
        console.log('\n⚠️  Please change the password after first login!');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error setting up admin:', error);
        process.exit(1);
    }
};

setupAdmin();
