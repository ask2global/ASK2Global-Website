import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Boxes, 
  Anchor, 
  MapPin
} from 'lucide-react';

export default function RFQModal({ product, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    quantity: '',
    incoterm: 'FOB',
    destinationPort: ''
  });

  if (!product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all font-sans"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-neutral-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600" />
        
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {product.sku}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {product.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Request Bulk Quotation
            </h3>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
              {product.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">RFQ Submitted Successfully</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Your bulk inquiry for <span className="text-amber-300 font-semibold">{product.title}</span> has been recorded.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-black border border-neutral-800 text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-slate-500 font-sans">Entity:</span>
                  <span className="text-slate-200">{formData.companyName}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-slate-500 font-sans">Dispatch Email:</span>
                  <span className="text-slate-200">{formData.workEmail}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                  <span className="text-slate-500 font-sans">Volume:</span>
                  <span className="text-slate-200">{formData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-sans">Terms &amp; Port:</span>
                  <span className="text-amber-300">{formData.incoterm} — {formData.destinationPort}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
                >
                  Return to Catalog
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-3 gap-2 pb-2 border-b border-neutral-800 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                <span className="text-amber-400">01 Buyer Details</span>
                <span className="text-amber-400">02 Logistics</span>
                <span className="text-amber-400">03 Confirm</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Company Name</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Apex International Corp."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 bg-black border border-neutral-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Corporate Work Email</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="procurement@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 bg-black border border-neutral-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Boxes className="w-3.5 h-3.5 text-amber-400" />
                      <span>Volume</span>
                    </label>
                    <span className="text-[10px] text-amber-400 font-mono">MOQ: {product.moq}</span>
                  </div>
                  <input
                    required
                    type="text"
                    placeholder={`e.g., ${product.moq}`}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 bg-black border border-neutral-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-amber-400" />
                    <span>Incoterm</span>
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 bg-black border border-neutral-800 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                  >
                    <option value="FOB">FOB (Free on Board)</option>
                    <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="EXW">EXW (Ex Works)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Destination Discharge Port / Hub</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Jebel Ali, Dubai or Mundra Port, India"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 bg-black border border-neutral-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit RFQ Commercial Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}