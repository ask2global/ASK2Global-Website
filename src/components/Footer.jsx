import React from 'react';
import { Mail, ShieldCheck, ExternalLink, ArrowRight, Building, FileText, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      id="footer" 
      className="relative w-full bg-black text-zinc-400 text-xs border-t border-amber-500/20 font-sans overflow-hidden select-none"
    >
      {/* Dynamic Animated Gold/Silver Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_-20%,#f59e0b_0%,transparent_50%)] animate-pulse duration-1000" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-5 group">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-amber-500/40">
                <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                  <span className="font-black text-xs tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500">
                    A2G
                  </span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-sm tracking-tight block group-hover:text-amber-300 transition-colors">
                  ASK2 GLOBAL
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block -mt-1">
                  Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-[12px] text-zinc-400 leading-relaxed font-light">
              International enterprise procurement, tender execution, and bulk commodities distribution network.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-amber-500/30 text-[11px] text-amber-300 shadow-inner backdrop-blur-md transition-all hover:border-amber-400/60">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">Verified Legal Entity</span>
            </div>
          </div>

          {/* Core Divisions */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>Core Divisions</span>
            </h4>
            <ul className="space-y-3 text-[12px]">
              {[
                { name: 'B2B Commodity Desk', href: '#products' },
                { name: 'State Procurement Portal', href: '#tenders' },
                { name: 'Subcontractor Onboarding', href: '#tenders' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-zinc-400 hover:text-white transition-all duration-300 flex items-center gap-2 group/link"
                  >
                    <ArrowRight className="w-3 h-3 text-amber-500/50 group-hover/link:text-amber-400 group-hover/link:translate-x-1 transition-all" />
                    <span className="group-hover/link:translate-x-0.5 transition-all">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Statutory */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-slate-300" />
              <span>Statutory Compliance</span>
            </h4>
            <div className="space-y-2.5 text-[11px] font-mono">
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-zinc-800 hover:border-slate-500/40 transition-all backdrop-blur-sm">
                <span className="text-zinc-500 block text-[9px] uppercase font-sans tracking-wider">CIN</span>
                <span className="text-slate-100 font-semibold select-all tracking-wide">U74102UP2025PTC229488</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-zinc-800 hover:border-slate-500/40 transition-all backdrop-blur-sm">
                <span className="text-zinc-500 block text-[9px] uppercase font-sans tracking-wider">ROC Filing</span>
                <span className="text-slate-300">Kanpur, India</span>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-zinc-800 hover:border-slate-500/40 transition-all backdrop-blur-sm">
                <span className="text-zinc-500 block text-[9px] uppercase font-sans tracking-wider">HQ Location</span>
                <span className="text-slate-300 font-sans">Lakhanpur, Vikas Nagar</span>
              </div>
            </div>
          </div>

          {/* Contact Trade Desk */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-[11px] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact Trade Desk</span>
            </h4>
            <div className="space-y-3 text-[12px]">
              <div className="p-3 rounded-xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-500/50 transition-all group/card shadow-lg backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-1 font-mono">Commercial Contracts</span>
                <a 
                  href="mailto:procurement@ask2global.com" 
                  className="font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 text-[11px] truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover/card:scale-110 transition-transform" />
                  <span className="truncate">procurement@ask2global.com</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-500/50 transition-all group/card shadow-lg backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-1 font-mono">Official Mail</span>
                <a 
                  href="mailto:tenders@ask2global.com" 
                  className="font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 text-[11px] truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover/card:scale-110 transition-transform" />
                  <span className="truncate">ask2global@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <p>© 2026 ASK2 Global Private Limited. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-zinc-700">•</span>
            <p className="text-zinc-400 text-center sm:text-right font-light">
              Strictly for institutional, public sector, and commercial wholesale trade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}