import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Code2, 
  Landmark, 
  Users2, 
  Boxes, 
  Store, 
  Truck, 
  BarChart3, 
  ArrowRight, 
  X, 
  Sparkles, 
  Building,
  ChevronRight,
  Cpu,
  TrendingUp,
  Layers
} from 'lucide-react';

// Import image logo
import ask2Logo from '../assets/ask2 logo 2.jpeg';

// Exactly 9 Approved Services Data
const servicesData = [
  {
    id: '01',
    title: 'Licensing Provider',
    tag: 'LICENSE & COMPLIANCE',
    icon: ShieldCheck,
    description: 'Support businesses with licensing-related requirements and access to relevant business documentation and regulatory processes.',
    category: 'BUSINESS ENABLEMENT',
    whatWeProvide: 'Comprehensive support in identifying, compiling, and submitting documentation for industry-specific business licenses, certifications, and statutory filings.',
    howItHelps: 'Streamlines complex compliance requirements, reduces approval lead times, and minimizes regulatory bottlenecks for expanding businesses.',
    useCases: 'New business setups, cross-border corporate registrations, and expansion into regulated commercial sectors.'
  },
  {
    id: '02',
    title: 'Legal and Financial Prepernes',
    tag: 'FINANCIAL DOCUMENTATION',
    icon: FileCheck2,
    description: 'Support for business listings and financial documentation requirements through relevant financial document service providers.',
    category: 'BUSINESS ENABLEMENT',
    whatWeProvide: 'Structured facilitation for enterprise profiling, corporate listing preparation, and audit-ready financial document coordination.',
    howItHelps: 'Enhances institutional credibility, aligns financial records with B2B standards, and simplifies partner onboarding.',
    useCases: 'Vendor registration with government/private enterprises, institutional credit applications, and corporate profile verification.'
  },
  {
    id: '03',
    title: 'Website Development & AI Automation',
    tag: 'TECHNOLOGY & AI',
    icon: Code2,
    description: 'Modern website development and AI automation solutions designed to improve digital operations, customer engagement and business workflows.',
    category: 'TECHNOLOGY',
    whatWeProvide: 'Custom web application engineering, enterprise CRM integrations, automated workflow triggers, and custom AI chatbot agent deployments.',
    howItHelps: 'Accelerates internal task completion, provides 24/7 client response capabilities, and delivers modern, responsive digital brand assets.',
    useCases: 'B2B portal development, enterprise workflow automation, customer inquiry resolution, and digital product listing.'
  },
  {
    id: '04',
    title: 'Trade Financial Facility Provider',
    tag: 'TRADE FINANCE',
    icon: Landmark,
    description: 'Support for businesses seeking suitable trade-related financial facilities and financial service connections.',
    category: 'BUSINESS ENABLEMENT',
    whatWeProvide: 'Facilitated access and connections to institutional trade credit facilities, Letter of Credit (LC) guidance, and working capital solutions.',
    howItHelps: 'Sustains healthy cash flow during large-scale procurement cycles and mitigates counterparty credit risks.',
    useCases: 'International import/export credit lines, high-value B2B purchase orders, and supplier credit agreements.'
  },
  {
    id: '05',
    title: 'Potential Lead Provider',
    tag: 'BUSINESS DEVELOPMENT',
    icon: Users2,
    description: 'Business lead generation and opportunity identification to help organizations discover potential customers, partners and commercial opportunities.',
    category: 'COMMERCE',
    whatWeProvide: 'Data-driven B2B lead mapping, targeted industry contact discovery, and commercial opportunity matching.',
    howItHelps: 'Shortens sales cycles by identifying high-intent commercial buyers and verified enterprise distribution partners.',
    useCases: 'Market entry campaigns, distributor network expansion, and enterprise key-account prospecting.'
  },
  {
    id: '06',
    title: 'Bulk Procurement',
    tag: 'PROCUREMENT',
    icon: Boxes,
    description: 'Bulk procurement support connecting businesses with sourcing opportunities, suppliers and large-volume purchasing requirements.',
    category: 'COMMERCE',
    whatWeProvide: 'Direct-from-manufacturer bulk sourcing, tiered volume pricing negotiations, and verified vendor quality checks.',
    howItHelps: 'Lowers unit procurement costs, ensures consistent material quality, and minimizes multi-vendor management complexity.',
    useCases: 'Raw material procurement, commercial inventory stock-ups, and corporate equipment orders.'
  },
  {
    id: '07',
    title: 'Multi Sales Channel',
    tag: 'SALES & DISTRIBUTION',
    icon: Store,
    description: 'Support for expanding product reach across multiple sales channels and creating broader market access.',
    category: 'COMMERCE',
    whatWeProvide: 'Multi-platform marketplace onboarding, B2B wholesale portal integrations, and distributor network alignment.',
    howItHelps: 'Diversifies revenue channels, boosts market penetration, and scales inventory turnover rates.',
    useCases: 'Omnichannel B2B/B2C expansion, regional retail distribution, and online store syndication.'
  },
  {
    id: '08',
    title: 'Complete SCM Negotiated',
    tag: 'SUPPLY CHAIN MANAGEMENT',
    icon: Truck,
    description: 'Negotiated end-to-end supply chain support covering sourcing, procurement, coordination, logistics and supply chain operations.',
    category: 'INTELLIGENCE',
    whatWeProvide: 'End-to-end logistics coordination, freight rate negotiation, route optimization, and warehousing arrangement.',
    howItHelps: 'Optimizes supply chain operating costs, improves transit predictability, and eliminates operational friction.',
    useCases: 'Cross-border logistics management, pan-India freight routing, and warehouse distribution logistics.'
  },
  {
    id: '09',
    title: 'Competitor Analysis',
    tag: 'BUSINESS INTELLIGENCE',
    icon: BarChart3,
    description: 'Market and competitor analysis to understand positioning, pricing, offerings, opportunities and competitive dynamics.',
    category: 'INTELLIGENCE',
    whatWeProvide: 'Deep-dive competitive landscape reports, pricing benchmark mapping, product positioning evaluations, and gap identification.',
    howItHelps: 'Empowers executive decision-makers with actionable market intelligence to outmaneuver competitors.',
    useCases: 'New product launches, pricing strategy resets, and strategic positioning evaluations.'
  }
];

