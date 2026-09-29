import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import multer from 'multer';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;
const VALID_STATUSES = ['Open', 'Under Evaluation', 'Awarded'];

if (!WEBHOOK_SECRET || !ADMIN_API_KEY) {
    console.error('Set WEBHOOK_SECRET and ADMIN_API_KEY in .env');
    process.exit(1);
}

/* ---------- MongoDB Schema & Model (Tenders) ---------- */
const tenderSchema = new mongoose.Schema({
    tenderId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    authority: { type: String, required: true },
    sector: { type: String, required: true },
    value: { type: String, required: true },
    deadline: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: VALID_STATUSES,
        default: 'Open',
    },
    approvalDate: { type: String },
    rfpUrl: { type: String, default: '#' },
    awardDocUrl: { type: String },
}, { timestamps: true });

const Tender = mongoose.model('Tender', tenderSchema);

// Seed initial data if DB is empty
const seedDatabase = async() => {
    try {
        const count = await Tender.countDocuments();
        if (count === 0) {
            await Tender.insertMany([{
                    tenderId: 'TND-2026-AG09',
                    title: 'Supply and Delivery of 5,000 MT Non-Basmati Milled Rice',
                    authority: 'State Civil Supplies Corporation',
                    sector: 'Agro Commodities',
                    value: '₹14.20 Cr',
                    deadline: '2026-10-15T18:00:00',
                    status: 'Open',
                },
                {
                    tenderId: 'TND-2026-CH04',
                    title: 'Procurement of Granular Urea and Industrial Nitrogen Chemicals',
                    authority: 'Fertilizer Corporation Directorate',
                    sector: 'Industrial & Chemicals',
                    value: '₹8.75 Cr',
                    deadline: '2026-09-28T14:30:00',
                    status: 'Open',
                },
                {
                    tenderId: 'TND-2026-LG02',
                    title: 'Annual Rate Contract for Multimodal Freight Forwarding (Ex-Kandla)',
                    authority: 'Port Logistics Wing',
                    sector: 'Logistics',
                    value: '₹3.50 Cr',
                    deadline: '2026-09-20T17:00:00',
                    status: 'Under Evaluation',
                },
                {
                    tenderId: 'TND-2026-PK01',
                    title: 'Bulk Export Order of Food-Grade Polypropylene Woven Bags',
                    authority: 'Global Procurement Hub (EMEA)',
                    sector: 'Packaging & OEM',
                    value: '$620,000',
                    deadline: '2026-08-10T12:00:00',
                    status: 'Awarded',
                },
            ]);
            console.log('Database seeded with default tenders.');
        }
    } catch (err) {
        console.error('Seeding error:', err.message);
    }
};

/* ---------- App + Socket.io + Database Connect ---------- */
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: CLIENT_ORIGIN } });

// Connect to MongoDB Atlas
connectDB().then(() => {
    seedDatabase();
});

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json({ limit: '1mb' }));

// Auth routes: /api/auth/register/vendor, /register/customer, /login/employee
app.use('/api/auth', authRoutes);

const uploadDir = path.resolve('uploads');
fs.mkdirSync(uploadDir, { recursive: true });
app.use('/uploads', express.static(uploadDir));

const upload = multer({
    storage: multer.diskStorage({
        destination: uploadDir,
        filename: (_req, file, cb) =>
            cb(null, `${Date.now()}-${file.originalname.replace(/[^\w.\-]/g, '_')}`),
    }),
    limits: { fileSize: 15 * 1024 * 1024 },
    fileFilter: (_req, file, cb) =>
        cb(null, ['application/pdf', 'image/png', 'image/jpeg'].includes(file.mimetype)),
});

/* ---------- Auth helpers ---------- */
const safeEqual = (a = '', b = '') => {
    const ba = Buffer.from(String(a));
    const bb = Buffer.from(String(b));
    return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
};

