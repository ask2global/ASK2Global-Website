import React from 'react';
import { Mail, Phone, ShieldCheck, ArrowRight, Building, FileText, Sparkles, Briefcase } from 'lucide-react';
import logoImg from '../assets/ask2 logo 2.jpeg'; 

export default function Footer() {
  const services = [
    { name: 'Bulk Commodity Supply', href: '#products' },
    { name: 'Tender Execution', href: '#tenders' },
    { name: 'GeM Portal Bidding', href: '#tenders' },
    { name: 'Vendor Empanels', href: '#tenders' },
    { name: 'Logistics Support', href: '#products' },
    { name: 'Quality Inspection', href: '#services' },
    { name: 'Import & Export', href: '#products' },
  ];

  return (
    <footer 
      id="footer" 
      className="relative w-full bg-black text-zinc-300 text-sm border-t border-amber-500/20 font-sans overflow-hidden select-none"
    >
      {/* Dynamic Animated Gold/Silver Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_-20%,#f59e0b_0%,transparent_50%)] animate-pulse duration-1000" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 5-Column Grid Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-5 group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              {/* Logo Box - Prominent Size & High Glow */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] shrink-0">
                <div className="w-full h-full bg-black rounded-[14px] overflow-hidden flex items-center justify-center">
                  <img 
                    src={logoImg} 
                    alt="ASK2 GLOBAL Logo" 
                    className="w-full h-full object-contain p-1 transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div>
                <span className="font-black text-white text-lg sm:text-xl tracking-tight block group-hover:text-amber-300 transition-colors leading-snug">
                  ASK2 GLOBAL
                </span>
                <span className="text-xs text-amber-400/80 font-mono tracking-widest uppercase block mt-0.5 font-semibold">
                  Pvt. Ltd.
                </span>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed font-light text-[13px]">
              International enterprise procurement, tender execution, and bulk commodities distribution network.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-amber-500/30 text-xs text-amber-300 shadow-inner backdrop-blur-md transition-all hover:border-amber-400/60">
              <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">Verified Legal Entity</span>
            </div>
          </div>

          {/* Core Divisions */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
              <Building className="w-4 h-4 text-amber-400" />
              <span>Core Divisions</span>
            </h4>
            <ul className="space-y-3 text-[13px]">
              {[
                { name: 'B2B Commodity Desk', href: '#products' },
                { name: 'State Procurement Portal', href: '#tenders' },
                { name: 'Subcontractor Onboarding', href: '#tenders' },
                { name: 'Global Supply Chain', href: '#products' },
                { name: 'Infrastructure Tenders', href: '#tenders' },
                { name: 'Government e-Marketplace', href: '#tenders' },
                { name: 'Corporate Joint Ventures', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-zinc-300 hover:text-amber-300 transition-all duration-300 flex items-center gap-2 group/link"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500/50 group-hover/link:text-amber-400 group-hover/link:translate-x-1 transition-all" />
                    <span className="group-hover/link:translate-x-0.5 transition-all truncate">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3 text-[13px]">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-zinc-300 hover:text-amber-300 transition-all duration-300 flex items-center gap-2 group/link"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500/50 group-hover/link:text-amber-400 group-hover/link:translate-x-1 transition-all" />
                    <span className="group-hover/link:translate-x-0.5 transition-all truncate">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Statutory Compliance */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Statutory Compliance</span>
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-zinc-800 hover:border-slate-500/40 transition-all backdrop-blur-sm">
                <span className="text-zinc-400 block text-[10px] uppercase font-sans tracking-wider">ROC Filing</span>
                <span className="text-slate-200">Kanpur, India</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900/60 border border-zinc-800 hover:border-slate-500/40 transition-all backdrop-blur-sm">
                <span className="text-zinc-400 block text-[10px] uppercase font-sans tracking-wider">HQ Location</span>
                <span className="text-slate-200 font-sans text-xs">Vikas Nagar, Lakhanpur, Kanpur Nagar, Uttar Pradesh — 208024, India</span>
              </div>
            </div>
          </div>

          {/* Contact Trade Desk */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact Trade Desk</span>
            </h4>
            <div className="space-y-3 text-[13px]">
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-500/50 transition-all group/card shadow-lg backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1 font-mono">Commercial Contracts</span>
                <a 
                  href="mailto:procurement@ask2global.com" 
                  className="font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 text-xs truncate"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 group-hover/card:scale-110 transition-transform" />
                  <span className="truncate">procurement@ask2global.com</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-500/50 transition-all group/card shadow-lg backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1 font-mono">Official Mail</span>
                <a 
                  href="mailto:ask2global@gmail.com" 
                  className="font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 text-xs truncate"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 group-hover/card:scale-110 transition-transform" />
                  <span className="truncate">ask2global@gmail.com</span>
                </a>
              </div>

              {/* Mobile Number Box */}
              <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-amber-500/20 hover:border-amber-500/50 transition-all group/card shadow-lg backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1 font-mono">Support Phone</span>
                <a 
                  href="tel:+919889889399" 
                  className="font-mono text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2 text-xs truncate"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 group-hover/card:scale-110 transition-transform" />
                  <span className="truncate">+91 9889889399</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center gap-2 text-zinc-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <p>© 2025 ASK2Global Private Limited. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-zinc-700">•</span>
            <p className="text-zinc-300 text-center sm:text-right font-light">
              Strictly for institutional, public sector, and commercial wholesale trade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}