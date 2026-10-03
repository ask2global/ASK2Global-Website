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
  const [hoveredNode, setHoveredNode] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* Background Subtle Gradient & Grid overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ==================================================
          PAGE HERO
      ================================================== */}
      <section className="relative z-10 pt-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
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

          {/* Right Visual Column: ONE BUSINESS ECOSYSTEM Orbit */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-3xl pointer-events-none" />

              {/* SVG Connecting Lines (Centered behind logo) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                {servicesData.map((s, idx) => {
                  const angle = (idx * 360) / servicesData.length;
                  const radius = 150; // px
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

              {/* Center Logo Node - Perfect Round Frame & Full Aspect Cover */}
              <div className="relative w-32 h-32 rounded-full bg-black border-2 border-amber-500/60 shadow-[0_0_50px_rgba(245,158,11,0.4)] flex items-center justify-center p-1.5 z-20 overflow-hidden shrink-0">
                <img 
                  src={ask2Logo} 
                  alt="ASK2 Global Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Orbiting Radial Nodes */}
              {servicesData.map((s, idx) => {
                const angle = (idx * 360) / servicesData.length;
                const radius = 150; // px
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div 
                    key={s.id}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className="absolute p-2.5 rounded-xl bg-neutral-900/90 border border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/10 hover:scale-110 transition-transform duration-300 group cursor-pointer z-30"
                    title={s.title}
                    onClick={() => setActiveModalService(s)}
                  >
                    <s.icon className="w-4 h-4 text-amber-400" />
                    
                    {/* Node Label Tooltip */}
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-black/95 border border-amber-500/40 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-40">
                      {s.title}
                    </span>
                  </div>
                );
              })}

              {/* Ecosystem Badge Tag */}
              <div className="absolute -bottom-2 bg-black/95 border border-amber-500/50 px-4 py-1.5 rounded-full text-[11px] font-mono font-bold text-amber-300 tracking-wider uppercase shadow-lg backdrop-blur-md z-30">
                ONE BUSINESS ECOSYSTEM
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SERVICES SECTION (9 CARDS)
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

        {/* 3-Column Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalService(item)}
                className="group relative rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col justify-between cursor-pointer backdrop-blur-sm"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                      #{item.id}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase bg-neutral-800/80 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 group-hover:text-slate-300 text-sm leading-relaxed mb-6 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          BUSINESS ECOSYSTEM SECTION (INTERACTIVE NETWORK)
      ================================================== */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-neutral-950/80 border border-amber-500/30 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">CONNECTED NETWORK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ONE ECOSYSTEM. MULTIPLE BUSINESS SOLUTIONS.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Hover over any node to highlight interconnected capabilities.
            </p>
          </div>

          {/* Network Visualization */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Core Node */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-5 flex justify-center mb-4">
              <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border-2 border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.25)] text-center">
                <span className="font-extrabold text-base sm:text-lg text-amber-300 tracking-wider">ASK2GLOBAL CENTRAL ECOSYSTEM</span>
              </div>
            </div>

            {/* Service Nodes */}
            {servicesData.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isOtherHovered = hoveredNode && hoveredNode !== node.id;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveModalService(node)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center space-y-2 ${
                    isHovered
                      ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-105 z-20'
                      : isOtherHovered
                      ? 'opacity-40 bg-neutral-900/40 border-neutral-800'
                      : 'bg-neutral-900/80 border-neutral-800 hover:border-amber-500/40'
                  }`}
                >
                  <node.icon className={`w-5 h-5 ${isHovered ? 'text-amber-300' : 'text-amber-400'}`} />
                  <span className="text-xs font-bold text-slate-200 line-clamp-1">{node.title}</span>
                  <span className="text-[10px] font-mono text-slate-400">{node.tag}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          HOW WE SUPPORT YOUR BUSINESS (5-STEP PROCESS)
      ================================================== */}
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
            <div key={step.num} className="relative p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center font-mono font-bold text-amber-400 text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="text-base font-extrabold text-white mb-2 tracking-wide">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-amber-500/50">
                  <ChevronRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SERVICE CATEGORIES SECTION
      ================================================== */}
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
              <div key={i} className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/40 transition-all backdrop-blur-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <CatIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{cat.title}</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{cat.desc}</p>

                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Key Services:</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.services.map((s, sIdx) => (
                      <span key={sIdx} className="text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
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

      {/* ==================================================
          PREMIUM BANNER & FINAL CONTACT CTA
      ================================================== */}
      <section id="contact-section" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        {/* Full-width Cinematic Banner */}
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

            {/* DIRECT MAIL OPEN BUTTON */}
            <a
              href="mailto:ask2global@gmail.com?subject=Business Inquiry - ASK2GLOBAL&body=Hello ASK2GLOBAL Team,"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-neutral-900 border border-amber-500/40 text-slate-200 hover:text-white font-bold text-sm tracking-wide hover:bg-neutral-800 transition-all cursor-pointer shadow-lg hover:border-amber-400"
            >
              Contact - ASK2GLOBAL
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          SERVICE DETAIL MODAL / PANEL
      ================================================== */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-amber-500/40 rounded-2xl w-full max-w-2xl p-6 sm:p-8 relative shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
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

            {/* Modal Body Content */}
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

            {/* Modal CTA */}
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