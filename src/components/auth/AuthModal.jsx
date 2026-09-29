import React, { useState } from 'react';
import { X, Building2, User, ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import VendorSignup from './VendorSignup';
import CustomerSignup from './CustomerSignup';
import EmployeeLogin from './EmployeeLogin';

const TABS = [
  { id: 'vendor', label: 'Vendor Signup', icon: Building2 },
  { id: 'customer', label: 'Customer Signup', icon: User },
  { id: 'employee', label: 'Employee Access', icon: ShieldCheck },
];

export default function AuthModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('vendor');
  const { loading, error, registerVendor, registerCustomer, loginEmployee } = useAuth();
  const [success, setSuccess] = useState(false);

  // Forgot Password State
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  const handleVendor = async (form) => {
    try {
      await registerVendor(form);
      handleSuccess();
    } catch {
      /* error handled by useAuth */
    }
  };

  const handleCustomer = async (form) => {
    try {
      await registerCustomer(form);
      handleSuccess();
    } catch {
      /* error handled by useAuth */
    }
  };

  const handleEmployee = async (form) => {
    try {
      await loginEmployee(form);
      handleSuccess();
    } catch {
      /* error handled by useAuth */
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotError('');
    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      
      setForgotSuccess(true);
    } catch (err) {
      setForgotError(err.message);
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] h-screen w-screen bg-black flex flex-col font-sans overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Gradient Line - Gold & Silver */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-amber-200 to-slate-300" />

      {/* Navigation Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-amber-500/20 shrink-0">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">Account Access</h2>
          <p className="text-xs text-slate-400">Choose your account type to proceed</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-zinc-900 transition-all border border-zinc-800"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Centered Scrollable Workspace */}
      <div className="flex-1 overflow-y-auto px-4 py-8 flex justify-center items-start sm:items-center">
        <div className="w-full max-w-lg bg-zinc-950 border border-amber-500/30 rounded-3xl p-6 shadow-2xl shadow-amber-500/5">
          
          {/* Custom Tabs */}
          <div className="grid grid-cols-3 gap-2 pb-6">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-black text-slate-300 border border-zinc-800 hover:text-amber-300 hover:border-amber-500/40 hover:bg-zinc-900/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Form Area */}
          <div>
            {success ? (
              <div className="py-12 text-center text-base font-semibold text-amber-400">
                Success! Access Granted...
              </div>
            ) : (
              <>
                {activeTab === 'vendor' && (
                  <VendorSignup
                    onSubmit={handleVendor}
                    loading={loading}
                    error={error}
                    onOpenForgot={() => setShowForgotModal(true)}
                  />
                )}
                {activeTab === 'customer' && (
                  <CustomerSignup
                    onSubmit={handleCustomer}
                    loading={loading}
                    error={error}
                    onOpenForgot={() => setShowForgotModal(true)}
                  />
                )}
                {activeTab === 'employee' && (
                  <EmployeeLogin
                    onSubmit={handleEmployee}
                    loading={loading}
                    error={error}
                    onOpenForgot={() => setShowForgotModal(true)}
                  />
                )}
              </>
            )}
          </div>

        </div>
      </div>

      {/* FORGOT PASSWORD OVERLAY MODAL */}
      {showForgotModal && (
        <div className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-zinc-950 border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative">
            <button
              onClick={() => {
                setShowForgotModal(false);
                setForgotSuccess(false);
                setForgotError('');
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4 text-amber-400">
              <Mail className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">Reset Password</h3>
            </div>

            {forgotSuccess ? (
              <div className="text-center py-4 space-y-3">
                <p className="text-sm text-amber-400 font-medium">
                  Reset link sent! Please check your email inbox.
                </p>
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="w-full bg-zinc-900 border border-zinc-700 text-white py-2 rounded-xl text-sm font-semibold hover:bg-zinc-800"
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                <p className="text-xs text-slate-400">
                  Enter your registered email address and we will send you a link to reset your password.
                </p>

                {forgotError && (
                  <div className="text-xs text-red-400 bg-red-950/40 border border-red-800/60 p-2.5 rounded-xl">
                    {forgotError}
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@domain.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full mt-1 bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 border border-zinc-800 text-slate-300 py-2.5 rounded-xl text-xs font-semibold hover:bg-zinc-900 hover:text-white flex items-center justify-center gap-1 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-black py-2.5 rounded-xl text-xs font-bold hover:brightness-110 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
                  >
                    {forgotLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}