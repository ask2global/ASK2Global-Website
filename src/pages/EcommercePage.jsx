import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Boxes, 
  Shirt, 
  Home as HomeIcon, 
  Cpu, 
  Factory, 
  Crown, 
  Mail, 
  Send,
  Package,
  TrendingUp,
  MapPin,
  Building2,
  FileText,
  ShoppingCart
} from 'lucide-react';

// LAUNCH DATE CONFIGURATION
const LAUNCH_DATE = null; 

export default function EcommercePage({ setCurrentView }) {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!LAUNCH_DATE) return;

    const targetDate = new Date(LAUNCH_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? `0${days}` : `${days}`,
          hours: hours < 10 ? `0${hours}` : `${hours}`,
          minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
          seconds: seconds < 10 ? `0${seconds}` : `${seconds}`
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    setIsSubmitted(true);
    setEmail('');
  };

  const categories = [
    { id: '01', title: 'Fashion & Lifestyle', icon: Shirt, desc: 'Luxury apparel, global textiles & bespoke designer collections.' },
    { id: '02', title: 'Home & Decor', icon: HomeIcon, desc: 'Artisanal furniture, architectural accents & premium living supplies.' },
    { id: '03', title: 'Electronics & Accessories', icon: Cpu, desc: 'Enterprise tech solutions, smart hardware & high-tier gadgets.' },
    { id: '04', title: 'Industrial Products', icon: Factory, desc: 'Precision machinery, OEM raw materials & cross-border equipment.' },
    { id: '05', title: 'Global Marketplace', icon: Globe2, desc: 'Verified international B2B goods directly sourced from tier-1 hubs.' },
    { id: '06', title: 'Exclusive Collections', icon: Crown, desc: 'Limited edition trade inventory & premium curated merchandise.' }
  ];

  const features = [
    {
      title: 'TRUSTED SOURCING',
      description: 'Building reliable connections between businesses and suppliers through multi-step audit processes.',
      icon: ShieldCheck
    },
    {
      title: 'GLOBAL REACH',
      description: 'Connecting products and opportunities across domestic and international markets with full logistics transparency.',
      icon: Globe2
    },
    {
      title: 'SMART COMMERCE',
      description: 'Designed for a modern, seamless digital commerce experience with automated multi-vendor RFQ systems.',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20 bg-gradient-to-b from-[#050816] via-[#050505] to-[#050505]">
        
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-yellow-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#D4AF37_1px,transparent_1px),linear-gradient(to_bottom,#D4AF37_1px,transparent_1px)] bg-[size:36px_36px]" />

        <div className="max-w-7xl mx-auto my-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/40 shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 uppercase">
                ASK2GLOBAL E-COMMERCE
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Something Big Is Coming.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                  Coming Soon....
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light pt-2">
                Our global e-commerce marketplace is being prepared to bring carefully selected products, trusted suppliers and seamless business connections to customers worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#notify-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-amber-500/20"
              >
                <Mail className="w-4 h-4 text-black" />
                Notify Me When We Launch
              </a>
              <button
                onClick={() => {
                  if (setCurrentView) setCurrentView('all');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider text-slate-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-500/40 transition-all cursor-pointer"
              >
                Explore Our Business
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            <div className="w-full pt-8 border-t border-neutral-800/80">
              <span className="text-[10px] font-mono tracking-widest text-amber-400/80 uppercase font-bold block mb-3">
                {LAUNCH_DATE ? 'Official Launch Countdown' : 'Launch Status'}
              </span>

              {LAUNCH_DATE ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg">
                  {[
                    { label: 'DAYS', val: timeLeft.days },
                    { label: 'HOURS', val: timeLeft.hours },
                    { label: 'MINUTES', val: timeLeft.minutes },
                    { label: 'SECONDS', val: timeLeft.seconds }
                  ].map((unit, idx) => (
                    <div key={idx} className="bg-black/80 border border-amber-500/30 rounded-xl p-3 text-center shadow-[0_0_15px_rgba(245,158,11,0.08)] backdrop-blur-md">
                      <span className="block text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-amber-200 tracking-tight">
                        {unit.val}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-1 block font-semibold">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/80 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.15)] backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-amber-300 uppercase">
                    LAUNCH DATE TO BE ANNOUNCED
                  </span>
                </div>
              )}
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-amber-500/25 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-dashed border-amber-400/20 animate-[spin_20s_linear_infinite_reverse]" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-neutral-900/90 via-black/80 to-neutral-950/90 border border-amber-500/40 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col items-center justify-center p-6 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-lg shadow-amber-500/30 mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-black rounded-[15px] flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-wide">
                  GLOBAL COMMERCE
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase mt-1">
                  ASK2GLOBAL ECOSYSTEM
                </span>

                <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Globe2 className="w-3 h-3 text-amber-400" />
                  <span>Borderlease Trade Engine</span>
                </div>
              </div>

              <div className="absolute -top-2 left-2 p-3 rounded-2xl bg-black/90 border border-amber-500/30 backdrop-blur-md shadow-xl animate-bounce duration-[4000ms] flex items-center gap-3">
                <Boxes className="w-5 h-5 text-amber-400" />
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white">Verified Inventory</span>
                  <span className="block text-[9px] font-mono text-slate-400">Multi-Vendor Hub</span>
                </div>
              </div>

              <div className="absolute -bottom-2 right-2 p-3 rounded-2xl bg-black/90 border border-amber-500/30 backdrop-blur-md shadow-xl animate-bounce duration-[5000ms] flex items-center gap-3">
                <Package className="w-5 h-5 text-amber-400" />
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white">Global Dispatch</span>
                  <span className="block text-[9px] font-mono text-slate-400">Express Logistics</span>
                </div>
              </div>

              <div className="absolute top-12 -right-4 p-2.5 rounded-xl bg-black/90 border border-amber-500/30 backdrop-blur-md shadow-lg flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-mono font-bold text-amber-300">B2B Scaled</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= COMING SOON CATEGORIES SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
            MARKETPLACE CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Coming Soon Categories
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Preview our curated sectors ahead of the platform launch. All categories are engineered for high-volume B2B supply chains and individual enterprise buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="group relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer border text-slate-950 font-black bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 border-slate-200 shadow-[0_6px_0_#475569,0_10px_20px_rgba(255,255,255,0.1)] hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:border-amber-200 hover:shadow-[0_8px_0_#92400e,0_15px_30px_rgba(245,158,11,0.4)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-black tracking-widest text-slate-800 group-hover:text-amber-950">
                      {cat.id}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-slate-950 bg-white/60 border border-slate-300 group-hover:bg-amber-950/20 group-hover:border-amber-950/40 group-hover:text-amber-950 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-100 mb-4 group-hover:scale-110 group-hover:bg-amber-950 group-hover:border-amber-800 group-hover:text-amber-300 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-black text-slate-950 group-hover:text-slate-950 transition-colors mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-slate-900 group-hover:text-amber-950 leading-relaxed font-semibold">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-400/60 group-hover:border-amber-600/40 flex items-center justify-between text-[11px] font-mono text-slate-800 group-hover:text-amber-950 font-bold">
                  <span>Verified Supply Chain</span>
                  <span>Catalog Locked →</span>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* ================= GLOBAL COMMERCE SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
        
        <div className="group relative rounded-3xl p-8 sm:p-12 overflow-hidden transition-all duration-300 text-slate-950 font-black bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 border border-slate-200 shadow-[0_8px_0_#475569,0_15px_30px_rgba(255,255,255,0.1)] hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:border-amber-200 hover:shadow-[0_10px_0_#92400e,0_20px_40px_rgba(245,158,11,0.4)]">
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-slate-800 group-hover:text-amber-950 uppercase font-black">
              INTERNATIONAL TRADE CORRIDOR
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              From India to the World
            </h2>

            <p className="text-slate-900 group-hover:text-amber-950 text-sm sm:text-base leading-relaxed font-semibold">
              ASK2GLOBAL is building a connected commerce ecosystem designed to bridge businesses, products and markets across borders.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-100 shadow-lg group-hover:bg-amber-950 group-hover:border-amber-800 group-hover:text-amber-300 transition-all">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="mt-2 text-xs font-black tracking-wider text-slate-950">INDIA</span>
                <span className="text-[10px] font-mono text-slate-800 group-hover:text-amber-950 uppercase font-bold">Manufacturing Hub</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <span className="w-12 sm:w-24 h-[3px] bg-slate-900 group-hover:bg-amber-950 animate-pulse" />
                  <Globe2 className="w-5 h-5 text-slate-900 group-hover:text-amber-950 animate-spin" style={{ animationDuration: '12s' }} />
                  <span className="w-12 sm:w-24 h-[3px] bg-slate-900 group-hover:bg-amber-950 animate-pulse" />
                </div>
                <span className="mt-2 text-[10px] font-mono text-slate-900 group-hover:text-amber-950 uppercase tracking-widest font-black">
                  Escrow Secured Corridor
                </span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-100 shadow-lg group-hover:bg-amber-950 group-hover:border-amber-800 group-hover:text-amber-300 transition-all">
                  <Globe2 className="w-7 h-7" />
                </div>
                <span className="mt-2 text-xs font-black tracking-wider text-slate-950">GLOBAL MARKETS</span>
                <span className="text-[10px] font-mono text-slate-800 group-hover:text-amber-950 uppercase font-bold">Worldwide Buyers</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY WAIT SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
        
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
            OUR ARCHITECTURE
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Why Wait For ASK2GLOBAL?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className="group p-8 rounded-2xl transition-all text-left space-y-4 cursor-pointer border text-slate-950 font-black bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 border-slate-200 shadow-[0_6px_0_#475569,0_10px_20px_rgba(255,255,255,0.1)] hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:border-amber-200 hover:shadow-[0_8px_0_#92400e,0_15px_30px_rgba(245,158,11,0.4)] hover:-translate-y-1.5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-100 group-hover:bg-amber-950 group-hover:border-amber-800 group-hover:text-amber-300 transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-950 tracking-wide">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-900 group-hover:text-amber-950 leading-relaxed font-semibold">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </section>


      {/* ================= EMAIL NOTIFICATION FORM ================= */}
      <section id="notify-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
        
        <div className="group max-w-2xl mx-auto text-center space-y-6 p-8 sm:p-12 rounded-3xl transition-all duration-300 border text-slate-950 font-black bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 border-slate-200 shadow-[0_8px_0_#475569,0_15px_30px_rgba(255,255,255,0.1)] hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:border-amber-200 hover:shadow-[0_10px_0_#92400e,0_20px_40px_rgba(245,158,11,0.4)]">
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-100 mx-auto group-hover:bg-amber-950 group-hover:border-amber-800 group-hover:text-amber-300 transition-all shadow-md">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Be the first to know.
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 group-hover:text-amber-950 font-semibold max-w-md mx-auto">
              Subscribe to get exclusive early access and launch updates straight to your inbox.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-4 rounded-xl bg-slate-900 text-amber-300 text-xs font-extrabold flex items-center justify-center gap-2 border border-slate-700 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Thank you! We'll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="space-y-3 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-400 placeholder:text-slate-500 transition-colors font-medium"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-black text-slate-100 bg-slate-900 border border-slate-700 hover:bg-black hover:text-amber-300 transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  Notify Me
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {errorMessage && (
                <p className="text-[11px] text-red-700 font-mono text-left pl-1 font-extrabold">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer id="footer" className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-amber-500/20 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 p-[1px]">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center font-black text-[10px] text-amber-300">
                A2G
              </div>
            </div>
            <div className="text-left">
              <span className="font-extrabold text-sm text-white block leading-none">ASK2GLOBAL</span>
              <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider">PRIVATE LIMITED</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-medium text-slate-400">
            <button 
              onClick={() => { if (setCurrentView) setCurrentView('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => { if (setCurrentView) setCurrentView('tenders'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Tenders
            </button>
            <button 
              onClick={() => { if (setCurrentView) setCurrentView('ecommerce'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-amber-400 font-bold hover:text-amber-300 transition-colors cursor-pointer"
            >
              E-Commerce
            </button>
            <button 
              onClick={() => { if (setCurrentView) setCurrentView('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Products
            </button>
            <button 
              onClick={() => { if (setCurrentView) setCurrentView('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Vendor
            </button>
          </div>

          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            Global Business. Connected Opportunities.
          </span>
        </div>
      </footer>

    </div>
  );
}