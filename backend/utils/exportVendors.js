import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import User from '../models/User.js';

const EXPORT_DIR = path.resolve('exports');
const EXPORT_PATH = path.join(EXPORT_DIR, 'vendors.xlsx');

// Rebuilds exports/vendors.xlsx from every vendor currently in the database.
// Called automatically right after a new vendor signs up.
export async function regenerateVendorExcel() {
    try {
        fs.mkdirSync(EXPORT_DIR, { recursive: true });

        const vendors = await User.find({ role: 'vendor' }).sort({ createdAt: -1 });

        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('Vendors');

        sheet.columns = [
            { header: 'Company Name', key: 'companyName', width: 30 },
            { header: 'GST Number', key: 'gstNo', width: 20 },
            { header: 'Business Address', key: 'address', width: 35 },
            { header: 'Products / Services Offered', key: 'products', width: 30 },
            { header: 'Mobile Number', key: 'mobile', width: 18 },
            { header: 'Email', key: 'email', width: 28 },
            { header: 'Registered On', key: 'createdAt', width: 22 },
        ];

        sheet.getRow(1).font = { bold: true };

        vendors.forEach((v) => {
            sheet.addRow({
                companyName: v.vendorDetails.companyName || 'null',
                gstNo: v.vendorDetails.gstNo || 'null',
                address: v.vendorDetails.address || 'null',
                products: v.vendorDetails.products || 'null',
                mobile: v.vendorDetails.mobile || 'null',
                email: v.email || 'null',
                createdAt: v.createdAt ? new Date(v.createdAt).toLocaleString() : 'null',
            });
        });

        await workbook.xlsx.writeFile(EXPORT_PATH);
        return EXPORT_PATH;
    } catch (error) {
        console.error('Failed to regenerate vendor Excel:', error);
        throw error;
    }
}

export { EXPORT_PATH };