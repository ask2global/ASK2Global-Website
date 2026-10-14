import React, { useState } from 'react';
import { 
  Globe2, 
  Ship, 
  Truck, 
  Package, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Building,
  Mail,
  Phone,
  Layers,
  Send,
  X,
  Compass,
  Boxes
} from 'lucide-react';

export default function LogisticsPage({ onContactClick }) {
  // Quote Form State with Prefill Support
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    tradeType: 'Import',
    productCategory: 'Leather Products',
    productDescription: '',
    quantity: '',
    originCountry: '',
    destinationCountry: '',
    shippingMethod: 'Sea',
    additionalRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hover states for 3D Cards
  const [hoveredImportCard, setHoveredImportCard] = useState(false);
  const [hoveredExportCard, setHoveredExportCard] = useState(false);
  const [hoveredProductCard, setHoveredProductCard] = useState(null);

  // Handle Enquiry Button Clicks from Categories or Services
  const handlePrefillEnquiry = (tradeType, category) => {
    setFormData(prev => ({
      ...prev,
      tradeType: tradeType,
      productCategory: category
    }));
    const element = document.getElementById('quote-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessEmail || !formData.phone || !formData.productDescription) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    setErrorMessage('');

    // 1. WhatsApp Redirection with Form Data (Configured with your number: 9889889399)
    const whatsappMessage = `*New Trade Enquiry - ASK2GLOBAL*%0A%0A` +
      `*Full Name:* ${formData.fullName}%0A` +
      `*Company:* ${formData.companyName}%0A` +
      `*Email:* ${formData.businessEmail}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Trade Type:* ${formData.tradeType}%0A` +
      `*Category:* ${formData.productCategory}%0A` +
      `*Quantity:* ${formData.quantity || 'N/A'}%0A` +
      `*Origin:* ${formData.originCountry || 'N/A'}%0A` +
      `*Destination:* ${formData.destinationCountry || 'N/A'}%0A` +
      `*Shipping:* ${formData.shippingMethod}%0A` +
      `*Description:* ${formData.productDescription}%0A` +
      `*Additional:* ${formData.additionalRequirements || 'N/A'}`;

    window.open(`https://wa.me/919889889399?text=${whatsappMessage}`, '_blank');

    // 2. Email Dispatch Trigger
    const mailSubject = encodeURIComponent(`New Trade Enquiry from ${formData.companyName} (${formData.tradeType})`);
    const mailBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName}\n` +
      `Email: ${formData.businessEmail}\n` +
      `Phone: ${formData.phone}\n` +
      `Trade Type: ${formData.tradeType}\n` +
      `Product Category: ${formData.productCategory}\n` +
      `Quantity: ${formData.quantity}\n` +
      `Origin Country: ${formData.originCountry}\n` +
      `Destination Country: ${formData.destinationCountry}\n` +
      `Shipping Method: ${formData.shippingMethod}\n\n` +
      `Description:\n${formData.productDescription}\n\n` +
      `Additional Requirements:\n${formData.additionalRequirements}`
    );

    const mailtoLink = document.createElement('a');
    mailtoLink.href = `mailto:ask2global@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    mailtoLink.click();

    setIsSubmitted(true);
  };

  const productCategories = [
    {
      id: 'leather',
      title: 'Leather Products',
      tag: 'PREMIER CRAFT',
      desc: 'High-grade leather goods, apparel accessories, and bespoke B2B leather sourcing opportunities.',
      image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
      features: ['Leather goods & accessories', 'Bespoke bulk sourcing', 'Import & export compliance']
    },
    {
      id: 'brass',
      title: 'Brass Products',
      tag: 'METALLIC ARTISANAL',
      desc: 'Exquisite brass handicrafts, decorative artifacts, and commercial home decor hardware.',
      image: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=800&q=80',
      features: ['Handcrafted brass items', 'Decorative home hardware', 'Bulk procurement support']
    },
    {
      id: 'furniture',
      title: 'Furniture',
      tag: 'ARCHITECTURAL LIVING',
      desc: 'Contemporary wooden and commercial furniture collections engineered for global markets.',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
      features: ['Commercial & office units', 'Contemporary wooden designs', 'Global freight coordination']
    }
  ];

  const processSteps = [
    { num: '01', title: 'Share Requirements', desc: 'Specify product category, target quantity, and destination market.' },
    { num: '02', title: 'Sourcing & Coordination', desc: 'Align product specifications with verified suppliers or buyers.' },
    { num: '03', title: 'Documentation & Planning', desc: 'Review trade documentation, regulatory paperwork, and logistics layout.' },
    { num: '04', title: 'Shipment Coordination', desc: 'Coordinate next steps with relevant trade and transport partners.' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Background Grids & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-amber-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-neutral-900/90 border border-amber-500/40 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md">
              <Sparkles className="w-4.5 h-4.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-sm font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
                ASK2GLOBAL LOGISTICS & TRADE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
              GLOBAL TRADE.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)] pt-1">
                SEAMLESS LOGISTICS.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
              Connecting businesses to global markets through reliable import-export solutions for leather, brass, and furniture products.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#import-export-section"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
              >
                <span>Explore Import</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#import-export-section"
                className="px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/40 text-slate-200 font-bold text-sm sm:text-base uppercase tracking-wider transition-all"
              >
                Explore Export
              </a>

              <a 
                href="#quote-form-section"
                className="px-8 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-900 border border-amber-500/50 text-amber-300 font-bold text-sm sm:text-base uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)]"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl bg-gradient-to-br from-neutral-900/90 via-black to-neutral-950 border border-amber-500/30 p-8 shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_60%)] pointer-events-none" />
              
              <div className="flex items-center justify-between z-10">
                <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 tracking-widest uppercase">Global Freight Hub</span>
                <Globe2 className="w-7 h-7 text-amber-400 animate-spin" style={{ animationDuration: '20s' }} />
              </div>

              <div className="space-y-4 z-10 my-auto">
                <div className="p-4.5 rounded-2xl bg-black/80 border border-amber-500/20 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Ship className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Ocean & Air Cargo</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono">Multimodal Transport Coordination</p>
                  </div>
                </div>

                <div className="p-4.5 rounded-2xl bg-black/80 border border-amber-500/20 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Truck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Cross-Border Logistics</h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-mono">End-to-End Route Planning</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 text-xs font-mono text-slate-400 flex items-center justify-between z-10">
                <span>Secure Trade Corridors</span>
                <span className="text-amber-400 font-bold">Active</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= IMPORT & EXPORT SECTION ================= */}
      <section id="import-export-section" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold">
            CORE TRADE SERVICES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Import & Export Solutions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Professional trade support structured to streamline international procurement and distribution workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Import Solutions Card */}
          <div 
            onMouseEnter={() => setHoveredImportCard(true)}
            onMouseLeave={() => setHoveredImportCard(false)}
            className={`rounded-3xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 transform-gpu cursor-pointer ${
              hoveredImportCard
                ? 'bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] border-2 border-amber-200 text-black shadow-[0_0_35px_rgba(245,158,11,0.8),0_15px_35px_rgba(245,158,11,0.5)] -translate-y-2 scale-[1.02] z-20'
                : 'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-2 border-slate-300/80 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.9)]'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className={`text-xs sm:text-sm font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-colors ${
                  hoveredImportCard ? 'bg-black/20 text-amber-950 border-amber-900/30' : 'bg-slate-900/10 text-slate-900 border-slate-400/50'
                }`}>
                  INBOUND TRADE
                </span>
                <Compass className={`w-7 h-7 transition-transform ${hoveredImportCard ? 'text-black rotate-45' : 'text-slate-800'}`} />
              </div>

              <h3 className={`text-2xl sm:text-4xl font-black transition-colors ${hoveredImportCard ? 'text-black' : 'text-slate-900'}`}>
                Import Solutions
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed font-semibold transition-colors ${hoveredImportCard ? 'text-slate-950' : 'text-slate-700'}`}>
                Facilitating smooth inbound trade operations with structured assistance across global sourcing networks.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'International product sourcing',
                  'Supplier coordination',
                  'Import documentation assistance',
                  'Shipment coordination',
                  'Customs clearance support',
                  'Cargo & delivery coordination'
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm font-bold transition-colors ${hoveredImportCard ? 'text-black' : 'text-slate-800'}`}>
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${hoveredImportCard ? 'text-black' : 'text-amber-700'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`pt-8 mt-8 border-t flex items-center justify-between transition-colors ${hoveredImportCard ? 'border-amber-900/30' : 'border-slate-400/50'}`}>
              <span className={`text-xs sm:text-sm font-mono font-bold ${hoveredImportCard ? 'text-slate-900' : 'text-slate-700'}`}>Inbound Supply Chain</span>
              <button
                onClick={() => handlePrefillEnquiry('Import', 'Leather Products')}
                className={`px-7 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2 ${
                  hoveredImportCard ? 'bg-black text-amber-400 hover:bg-neutral-900' : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                <span>Explore Import Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Export Solutions Card */}
          <div 
            onMouseEnter={() => setHoveredExportCard(true)}
            onMouseLeave={() => setHoveredExportCard(false)}
            className={`rounded-3xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 transform-gpu cursor-pointer ${
              hoveredExportCard
                ? 'bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] border-2 border-amber-200 text-black shadow-[0_0_35px_rgba(245,158,11,0.8),0_15px_35px_rgba(245,158,11,0.5)] -translate-y-2 scale-[1.02] z-20'
                : 'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-2 border-slate-300/80 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.9)]'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className={`text-xs sm:text-sm font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-colors ${
                  hoveredExportCard ? 'bg-black/20 text-amber-950 border-amber-900/30' : 'bg-slate-900/10 text-slate-900 border-slate-400/50'
                }`}>
                  OUTBOUND TRADE
                </span>
                <Globe2 className={`w-7 h-7 transition-transform ${hoveredExportCard ? 'text-black scale-110' : 'text-slate-800'}`} />
              </div>

              <h3 className={`text-2xl sm:text-4xl font-black transition-colors ${hoveredExportCard ? 'text-black' : 'text-slate-900'}`}>
                Export Solutions
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed font-semibold transition-colors ${hoveredExportCard ? 'text-slate-950' : 'text-slate-700'}`}>
                Connecting domestic manufacturing excellence with international buyers and expanding global market footprint.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'International buyer connections',
                  'Export documentation assistance',
                  'Product sourcing & procurement',
                  'Packaging & shipment coordination',
                  'International market expansion',
                  'Export logistics coordination'
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 text-sm font-bold transition-colors ${hoveredExportCard ? 'text-black' : 'text-slate-800'}`}>
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${hoveredExportCard ? 'text-black' : 'text-amber-700'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`pt-8 mt-8 border-t flex items-center justify-between transition-colors ${hoveredExportCard ? 'border-amber-900/30' : 'border-slate-400/50'}`}>
              <span className={`text-xs sm:text-sm font-mono font-bold ${hoveredExportCard ? 'text-slate-900' : 'text-slate-700'}`}>Outbound Supply Chain</span>
              <button
                onClick={() => handlePrefillEnquiry('Export', 'Leather Products')}
                className={`px-7 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2 ${
                  hoveredExportCard ? 'bg-black text-amber-400 hover:bg-neutral-900' : 'bg-slate-900 text-white hover:bg-black'
                }`}
              >
                <span>Explore Export Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PRODUCT CATEGORIES ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold">
            TRADE PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            OUR GLOBAL TRADE CATEGORIES
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Specialized trade focus across premium leather, brass handicrafts, and furniture manufacturing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((cat) => {
            const isHovered = hoveredProductCard === cat.id;

            return (
              <div 
                key={cat.id}
                onMouseEnter={() => setHoveredProductCard(cat.id)}
                onMouseLeave={() => setHoveredProductCard(null)}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 transform-gpu cursor-pointer ${
                  isHovered
                    ? 'bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] border-2 border-amber-200 text-black shadow-[0_0_35px_rgba(245,158,11,0.8),0_15px_35px_rgba(245,158,11,0.5)] -translate-y-2 scale-[1.02] z-20'
                    : 'bg-gradient-to-b from-[#e2e8f0] via-[#cbd5e1] to-[#94a3b8] border-2 border-slate-300/80 text-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.9)]'
                }`}
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className={`absolute top-4 left-4 text-xs font-mono font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
                      isHovered ? 'bg-black text-amber-300' : 'bg-slate-900 text-slate-100'
                    }`}>
                      {cat.tag}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className={`text-2xl sm:text-3xl font-black transition-colors ${isHovered ? 'text-black' : 'text-slate-900'}`}>{cat.title}</h3>
                    <p className={`text-sm sm:text-base leading-relaxed font-semibold transition-colors ${isHovered ? 'text-slate-950' : 'text-slate-700'}`}>{cat.desc}</p>

                    <ul className={`space-y-2.5 pt-3 border-t transition-colors ${isHovered ? 'border-amber-900/30' : 'border-slate-400/50'}`}>
                      {cat.features.map((feat, fIdx) => (
                        <li key={fIdx} className={`text-xs sm:text-sm font-bold flex items-center gap-2.5 ${isHovered ? 'text-black' : 'text-slate-800'}`}>
                          <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-black' : 'bg-amber-700'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handlePrefillEnquiry('Import', cat.title)}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                      isHovered ? 'bg-black/20 text-black hover:bg-black/30 border border-amber-900/30' : 'bg-slate-900/10 text-slate-900 hover:bg-slate-900/20 border border-slate-400/50'
                    }`}
                  >
                    Import Enquiry
                  </button>
                  <button
                    onClick={() => handlePrefillEnquiry('Export', cat.title)}
                    className={`w-full py-3 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md ${
                      isHovered ? 'bg-black text-amber-400 hover:bg-neutral-900' : 'bg-slate-900 text-white hover:bg-black'
                    }`}
                  >
                    Export Enquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold">
            STREAMLINED WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Four simple steps to initiate and coordinate your international trade requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 border-2 border-slate-300/80 hover:bg-gradient-to-r hover:from-[#fbbf24] hover:via-[#f59e0b] hover:to-[#d97706] hover:border-amber-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform-gpu hover:-translate-y-2 space-y-4 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-900 group-hover:bg-black text-amber-400 group-hover:text-amber-300 flex items-center justify-center font-mono font-bold text-base mb-4 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-black tracking-wide transition-colors mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 group-hover:text-slate-950 font-semibold leading-relaxed transition-colors">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ASK2GLOBAL ================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-900">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-semibold">
            OUR ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Choose ASK2GLOBAL?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'B2B Trade Coordination', desc: 'Expert facilitation and liaison for cross-border commercial transactions.' },
            { title: 'Specialized Categories', desc: 'Focused expertise across high-demand leather, brass, and furniture sectors.' },
            { title: 'Import & Export Support', desc: 'Dedicated guidance through documentation and shipment preparation.' },
            { title: 'Supplier & Buyer Networks', desc: 'Direct connections with vetted international partners and manufacturers.' },
            { title: 'Bulk Procurement Focus', desc: 'Scalable solutions tailored for high-volume commercial purchasers.' },
            { title: 'International Business Connections', desc: 'Bridging domestic excellence with global market opportunities.' }
          ].map((adv, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 border-2 border-slate-300/80 hover:bg-gradient-to-r hover:from-[#fbbf24] hover:to-[#d97706] hover:border-amber-200 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all duration-300 transform-gpu hover:-translate-y-1 flex items-start gap-4.5 group cursor-pointer"
            >
              <ShieldCheck className="w-6 h-6 text-slate-900 group-hover:text-black shrink-0 mt-1 transition-colors" />
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-black mb-1.5 transition-colors">{adv.title}</h4>
                <p className="text-sm sm:text-base text-slate-700 group-hover:text-slate-950 font-semibold leading-relaxed transition-colors">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REQUEST A QUOTE FORM ================= */}
      <section id="quote-form-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="rounded-3xl bg-neutral-900 border border-amber-500/40 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 uppercase font-bold">
              ENQUIRY PORTAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Request a Quote</h2>
            <p className="text-sm sm:text-base text-slate-300">
              Fill out the details below to submit your import or export trade enquiry.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-black border border-amber-500/30 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-amber-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Enquiry Submitted Successfully</h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
                Thank you for reaching out. Your enquiry has been dispatched to WhatsApp (9889889399) and Email. Our trade coordination desk will contact you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3.5 rounded-xl bg-amber-400 text-black font-extrabold text-sm uppercase tracking-wider cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Business Email *</label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Phone Number with Country Code *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Trade Type *</label>
                  <select
                    name="tradeType"
                    value={formData.tradeType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="Import">Import</option>
                    <option value="Export">Export</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Product Category *</label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="Leather Products">Leather Products</option>
                    <option value="Brass Products">Brass Products</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Origin Country</label>
                  <input
                    type="text"
                    name="originCountry"
                    value={formData.originCountry}
                    onChange={handleChange}
                    placeholder="e.g. India"
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Destination Country</label>
                  <input
                    type="text"
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleChange}
                    placeholder="e.g. United States"
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Quantity / Volume</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 500 Units / 20ft Container"
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Preferred Shipping Method</label>
                  <select
                    name="shippingMethod"
                    value={formData.shippingMethod}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="Sea">Sea Freight</option>
                    <option value="Air">Air Freight</option>
                    <option value="Land">Land Transport</option>
                    <option value="Not Sure">Not Sure / Undecided</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Product Description *</label>
                <textarea
                  name="productDescription"
                  value={formData.productDescription}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Provide brief details about the product specifications..."
                  required
                  className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-mono text-slate-200 uppercase font-bold">Additional Requirements</label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Any specific packaging, documentation, or timeline requirements..."
                  className="w-full px-5 py-4 rounded-xl bg-black border border-neutral-800 text-slate-100 text-sm sm:text-base focus:outline-none focus:border-amber-400"
                />
              </div>

              {errorMessage && (
                <p className="text-xs sm:text-sm text-red-400 font-mono font-bold">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="w-full py-4.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-black font-black text-base uppercase tracking-wider hover:scale-[1.01] transition-all shadow-lg shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Submit Trade Enquiry</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}