// 5-Step Support Process
const processSteps = [
  { num: '01', title: 'IDENTIFY', desc: 'Understand the specific business requirement and operational context.' },
  { num: '02', title: 'CONNECT', desc: 'Connect with relevant providers, verified suppliers, or strategic opportunities.' },
  { num: '03', title: 'ENABLE', desc: 'Provide the required business, financial, technology, or procurement support.' },
  { num: '04', title: 'OPTIMIZE', desc: 'Improve commercial processes and drive operational efficiency.' },
  { num: '05', title: 'GROW', desc: 'Help build resilient pathways for long-term, sustainable business growth.' }
];

// Service Categories
const serviceCategories = [
  {
    title: 'BUSINESS ENABLEMENT',
    desc: 'Regulatory compliance, statutory documentation, and trade financial facility connections.',
    services: ['Licensing Provider', 'Financial Documentation', 'Trade Finance'],
    icon: Building
  },
  {
    title: 'TECHNOLOGY & AI',
    desc: 'Scalable web architecture, automated workflows, and intelligent business tools.',
    services: ['Website Development', 'AI Automation Solutions'],
    icon: Cpu
  },
  {
    title: 'COMMERCE & SALES',
    desc: 'High-volume procurement, lead identification, and multi-channel market expansion.',
    services: ['Bulk Procurement', 'Multi-Sales Channel', 'Potential Lead Provider'],
    icon: TrendingUp
  },
  {
    title: 'INTELLIGENCE & SCM',
    desc: 'Data-backed market insights, competitor analysis, and end-to-end supply chain coordination.',
    services: ['Competitor Analysis', 'Complete SCM Negotiated'],
    icon: Layers
  }
];

