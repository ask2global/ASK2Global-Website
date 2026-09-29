import User from './models/User.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function checkVendors() {
    await mongoose.connect(process.env.MONGO_URI);
    const vendors = await User.find({ role: 'vendor' }).select('email vendorDetails createdAt');
    console.log('--- DB Vendors Data ---');
    console.table(vendors.map(v => ({
        Email: v.email,
        Company: v.vendorDetails.companyName,
        GST: v.vendorDetails.gstNo,
        Mobile: v.vendorDetails.mobile,
        Address: v.vendorDetails.address,
        Created: v.createdAt
    })));
    process.exit();
}

checkVendors();