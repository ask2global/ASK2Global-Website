import React, { useState } from 'react';

export default function CustomerSignup({ onSubmit, loading, error }) {
  const [form, setForm] = useState({ mobile: '', email: '', password: '' });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass =
    'w-full text-xs px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Mobile Number</label>
        <input required type="tel" value={form.mobile} onChange={update('mobile')} className={inputClass} placeholder="98765 43210" />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
        <input required type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="you@gmail.com" />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
        <input required type="password" minLength={6} value={form.password} onChange={update('password')} className={inputClass} placeholder="Min. 6 characters" />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 disabled:opacity-60 text-black rounded-xl text-xs font-bold transition-all shadow-lg shadow-amber-500/20"
      >
        {loading ? 'Creating account...' : 'Create Customer Account'}
      </button>
    </form>
  );
}