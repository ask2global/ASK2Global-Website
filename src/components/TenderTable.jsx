import React from 'react';
import { 
  Building2, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Award, 
  FileText, 
  ArrowRight, 
  UserCheck, 
  UserPlus, 
  Headphones, 
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

export default function TenderPerformanceSection() {
  const successRate = 87.3;

  /* 
   Hover Golden Effect Setup:
   - Normal State: 3D Silver Metallic Gradient
   - Hover State: Full Glossy Gold Gradient with Amber Glow
  */

  const interactiveCard = "relative p-7 rounded-3xl bg-gradient-to-b from-slate-200 via-slate-100 to-slate-400 border border-slate-300 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:border-amber-300 hover:text-slate-950 hover:shadow-[0_0_35px_rgba(245,158,11,0.6),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-[1.03] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer";
  
  const goldenActiveCard = "relative p-7 rounded-3xl bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 border border-amber-300 text-slate-950 shadow-[0_0_35px_rgba(245,158,11,0.5),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between group cursor-pointer";

  return (
    <section className="relative w-full bg-[#050505] text-slate-100 font-sans py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* MAGICAL GRAPHICS: Gold Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/15 via-yellow-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-slate-300/10 blur-[130px] pointer-events-none rounded-full" />

      {/* METALLIC GRID LINES BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20 z-10">

        {/* SECTION HEADER */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 text-slate-950 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-200">
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Tender Intelligence & Analytics</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 via-yellow-400 to-slate-200 drop-shadow-[0_2px_15px_rgba(255,215,0,0.2)]">
            Tender Performance at a Glance
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Turning Tender Opportunities into Successful Business Outcomes through Intelligent Analytics.
          </p>
        </div>

        {/* CORE DATA CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: ALWAYS GOLDEN */}
          <div className={`${goldenActiveCard} items-center text-center`}>
            <div className="absolute top-3 right-3">
              <Star className="w-4 h-4 text-slate-950 fill-slate-950/30 animate-pulse" />
            </div>
            
            <span className="text-[11px] font-mono font-black text-slate-900 uppercase tracking-widest mb-1">
              Primary Metric
            </span>
            
            <div className="relative w-40 h-40 my-3 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" className="text-amber-600/40 stroke-current" strokeWidth="8" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-slate-950 stroke-current transition-all duration-1000 ease-out"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * successRate) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black font-mono text-slate-950 tracking-tighter">
                  87.3%
                </span>
                <span className="text-[10px] text-slate-900 font-extrabold tracking-widest uppercase mt-0.5">
                  Success Rate
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider">Tender Win Index</h3>
              <p className="text-xs text-slate-900/80 font-semibold mt-1 leading-relaxed">High-converting benchmark across government & corporate sectors.</p>
            </div>
          </div>

          {/* CARD 2: HOVER TO GOLD */}
          <div className={interactiveCard}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-300 group-hover:from-amber-200 group-hover:to-amber-400 border border-slate-400 group-hover:border-amber-300 flex items-center justify-center mb-5 shadow-inner transition-colors duration-300">
                <Building2 className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-[10px] font-mono font-extrabold text-slate-700 group-hover:text-slate-900 uppercase tracking-widest">Sector Focus</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Government Tenders</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-900/90 font-medium mb-5">Public Sector Procurement</p>
              
              <ul className="space-y-2.5 text-xs text-slate-900 font-bold">
                {['Tender discovery', 'Eligibility analysis', 'Documentation', 'Bid submission', 'Compliance support'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 group-hover:text-slate-950 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 3: HOVER TO GOLD */}
          <div className={interactiveCard}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-300 group-hover:from-amber-200 group-hover:to-amber-400 border border-slate-400 group-hover:border-amber-300 flex items-center justify-center mb-5 shadow-inner transition-colors duration-300">
                <Briefcase className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-[10px] font-mono font-extrabold text-slate-700 group-hover:text-slate-900 uppercase tracking-widest">Sector Focus</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Private Tenders</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-900/90 font-medium mb-5">Corporate Commercial Bids</p>
              
              <ul className="space-y-2.5 text-xs text-slate-900 font-bold">
                {['Corporate opportunities', 'Vendor participation', 'Commercial bids', 'Contract opportunities', 'Business partnerships'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 group-hover:text-slate-950 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 4: HOVER TO GOLD */}
          <div className={interactiveCard}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-300 group-hover:from-amber-200 group-hover:to-amber-400 border border-slate-400 group-hover:border-amber-300 flex items-center justify-center mb-5 shadow-inner transition-colors duration-300">
                <Users className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-[10px] font-mono font-extrabold text-slate-700 group-hover:text-slate-900 uppercase tracking-widest">Workforce Focus</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">Manpower Contracts</h3>
              <p className="text-xs text-slate-700 group-hover:text-slate-900/90 font-medium mb-5">Enterprise Workforce Solutions</p>
              
              <ul className="space-y-2.5 text-xs text-slate-900 font-bold">
                {['Skilled manpower', 'Semi-skilled manpower', 'Support staff', 'Contract workforce', 'Workforce deployment'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 group-hover:text-slate-950 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* SECTION 1: TENDER OPPORTUNITY DENSITY (KEPT & ENHANCED WITH HOVER EFFECTS) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border-2 border-amber-500/60 shadow-[0_0_35px_rgba(245,158,11,0.25)] hover:border-amber-400 hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] transition-all duration-300">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Tender Opportunity Density</h3>
              <p className="text-xs text-slate-400 mt-1">Demand distribution across major operational sectors.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 text-slate-950 text-xs font-black shadow-md cursor-pointer hover:scale-105 transition-transform">
              <Zap className="w-3.5 h-3.5 text-slate-950" />
              Live Market Analytics
            </div>
          </div>

          <div className="space-y-7">
            {/* Government Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-extrabold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" />
                  GOVERNMENT
                </span>
                <span className="text-amber-400 font-black uppercase tracking-wider">88% Opportunity</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden p-0.5 border border-slate-700">
                <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 h-full rounded-full w-[88%] shadow-[0_0_15px_rgba(245,158,11,0.7)]" />
              </div>
            </div>

            {/* Private Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-extrabold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  PRIVATE
                </span>
                <span className="text-slate-200 font-black uppercase tracking-wider">76% Opportunity</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden p-0.5 border border-slate-700">
                <div className="bg-gradient-to-r from-slate-400 via-slate-200 to-white h-full rounded-full w-[76%] shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
              </div>
            </div>

            {/* Manpower Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-extrabold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(250,204,21,1)]" />
                  MANPOWER
                </span>
                <span className="text-amber-400 font-black uppercase tracking-wider">82% Demand</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden p-0.5 border border-slate-700">
                <div className="bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 h-full rounded-full w-[82%] shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
              </div>
            </div>
          </div>
        </div>

        {/* STEPPER CARDS (HOVER TO GOLD) */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-3xl font-black text-white tracking-tight">The End-to-End Tender Journey</h3>
            <p className="text-xs text-slate-400 mt-2">Structured execution framework from intelligence gather to contract fulfillment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'DISCOVER', desc: 'Identify relevant tender opportunities' },
              { step: '02', title: 'ANALYZE', desc: 'Eligibility, requirements & viability' },
              { step: '03', title: 'PREPARE', desc: 'Technical & financial documentation' },
              { step: '04', title: 'SUBMIT', desc: 'Precision bid submission within deadline' },
              { step: '05', title: 'WIN', desc: 'Successfully secure the contract' },
              { step: '06', title: 'DELIVER', desc: 'Deploy workforce & execute contract' }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${interactiveCard} !p-5 text-left`}
              >
                <div className="text-2xl font-black font-mono mb-2 text-amber-600 group-hover:text-slate-950 transition-colors">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xs font-black tracking-wider mb-1 text-slate-950">{item.title}</h4>
                  <p className="text-[11px] font-semibold text-slate-800 group-hover:text-slate-950 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: GOVERNMENT VS PRIVATE METRICS (KEPT & INNER BOXES HOVER TO GOLD) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border-2 border-amber-500/60 shadow-[0_0_35px_rgba(245,158,11,0.25)]">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Government vs Private Metrics</h3>
              <p className="text-xs text-slate-400 mt-1">Comparative evaluation across bid lifecycle stages.</p>
            </div>
            
            <div className="flex items-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-gradient-to-b from-amber-300 to-amber-500 inline-block shadow-md" />
                <span className="text-slate-200 font-bold">Government</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-md bg-gradient-to-b from-slate-200 to-slate-400 inline-block shadow-md" />
                <span className="text-slate-200 font-bold">Private</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Opportunities Identified', govt: 90, pvt: 70 },
              { category: 'Bids Submitted', govt: 75, pvt: 60 },
              { category: 'Successful Bids', govt: 65, pvt: 50 },
              { category: 'Contracts Awarded', govt: 60, pvt: 45 }
            ].map((item, idx) => (
              <div key={idx} className={interactiveCard}>
                <span className="text-xs font-black text-slate-950 block border-b border-slate-400/60 group-hover:border-slate-900/40 pb-2 mb-3">{item.category}</span>
                
                {/* Government Series */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between text-[10px] font-mono font-black text-slate-950">
                    <span>GOVT</span>
                    <span>{item.govt}%</span>
                  </div>
                  <div className="w-full bg-slate-300 group-hover:bg-amber-200/60 h-2.5 rounded-full overflow-hidden border border-slate-400 group-hover:border-amber-300 transition-colors">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-400 group-hover:from-slate-950 group-hover:to-slate-800 h-full rounded-full transition-colors" style={{ width: `${item.govt}%` }} />
                  </div>
                </div>

                {/* Private Series */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-black text-slate-800 group-hover:text-slate-950">
                    <span>PVT</span>
                    <span>{item.pvt}%</span>
                  </div>
                  <div className="w-full bg-slate-300 group-hover:bg-amber-200/60 h-2.5 rounded-full overflow-hidden border border-slate-400 group-hover:border-amber-300 transition-colors">
                    <div className="bg-gradient-to-r from-slate-500 to-slate-700 group-hover:from-amber-700 group-hover:to-amber-900 h-full rounded-full transition-colors" style={{ width: `${item.pvt}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFORCE DEPLOYMENT SECTION (HOVER TO GOLD) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border-2 border-amber-500/60 space-y-7 shadow-[0_0_35px_rgba(245,158,11,0.25)]">
          <div>
            <span className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-widest">Operational Fulfillment</span>
            <h3 className="text-2xl font-black text-white mt-1">From Tender Award to Workforce Deployment</h3>
            <p className="text-xs text-slate-400 mt-1">Systematic post-award recruitment and deployment workflow.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { stage: 'Tender Award', icon: Award },
              { stage: 'Contract Finalization', icon: FileText },
              { stage: 'Workforce Planning', icon: Users },
              { stage: 'Recruitment', icon: UserPlus },
              { stage: 'Deployment', icon: UserCheck },
              { stage: 'Ongoing Support', icon: Headphones }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={`${interactiveCard} !p-4 items-center text-center space-y-2`}>
                  <div className="p-2.5 rounded-xl bg-gradient-to-b from-slate-100 to-slate-300 group-hover:from-amber-200 group-hover:to-amber-400 border border-slate-400 group-hover:border-amber-300 text-slate-900 shadow-sm transition-colors">
                    <IconComp className="w-5 h-5 text-amber-700 group-hover:text-slate-950" />
                  </div>
                  <span className="text-xs font-black text-slate-950">{item.stage}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}