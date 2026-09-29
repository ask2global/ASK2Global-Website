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
  TrendingUp,
  ShieldCheck,
  Star
} from 'lucide-react';

export default function TenderPerformanceSection() {
  const successRate = 87.3;
  const strokeDashoffset = 283 - (283 * successRate) / 100;

  return (
    <section className="relative w-full bg-[#050505] text-slate-100 font-sans py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* MAGICAL GRAPHICS: Shimmering Gold & Metallic Silver Particle Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-amber-500/15 via-yellow-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-slate-300/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-amber-400/10 blur-[120px] pointer-events-none rounded-full animate-pulse" />

      {/* METALLIC GRID LINES BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-24 z-10">

        {/* SECTION HEADER WITH LUXURY METALLIC GRADIENT */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
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
          
          {/* CARD 1: GOLDEN CROWN METRIC - SUCCESS RATE */}
          <div className="relative p-7 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/80 to-slate-950 border-2 border-amber-500/60 hover:border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.35)] transition-all duration-500 group flex flex-col items-center text-center justify-between backdrop-blur-xl hover:-translate-y-2">
            <div className="absolute top-3 right-3">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400/30 animate-pulse" />
            </div>
            
            <span className="text-[11px] font-mono font-black text-amber-400 uppercase tracking-widest mb-1">
              Primary Metric
            </span>
            
            {/* Pure Gold Circular Progress Ring with Glowing Effects */}
            <div className="relative w-40 h-40 my-3 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" className="text-slate-800/80 stroke-current" strokeWidth="7" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="text-amber-400 stroke-current transition-all duration-1000 ease-out"
                  strokeWidth="7"
                  strokeDasharray="264"
                  strokeDashoffset={264 - (264 * successRate) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 tracking-tighter">
                  87.3%
                </span>
                <span className="text-[10px] text-amber-300 font-extrabold tracking-widest uppercase mt-0.5">
                  Success Rate
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Tender Win Index</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">High-converting benchmark across government & corporate sectors.</p>
            </div>
          </div>

          {/* CARD 2: GOVERNMENT TENDERS - SILVER / GOLD HYBRID */}
          <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-700/60 hover:border-amber-400/60 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center mb-5 group-hover:border-amber-400 transition-colors shadow-inner">
                <Building2 className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Sector Focus</span>
              <h3 className="text-xl font-black text-slate-100 mt-1">Government Tenders</h3>
              <p className="text-xs text-slate-400 mb-5">Public Sector Procurement</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                {['Tender discovery', 'Eligibility analysis', 'Documentation', 'Bid submission', 'Compliance support'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 3: PRIVATE TENDERS */}
          <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-700/60 hover:border-amber-400/60 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center mb-5 group-hover:border-slate-200 transition-colors shadow-inner">
                <Briefcase className="w-6 h-6 text-slate-200 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Sector Focus</span>
              <h3 className="text-xl font-black text-slate-100 mt-1">Private Tenders</h3>
              <p className="text-xs text-slate-400 mb-5">Corporate Commercial Bids</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                {['Corporate opportunities', 'Vendor participation', 'Commercial bids', 'Contract opportunities', 'Business partnerships'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD 4: MANPOWER CONTRACTS */}
          <div className="p-7 rounded-3xl bg-slate-900/60 border border-slate-700/60 hover:border-amber-400/60 shadow-xl hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between backdrop-blur-xl group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-600/50 flex items-center justify-center mb-5 group-hover:border-amber-400 transition-colors shadow-inner">
                <Users className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Workforce Focus</span>
              <h3 className="text-xl font-black text-slate-100 mt-1">Manpower Contracts</h3>
              <p className="text-xs text-slate-400 mb-5">Enterprise Workforce Solutions</p>
              
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                {['Skilled manpower', 'Semi-skilled manpower', 'Support staff', 'Contract workforce', 'Workforce deployment'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* TENDER OPPORTUNITY OVERVIEW - MAGICAL ANIMATED PROGRESS BARS */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-700/80 shadow-2xl backdrop-blur-2xl">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Tender Opportunity Density</h3>
              <p className="text-xs text-slate-400 mt-1">Demand distribution across major operational sectors.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
              <Zap className="w-3.5 h-3.5" />
              Live Market Analytics
            </div>
          </div>

          <div className="space-y-7">
            {/* Government Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" />
                  GOVERNMENT
                </span>
                <span className="text-amber-400 font-extrabold uppercase tracking-wider">88% Opportunity</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden p-0.5 border border-slate-800">
                <div className="bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300 h-full rounded-full w-[88%] shadow-[0_0_18px_rgba(245,158,11,0.7)] transition-all duration-1000" />
              </div>
            </div>

            {/* Private Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  PRIVATE
                </span>
                <span className="text-slate-300 font-extrabold uppercase tracking-wider">76% Opportunity</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden p-0.5 border border-slate-800">
                <div className="bg-gradient-to-r from-slate-600 via-slate-400 to-white h-full rounded-full w-[76%] shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-1000" />
              </div>
            </div>

            {/* Manpower Bar */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold font-mono text-slate-200 tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,1)]" />
                  MANPOWER
                </span>
                <span className="text-amber-400 font-extrabold uppercase tracking-wider">82% Demand</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-4 overflow-hidden p-0.5 border border-slate-800">
                <div className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-300 h-full rounded-full w-[82%] shadow-[0_0_18px_rgba(245,158,11,0.6)] transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* TENDER JOURNEY TIMELINE - INTERACTIVE STEPPER */}
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
                className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 hover:border-amber-400/80 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_25px_rgba(245,158,11,0.15)] flex flex-col justify-between"
              >
                <div className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 group-hover:scale-110 transition-transform origin-left mb-3">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-100 tracking-wider mb-1.5">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON CHART: GOVT VS PRIVATE WITH SILVER & GOLD ACCENTS */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Government vs Private Metrics</h3>
              <p className="text-xs text-slate-400 mt-1">Comparative evaluation across bid lifecycle stages.</p>
            </div>
            
            <div className="flex items-center gap-6 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-gradient-to-r from-amber-400 to-yellow-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                <span className="text-slate-200 font-semibold">Government</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-sm bg-gradient-to-r from-slate-300 to-slate-100 inline-block shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <span className="text-slate-200 font-semibold">Private</span>
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
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-4 hover:border-slate-700 transition-colors">
                <span className="text-xs font-bold text-slate-200 block border-b border-slate-800/80 pb-2">{item.category}</span>
                
                {/* Government Series - GOLD */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-amber-400">
                    <span>GOVT</span>
                    <span>{item.govt}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full shadow-[0_0_8px_rgba(245,158,11,0.5)]" style={{ width: `${item.govt}%` }} />
                  </div>
                </div>

                {/* Private Series - SILVER */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-slate-300">
                    <span>PVT</span>
                    <span>{item.pvt}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-slate-400 to-slate-100 h-full rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)]" style={{ width: `${item.pvt}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUCCESS FORMULA VISUAL WITH GOLDEN GLOW FLOW */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/40 text-center relative overflow-hidden shadow-2xl backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0,transparent_70%)] pointer-events-none" />

          <span className="text-[11px] font-mono font-black text-amber-400 uppercase tracking-widest block mb-3">
            Core Strategic Engine
          </span>
          <h3 className="text-3xl font-black text-white mb-10">The Corporate Success Formula</h3>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto relative z-10">
            {[
              'OPPORTUNITY',
              'TENDER ANALYSIS',
              'DOCUMENTATION',
              'BID STRATEGY',
              'SUBMISSION',
              'SUCCESS',
              'CONTRACT EXECUTION'
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`px-4 py-2.5 rounded-xl text-xs font-mono font-black border transition-all duration-300 ${
                  step === 'SUCCESS' 
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 border-amber-200 shadow-[0_0_25px_rgba(245,158,11,0.6)] scale-105' 
                    : 'bg-slate-950/90 text-slate-200 border-slate-800 hover:border-slate-600'
                }`}>
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 inline-flex items-center gap-3 px-7 py-3 rounded-full bg-slate-900 border border-amber-400/50 text-amber-300 text-sm font-black shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Award className="w-5 h-5 text-amber-400" />
            <span>Validated Benchmark: 87.3% Tender Success Rate</span>
          </div>
        </div>

        {/* MANPOWER WORKFORCE DEPLOYMENT SECTION */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-700/80 space-y-7 shadow-2xl backdrop-blur-xl">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Operational Fulfillment</span>
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
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/60 flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-slate-900 text-amber-400 border border-slate-800 group-hover:border-amber-400/50 shadow-inner group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">{item.stage}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}