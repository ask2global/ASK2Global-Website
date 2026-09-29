import React from 'react';
import { ShieldCheck, TrendingUp, Building2, Zap } from 'lucide-react';
import Ask2GlobalLogoAnimation from './Ask2GlobalLogoAnimation';

export default function TradingoHero() {
  return (
    <section className="relative w-full text-slate-100 font-sans flex flex-col justify-between py-8">
      
      {/* Main Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Value Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-amber-500/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              <span className="text-xs font-medium text-slate-200 tracking-wide">
                Zero-Commission B2B Trade Engine
              </span>
              <span className="text-slate-600 font-mono">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                5-Layer KYC Verified
              </span>
            </div>

            {/* Headline & Sub-copy */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Buy Better. Sell Faster.{' '}
                <span className="text-amber-400">
                  Trade with Zero Risk.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Connect directly with audited tier-1 manufacturers, automate multi-vendor RFQs, and secure cross-border settlements with institutional escrow.
              </p>
            </div>

          </div>

          {/* Right Column - Logo Image / Animation */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <Ask2GlobalLogoAnimation />
          </div>

        </div>
      </div>

      {/* Quick Metric Ticker */}
      <div className="w-full border-t border-amber-500/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:divide-x md:divide-amber-500/20">
            
            <div className="flex items-center justify-start md:justify-center gap-3">
              <div className="p-2 text-amber-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg font-black font-mono text-white tracking-tight">₹450Cr+</span>
                <span className="text-[11px] text-slate-400 ml-2 font-medium uppercase tracking-wider">Volume Traded</span>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-center gap-3">
              <div className="p-2 text-slate-200">
                <Building2 className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <span className="text-lg font-black font-mono text-white tracking-tight">33K+</span>
                <span className="text-[11px] text-slate-400 ml-2 font-medium uppercase tracking-wider">Verified MSMEs</span>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-center gap-3">
              <div className="p-2 text-amber-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg font-black font-mono text-white tracking-tight">0%</span>
                <span className="text-[11px] text-slate-400 ml-2 font-medium uppercase tracking-wider">Transaction Fee</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}