export default function ServicesPage({ onContactClick }) {
  const [activeModalService, setActiveModalService] = useState(null);
  
  // States for explicit hover tracking
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hoveredEcosystemId, setHoveredEcosystemId] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* Background Subtle Gradient & Grid overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* PAGE HERO */}
      <section className="relative z-10 pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ASK2GLOBAL BUSINESS SERVICES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Everything You Need to <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#F59E0B] to-[#D4AF37] drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
                Grow. Trade. Scale.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Integrated business solutions connecting licensing, finance, technology, procurement, sales channels and supply chain capabilities.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => scrollToSection('services-grid')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => onContactClick ? onContactClick() : scrollToSection('contact-section')}
                className="px-6 py-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/30 hover:border-amber-400 text-slate-200 font-bold text-sm tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                Talk to Our Team
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl pointer-events-none" />

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {servicesData.map((s, idx) => {
                  const angle = (idx * 360) / servicesData.length;
                  const radius = 150;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <line 
                      key={s.id}
                      x1="50%" 
                      y1="50%" 
                      x2={`calc(50% + ${x}px)`} 
                      y2={`calc(50% + ${y}px)`} 
                      stroke="rgba(245, 158, 11, 0.35)" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>

              <div className="relative w-32 h-32 rounded-full bg-black border-2 border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.4)] flex items-center justify-center p-1.5 z-20 overflow-hidden shrink-0">
                <img 
                  src={ask2Logo} 
                  alt="ASK2 Global Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {servicesData.map((s, idx) => {
                const angle = (idx * 360) / servicesData.length;
                const radius = 150;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div 
                    key={s.id}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className="absolute p-2.5 rounded-xl bg-gradient-to-b from-slate-100 to-slate-300 text-slate-800 border-2 border-slate-400 shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 hover:text-black hover:border-amber-300 hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer z-30"
                    title={s.title}
                    onClick={() => setActiveModalService(s)}
                  >
                    <s.icon className="w-4 h-4 text-slate-800 group-hover:text-black transition-colors" />
                    
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-black/95 border border-amber-500/40 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-40">
                      {s.title}
                    </span>
                  </div>
                );
              })}

              <div className="absolute -bottom-2 bg-black/95 border border-amber-500/50 px-4 py-1.5 rounded-full text-[11px] font-mono font-bold text-amber-300 tracking-wider uppercase shadow-lg backdrop-blur-md z-30">
                ONE BUSINESS ECOSYSTEM
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SERVICES SECTION (CURSOR JISPE HO WOH GOLDEN, BAKI SILVER)
      ================================================== */}
      <section id="services-grid" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            OUR BUSINESS SERVICES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Integrated solutions designed to simplify business operations and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item) => {
            const IconComponent = item.icon;
            const isHovered = hoveredCardId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => setActiveModalService(item)}
                className={`relative rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 transform-gpu ${
                  isHovered
                    ? /* GOLDEN STATE WHEN CURSOR IS ON THIS CARD */
                      'bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] border-2 border-amber-200 text-black shadow-[0_0_35px_rgba(245,158,11,0.8),0_15px_35px_rgba(245,158,11,0.5)] -translate-y-2 scale-[1.02] z-20'
                    : /* SILVER METALLIC STATE WHEN NOT HOVERED */
                      'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-2 border-slate-300/80 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.9)]'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                      isHovered 
                        ? 'bg-black/20 text-amber-100 border-amber-200/40' 
                        : 'text-amber-900 bg-amber-400/20 border-amber-500/30'
                    }`}>
                      #{item.id}
                    </span>
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg border transition-colors ${
                      isHovered 
                        ? 'text-black bg-amber-300/30 border-amber-900/30' 
                        : 'text-slate-800 bg-slate-900/10 border-slate-400/50'
                    }`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-md transition-all duration-300 mb-4 ${
                    isHovered 
                      ? 'bg-black/20 border-amber-200 text-white' 
                      : 'bg-slate-100 border-slate-300 text-slate-900'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-black mb-2 transition-colors ${
                    isHovered ? 'text-black' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed font-medium mb-6 transition-colors ${
                    isHovered ? 'text-slate-950 font-semibold' : 'text-slate-700'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs font-extrabold transition-colors ${
                  isHovered 
                    ? 'border-amber-900/30 text-black' 
                    : 'border-slate-400/50 text-slate-900'
                }`}>
                  <span>Explore Service</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1.5' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          BUSINESS ECOSYSTEM SECTION (HOVERED = GOLD, OTHERS = DIM SILVER)
      ================================================== */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-neutral-950/80 border border-slate-700/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">CONNECTED NETWORK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ONE ECOSYSTEM. MULTIPLE BUSINESS SOLUTIONS.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Hover over any node to highlight interconnected capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Core Center Badge */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-5 flex justify-center mb-4">
              <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-black border-2 border-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.5)] text-center">
                <span className="font-extrabold text-base sm:text-lg tracking-wider uppercase">ASK2GLOBAL CENTRAL ECOSYSTEM</span>
              </div>
            </div>

            {/* Silver Nodes transforming into Gold on Hover */}
            {servicesData.map((node) => {
              const isHovered = hoveredEcosystemId === node.id;
              const isAnyOtherHovered = hoveredEcosystemId && hoveredEcosystemId !== node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredEcosystemId(node.id)}
                  onMouseLeave={() => setHoveredEcosystemId(null)}
                  onClick={() => setActiveModalService(node)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center space-y-2 transform-gpu ${
                    isHovered
                      ? /* GOLDEN ACTIVE STATE */
                        'bg-gradient-to-r from-amber-400 to-amber-500 border-amber-200 text-black shadow-[0_0_30px_rgba(245,158,11,0.9)] scale-105 z-20 font-bold'
                      : isAnyOtherHovered
                      ? /* DIMMED STATE WHEN ANOTHER NODE IS HOVERED */
                        'opacity-30 bg-slate-900 border-slate-800 text-slate-500'
                      : /* STANDARD SILVER METALLIC STATE */
                        'bg-gradient-to-b from-slate-100 to-slate-300 border-slate-300 text-slate-900 shadow-[0_6px_15px_rgba(0,0,0,0.3)] hover:border-amber-400'
                  }`}
                >
                  <node.icon className={`w-5 h-5 ${isHovered ? 'text-black' : 'text-slate-900'}`} />
                  <span className="text-xs font-black line-clamp-1">{node.title}</span>
                  <span className={`text-[10px] font-mono font-semibold ${isHovered ? 'text-slate-900' : 'text-slate-700'}`}>{node.tag}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW WE SUPPORT YOUR BUSINESS */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            HOW WE SUPPORT YOUR BUSINESS
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            A structured 5-step strategic framework driving operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((step, idx) => (
            <div 
              key={step.num} 
              className="group relative p-5 rounded-2xl 
                bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 
                border-2 border-slate-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)] 
                hover:bg-gradient-to-r hover:from-amber-400 hover:via-amber-500 hover:to-amber-600 
                hover:border-amber-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] 
                transition-all duration-300 transform-gpu hover:-translate-y-2 
                flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 group-hover:bg-black group-hover:border-amber-300 flex items-center justify-center font-mono font-bold text-amber-400 text-sm mb-4 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-base font-black text-slate-900 group-hover:text-black transition-colors mb-2 tracking-wide">{step.title}</h3>
                <p className="text-xs text-slate-800 group-hover:text-slate-950 font-medium transition-colors leading-relaxed">{step.desc}</p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-500 group-hover:text-amber-200 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE CATEGORIES SECTION */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            SERVICE CATEGORIES
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Broad operational domains categorized for specialized enterprise requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <div 
                key={i} 
                className="group p-6 rounded-2xl 
                  bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 
                  border-2 border-slate-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] 
                  hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 
                  hover:border-amber-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] 
                  transition-all duration-300 transform-gpu hover:-translate-y-1.5 
                  space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 group-hover:bg-black group-hover:border-amber-300 text-amber-400 transition-all">
                    <CatIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-black transition-colors tracking-wide">{cat.title}</h3>
                </div>

                <p className="text-xs text-slate-800 font-medium leading-relaxed">{cat.desc}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-slate-700 uppercase tracking-wider font-bold">Key Services:</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((s, sIdx) => (
                      <span key={sIdx} className="text-xs font-bold text-slate-900 group-hover:text-black bg-slate-900/10 group-hover:bg-black/10 border border-slate-400/50 group-hover:border-amber-900/30 px-2.5 py-1 rounded-md transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PREVIEWS & CONTACT CTA */}
      <section id="contact-section" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            From Business Requirement to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Business Opportunity.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ASK2GLOBAL brings multiple business capabilities together through one connected ecosystem. Tell us what you need, and our team will identify the right solution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onContactClick ? onContactClick() : alert('Redirecting to discussion portal...')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-extrabold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:scale-105 transition-all cursor-pointer"
            >
              Discuss Your Requirement
            </button>

            <a
              href="mailto:ask2global@gmail.com?subject=Business Inquiry - ASK2GLOBAL&body=Hello ASK2GLOBAL Team,"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-neutral-900 border border-amber-500/40 text-slate-200 hover:text-white font-bold text-sm tracking-wide hover:bg-neutral-800 transition-all cursor-pointer shadow-lg hover:border-amber-400"
            >
              Contact ASK2GLOBAL
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL MODAL */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-amber-500/40 rounded-2xl w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-neutral-800">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                {React.createElement(activeModalService.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                  {activeModalService.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{activeModalService.title}</h3>
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              <div className="p-4 bg-black/60 border border-neutral-800 rounded-xl space-y-1">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Overview</span>
                <p className="text-slate-300 leading-relaxed">{activeModalService.description}</p>
              </div>

              <div className="p-4 bg-black/60 border border-neutral-800 rounded-xl space-y-1">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">What We Provide</span>
                <p className="text-slate-300 leading-relaxed">{activeModalService.whatWeProvide}</p>
              </div>

              <div className="p-4 bg-black/60 border border-neutral-800 rounded-xl space-y-1">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">How It Helps</span>
                <p className="text-slate-300 leading-relaxed">{activeModalService.howItHelps}</p>
              </div>

              <div className="p-4 bg-black/60 border border-neutral-800 rounded-xl space-y-1">
                <span className="text-amber-400 font-mono font-bold uppercase text-[11px] block">Business Use Cases</span>
                <p className="text-slate-300 leading-relaxed">{activeModalService.useCases}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Ready to activate this capability?</span>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  if (onContactClick) onContactClick();
                  else scrollToSection('contact-section');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs tracking-wide shadow-md hover:scale-105 transition-transform cursor-pointer"
              >
                Discuss This Service
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}