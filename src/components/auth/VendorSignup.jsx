import React, { useState } from 'react';

export default function VendorSignup({ onSubmit, loading, error, onOpenForgot }) {
  const [form, setForm] = useState({
    companyName: '',
    gstNo: '',
    address: '',
    products: '',
    mobile: '',
    email: '',
    password: '',
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-populate local storage with vendor details
    localStorage.setItem('registeredVendor', JSON.stringify({
      companyName: form.companyName,
      gstNo: form.gstNo,
      address: form.address,
      products: form.products,
      mobile: form.mobile,
      email: form.email,
      role: 'vendor'
    }));

    if (onSubmit) {
      onSubmit(form);
    }
  };

  const inputClass =
    'w-full text-xs px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-sans text-left">
      {error && (
        <div className="p-2.5 text-xs text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl">
          {error}
        </div>
      )}

      {/* Company Name */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Company Name</label>
        <input required type="text" value={form.companyName} onChange={update('companyName')} className={inputClass} placeholder="Apex International Corp." />
      </div>

      {/* GST Number */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">GST Number</label>
        <input required type="text" value={form.gstNo} onChange={update('gstNo')} className={inputClass} placeholder="24AAACA1234F1Z5" />
      </div>

      {/* Business Address */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Business Address</label>
        <input required type="text" value={form.address} onChange={update('address')} className={inputClass} placeholder="Industrial Area, City" />
      </div>

      {/* Products / Services Offered */}
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Products / Services Offered</label>
        <input required type="text" value={form.products} onChange={update('products')} className={inputClass} placeholder="e.g. Office Furniture, IT Hardware, Electronics" />
      </div>

      {/* Mobile & Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Mobile Number</label>
          <input required type="tel" value={form.mobile} onChange={update('mobile')} className={inputClass} placeholder="98765 43210" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
          <input required type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="vendor@company.com" />
        </div>
      </div>

      {/* Password with Forgot Password link */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="block text-xs font-medium text-slate-300">Password</label>
          {onOpenForgot && (
            <button
              type="button"
              onClick={onOpenForgot}
              className="text-xs text-amber-400 hover:text-amber-300 hover:underline focus:outline-none transition-colors"
            >
              Forgot password?
            </button>
          )}
        </div>
        <input required type="password" minLength={6} value={form.password} onChange={update('password')} className={inputClass} placeholder="••••••••" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 disabled:opacity-60 text-black rounded-xl text-xs font-bold transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
      >
        {loading ? 'Creating account...' : 'Register as Vendor'}
      </button>
    </form>
  );
}