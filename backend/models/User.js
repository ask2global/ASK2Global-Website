import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true, // Stored as a bcrypt hash
    },
    role: {
        type: String,
        enum: ['vendor', 'customer', 'employee'],
        required: true,
    },

    // Only filled in when role === 'vendor'
    vendorDetails: {
        gstNo: { type: String, trim: true },
        companyName: { type: String, trim: true },
        address: { type: String, trim: true },
        products: { type: String, trim: true }, // Naya Product Category / Services field
        mobile: { type: String, trim: true },
    },

    // Only filled in when role === 'customer'
    customerDetails: {
        mobile: { type: String, trim: true },
    },

    // Forgot Password Fields
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
}, { timestamps: true });

export default mongoose.model('User', userSchema);