const requireWebhookSecret = (req, res, next) =>
    safeEqual(req.get('x-webhook-secret'), WEBHOOK_SECRET) ?
    next() :
    res.status(401).json({ error: 'Invalid webhook secret' });

const requireAdmin = (req, res, next) =>
    safeEqual(req.get('x-api-key'), ADMIN_API_KEY) ?
    next() :
    res.status(401).json({ error: 'Unauthorized' });

/* ---------- Helper to format tender response ---------- */
const toClient = (t) => ({
    id: t.tenderId,
    title: t.title,
    authority: t.authority,
    sector: t.sector,
    value: t.value,
    deadline: t.deadline,
    status: t.status,
    documentUrl: t.awardDocUrl || t.rfpUrl || '#',
    approvalDate: t.approvalDate,
    updatedAt: t.updatedAt,
});

/* ---------- Core update logic ---------- */
async function applyTenderUpdate({ tenderId, status, approvalDate, rfpUrl, awardDocUrl }) {
    const existing = await Tender.findOne({ tenderId });
    if (!existing) return { error: 'Tender not found', code: 404 };

    if (status && !VALID_STATUSES.includes(status)) {
        return { error: `status must be one of: ${VALID_STATUSES.join(', ')}`, code: 400 };
    }

    if (status) existing.status = status;
    if (approvalDate) {
        existing.approvalDate = approvalDate;
    } else if (status === 'Awarded' && !existing.approvalDate) {
        existing.approvalDate = new Date().toISOString();
    }

    if (rfpUrl) existing.rfpUrl = rfpUrl;
    if (awardDocUrl) existing.awardDocUrl = awardDocUrl;

    await existing.save();

    const updated = toClient(existing);
    io.emit('tender_status_updated', updated); // real-time push to all connected frontend clients
    return { tender: updated };
}

/* ---------- Routes ---------- */
app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/tenders', async(_req, res) => {
    try {
        const tenders = await Tender.find().sort({ deadline: 1 });
        res.json(tenders.map(toClient));
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tenders' });
    }
});

// 1) Webhook from GeM automation / internal ERP
app.post('/api/gem-webhook', requireWebhookSecret, async(req, res) => {
    const { tenderId, status, approvalDate, rfpUrl, awardDocUrl } = req.body || {};
    if (!tenderId || !status) {
        return res.status(400).json({ error: 'tenderId and status are required' });
    }

    const result = await applyTenderUpdate({
        tenderId,
        status,
        approvalDate,
        rfpUrl,
        awardDocUrl,
    });

    if (result.error) return res.status(result.code).json({ error: result.error });
    res.json({ ok: true, tender: result.tender });
});

// 2) Upload RFP / Award document for a tender (internal use)
app.post(
    '/api/tenders/:id/documents',
    requireAdmin,
    upload.fields([
        { name: 'rfp', maxCount: 1 },
        { name: 'award', maxCount: 1 },
    ]),
    async(req, res) => {
        const tender = await Tender.findOne({ tenderId: req.params.id });
        if (!tender) return res.status(404).json({ error: 'Tender not found' });

        const rfp = req.files ? req.files.rfp : null;
        const award = req.files ? req.files.award : null;
        if (!rfp && !award) {
            return res.status(400).json({ error: 'Attach a PDF/PNG/JPG as "rfp" or "award"' });
        }

        const base = `${req.protocol}://${req.get('host')}/uploads`;
        const result = await applyTenderUpdate({
            tenderId: tender.tenderId,
            status: tender.status,
            rfpUrl: rfp ? `${base}/${rfp.filename}` : undefined,
            awardDocUrl: award ? `${base}/${award.filename}` : undefined,
        });

        res.json({ ok: true, tender: result.tender });
    }
);

/* ---------- Socket events ---------- */
io.on('connection', (socket) => {
    console.log('Client connected to Live Socket:', socket.id);
    socket.on('disconnect', () => console.log('Client disconnected:', socket.id));
});

server.listen(PORT, () => console.log(`API + Socket.io running on http://localhost:${PORT}`));