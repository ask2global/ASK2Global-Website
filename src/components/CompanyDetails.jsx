import React from 'react';
import { 
  Building2, 
  MapPin, 
  FileCheck2, 
  Landmark, 
  ShieldCheck, 
  Network, 
  Globe2 
} from 'lucide-react';

export default function CompanyDetails() {
  return (
    <section 
      id="about" 
      className="relative w-full py-20 bg-white text-slate-800 overflow-hidden border-b border-amber-500/20"
    >
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))]" 
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:32px_32px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Network className="w-3.5 h-3.5 text-amber-600" />
              <span>About ASK2 Global</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built for Institutional &amp; Global Trade
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
            International procurement contractor, tender execution partner, and bulk commodities supplier facilitating verifiable supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Identity Card */}
          <div className="lg:col-span-1 group p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/80 hover:border-amber-400 backdrop-blur-md shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider text-amber-900 bg-amber-100 border border-amber-300">
                <ShieldCheck className="w-3 h-3 text-amber-700" /> VERIFIED
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">ASK2 GLOBAL</h3>
            <p className="text-xs text-amber-700 font-mono font-semibold uppercase tracking-wider mb-4">Private Limited</p>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Institutional supplier and procurement contractor bridging domestic manufacturers and producers with structured trade corridors.
            </p>
            <div className="pt-4 border-t border-amber-200/60 flex items-center gap-2 text-xs text-slate-600">
              <Globe2 className="w-4 h-4 text-amber-600" />
              <span>International Procurement &amp; Bulk Trade</span>
            </div>
          </div>

          {/* Statutory Identifiers */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 backdrop-blur-sm transition-all duration-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700 border border-amber-200">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Corporate Identity</span>
                  <h4 className="text-sm font-semibold text-slate-800">Statutory Identifiers</h4>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block font-medium">Corporate Identification Number (CIN)</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-800 mt-0.5 block select-all">
                    U74102UP2025PTC229488
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 block font-medium">Registrar of Companies (ROC)</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 block">
                    ROC Kanpur, Uttar Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Registered Headquarters */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 backdrop-blur-sm transition-all duration-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Statutory Domicile</span>
                  <h4 className="text-sm font-semibold text-slate-800">Registered Office</h4>
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 h-[calc(100%-4rem)] flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium mb-1">Corporate HQ</span>
                  <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">
                    Vikas Nagar, Lakhanpur, Kanpur Nagar, Uttar Pradesh — 208024, India
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Jurisdiction: India</span>
                  <span className="inline-flex items-center gap-1 font-mono text-slate-600">
                    <Landmark className="w-3.5 h-3.5 text-amber-600" /> Commercial Registry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}