import express from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import path from 'path';
import User from '../models/User.js';
import { signToken, requireAuth, requireRole } from '../middleware/auth.js';
import { regenerateVendorExcel, EXPORT_PATH } from '../utils/exportVendors.js';

const router = express.Router();

const EMPLOYEE_WHITELIST = (process.env.EMPLOYEE_WHITELIST || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

function isApprovedEmployeeEmail(email) {
    const e = email.toLowerCase();
    return e.endsWith('@askglobal.com') || EMPLOYEE_WHITELIST.includes(e);
}

const publicUser = (user) => ({
    id: user._id,
    email: user.email,
    role: user.role,
    vendorDetails: user.vendorDetails,
    customerDetails: user.customerDetails,
});

/* ---------------- Vendor Registration (Includes Products) ---------------- */
router.post('/register/vendor', async(req, res) => {
    try {
        const { email, password, gstNo, companyName, address, mobile, products } = req.body;
        if (!email || !password || !gstNo || !companyName || !mobile) {
            return res.status(400).json({ error: 'email, password, gstNo, companyName and mobile are required' });
        }

        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) return res.status(409).json({ error: 'An account with this email already exists' });

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({
            email: email.toLowerCase(),
            password: passwordHash,
            role: 'vendor',
            vendorDetails: { gstNo, companyName, address, mobile, products: products || '' },
        });

        // Trigger Excel regeneration asynchronously
        regenerateVendorExcel().catch((err) => console.error('Vendor Excel export failed:', err.message));

        const token = signToken(user);
        res.status(201).json({ token, user: publicUser(user) });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed', details: err.message });
    }
});

/* ---------------- Customer Registration ---------------- */
router.post('/register/customer', async(req, res) => {
    try {
        const { email, password, mobile } = req.body;
        if (!email || !password || !mobile) {
            return res.status(400).json({ error: 'email, password and mobile are required' });
        }

        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) return res.status(409).json({ error: 'An account with this email already exists' });

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({
            email: email.toLowerCase(),
            password: passwordHash,
            role: 'customer',
            customerDetails: { mobile },
        });

        const token = signToken(user);
        res.status(201).json({ token, user: publicUser(user) });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed', details: err.message });
    }
});

/* ---------------- General Login (Vendor & Customer) ---------------- */
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'email and password are required' });
        }

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid email or password' });

        const token = signToken(user);
        res.json({ token, user: publicUser(user) });
    } catch (err) {
        res.status(500).json({ error: 'Login failed', details: err.message });
    }
});

/* ---------------- Employee Login (Restricted) ---------------- */
router.post('/login/employee', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'email and password are required' });
        }

        if (!isApprovedEmployeeEmail(email)) {
            return res.status(403).json({ error: 'This email is not authorized for employee access' });
        }

        const user = await User.findOne({ email: email.toLowerCase(), role: 'employee' });
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Invalid email or password' });

        const token = signToken(user);
        res.json({ token, user: publicUser(user) });
    } catch (err) {
        res.status(500).json({ error: 'Login failed', details: err.message });
    }
});

/* ---------------- Forgot Password ---------------- */
router.post('/forgot-password', async(req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });

        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(404).json({ error: 'No account found with this email' });
        }

        // Generate reset token valid for 1 hour
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000;

        await user.save();

        res.json({
            message: 'Password reset token generated',
            resetToken,
            resetUrl: `http://localhost:5173/reset-password?token=${resetToken}`
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to process forgot password request', details: err.message });
    }
});

/* ---------------- Reset Password ---------------- */
router.post('/reset-password', async(req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) {
            return res.status(400).json({ error: 'Token and new password are required' });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: 'Invalid or expired reset token' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to reset password', details: err.message });
    }
});

/* ---------------- Employee Profile Route ---------------- */
router.get('/employee/me', requireAuth, requireRole('employee'), async(req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ user: publicUser(user) });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user', details: err.message });
    }
});

/* ---------------- Download Vendors as Excel (Admin Only) ---------------- */
router.get('/admin/vendors/export', async(req, res) => {
    const apiKey = req.query.key || req.get('x-api-key');

    if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    try {
        await regenerateVendorExcel();
        res.download(path.resolve(EXPORT_PATH), 'vendors.xlsx');
    } catch (err) {
        res.status(500).json({ error: 'Could not generate Excel file', details: err.message });
    }
});

export default router;