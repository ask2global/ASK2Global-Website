// src/components/VendorProfile.jsx
import React from 'react';

export default function VendorProfile({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-neutral-900 border border-amber-500/30 w-full max-w-2xl rounded-2xl p-6 text-white relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-amber-400 mb-2">{user.companyName}</h2>
        <p className="text-xs text-slate-400 mb-6">GSTIN: {user.gstNo}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-xs text-slate-500 uppercase block">Business Address</span>
            <span className="text-sm font-medium">{user.address}</span>
          </div>

          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-xs text-slate-500 uppercase block">Products / Services</span>
            <span className="text-sm font-medium">{user.products}</span>
          </div>

          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-xs text-slate-500 uppercase block">Email</span>
            <span className="text-sm font-medium">{user.email}</span>
          </div>

          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-xs text-slate-500 uppercase block">Mobile</span>
            <span className="text-sm font-medium">{user.mobile}</span>
          </div>
        </div>
      </div>
    </div>
  );
}