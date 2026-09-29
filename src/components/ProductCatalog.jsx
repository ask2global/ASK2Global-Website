import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import RFQModal from './RFQModal';

const PRODUCTS = [
  { sku: 'SKU-AG-01', title: 'Non-Basmati Parboiled Rice', category: 'Agro Commodities', moq: '50 MT', terms: 'FOB, CIF' },
  { sku: 'SKU-CH-04', title: 'Technical Grade Prilled Urea 46%', category: 'Chemicals', moq: '100 MT', terms: 'CIF, CFR' },
  { sku: 'SKU-PK-12', title: 'Heavy-Duty PP Woven Sacks', category: 'Packaging', moq: '10,000 Pcs', terms: 'FOB, CIF' },
  { sku: 'SKU-AG-08', title: 'Milling Quality Yellow Maize', category: 'Agro Commodities', moq: '75 MT', terms: 'FOB, CIF' }
];

export default function ProductCatalog() {
  const [activeRFQ, setActiveRFQ] = useState(null);

  return (
    <section id="products" className="w-full bg-white text-slate-800 font-sans py-16 border-y border-slate-200">
      {/* 100% Full Width Wrapper without any max-width limits */}
      <div className="w-full px-6 sm:px-10 lg:px-16 space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 border border-amber-300 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>B2B Trade Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Product Catalog
          </h2>
        </div>

        {/* Full-width Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PRODUCTS.map((p) => (
            <div 
              key={p.sku} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-sm space-y-6 group hover:-translate-y-1 hover:shadow-md"
            >
              <div className="space-y-3">
                <span className="inline-block font-mono text-[10px] font-bold bg-amber-100 px-2.5 py-1 rounded text-amber-900 border border-amber-300 tracking-wider">
                  {p.sku}
                </span>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-amber-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  MOQ: {p.moq} | {p.terms}
                </p>
              </div>

              <button 
                onClick={() => setActiveRFQ(p)} 
                className="w-full py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:scale-[1.02] active:scale-95 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <span>Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* RFQ Modal */}
      {activeRFQ && (
        <RFQModal product={activeRFQ} onClose={() => setActiveRFQ(null)} />
      )}
    </section>
  );
}