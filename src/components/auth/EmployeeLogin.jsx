import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

export default function EmployeeLogin({ onSubmit, loading, error }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass =
    'w-full text-xs px-3.5 py-2.5 bg-black border border-zinc-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500/50 focus:border-amber-500 transition-all';

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-300 leading-relaxed">
        <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400" />
        <span>Access restricted to authorized AskGlobal internal staff.</span>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
        <input required type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="you@askglobal.com" />
      </div>
      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
        <input required type="password" value={form.password} onChange={update('password')} className={inputClass} placeholder="••••••••" />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white hover:text-amber-400 disabled:opacity-60 rounded-xl text-xs font-semibold transition-all"
      >
        {loading ? 'Signing in...' : 'Employee Sign In'}
      </button>
    </form>
  );
}