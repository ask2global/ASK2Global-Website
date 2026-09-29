import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  Building2, 
  FileText, 
  ShoppingCart, 
  Package, 
  Wrench,
  ArrowUpRight,
  UserCircle2,
  LogOut,
  MapPin,
  Mail,
  Phone,
  Sparkles
} from 'lucide-react';
import AuthModal from './auth/AuthModal';
import useAuth from '../hooks/useAuth';

export default function Navbar({ currentView = 'all', setCurrentView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showVendorProfile, setShowVendorProfile] = useState(false);

  const { user: authUser, logout } = useAuth();
  const [vendorData, setVendorData] = useState(null);

  useEffect(() => {
    const savedVendor = localStorage.getItem('registeredVendor');
    if (savedVendor) {
      setVendorData(JSON.parse(savedVendor));
    } else if (authUser) {
      setVendorData(authUser);
    }
  }, [authUser]);

  const activeUser = authUser || vendorData;

  const handleLogout = () => {
    localStorage.removeItem('registeredVendor');
    setVendorData(null);
    if (logout) logout();
    setShowVendorProfile(false);
  };

  const navLinks = [
    { id: 'all', label: 'About Us', icon: Building2 },
    { id: 'tenders', label: 'Tender', icon: FileText },
    { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
    { id: 'products', label: 'Product', icon: Package },
    { id: 'services', label: 'Service', icon: Wrench }
  ];

  const handleNavClick = (id) => {
    if (id === 'all') {
      if (setCurrentView) {
        setCurrentView('all');
      }
      const footerElement = document.getElementById('footer');
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (setCurrentView) {
      setCurrentView(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-5 pb-3 px-3 sm:px-6 transition-all font-sans">
      
      {/* MAGICAL GRAPHICS BACKGROUND GLOW FOR NAVBAR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-amber-500/10 blur-[80px] pointer-events-none rounded-full" />

      {/* LUXURY 3D GLASSMOPHISM CONTAINER */}
      <div className="max-w-[1440px] mx-auto rounded-2xl backdrop-blur-2xl bg-neutral-950/85 border border-amber-500/30 px-4 sm:px-6 h-20 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.15)] relative z-10 transition-colors duration-300">
        
        {/* BRAND TEXT ONLY */}
        <button 
          onClick={() => handleNavClick('all')} 
          className="flex items-center group focus:outline-none rounded-2xl p-1.5 transition-all text-left cursor-pointer active:scale-95"
          aria-label="ASK2 Global Home"
        >
          <div className="flex flex-col">
            <span className="font-black text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 group-hover:text-amber-300 transition-colors drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
              ASK 2 GLOBAL Pvt. Ltd.
            </span>
          </div>
        </button>

        {/* DESKTOP NAVIGATION LINKS WITH 3D METALLIC SILVER DEFAULT & GOLDEN ACTIVE/SELECTED STATE */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs font-semibold" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-xl transition-all duration-300 font-extrabold tracking-wider cursor-pointer border select-none ${
                  isActive 
                    ? /* GOLDEN STATE WHEN CLICKED / ACTIVE */
                      'text-slate-950 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 border-amber-200 shadow-[0_6px_0_#92400e,0_10px_20px_rgba(245,158,11,0.5)] translate-y-[-2px] active:translate-y-[2px] active:shadow-[0_2px_0_#92400e]' 
                    : /* METALLIC 3D SILVER DEFAULT STATE */
                      'text-slate-100 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 border-slate-200 text-slate-950 font-black shadow-[0_5px_0_#475569,0_8px_15px_rgba(255,255,255,0.15)] hover:from-slate-100 hover:to-slate-400 hover:border-white hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0_1px_0_#475569]'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${
                  isActive ? 'text-slate-950 scale-110' : 'text-slate-900 group-hover:scale-110'
                }`} />
                <span>{item.label}</span>

                {/* Magical Glow Dot on Active Link */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-amber-200 rounded-full blur-[2px]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SIDE: VERIFIED BADGE & 3D AUTH BUTTONS */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* VERIFIED BADGE */}
          <div className="flex items-center gap-2 text-[11px] font-black tracking-wider text-amber-300 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border border-amber-500/50 px-4 py-2 rounded-xl shadow-[0_4px_0_#78350f,0_0_15px_rgba(245,158,11,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,1)]" />
            </span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="uppercase font-mono">VERIFIED B2B</span>
          </div>

          {activeUser ? (
            <div className="flex items-center gap-2">
              {/* 3D VENDOR PROFILE BUTTON (SILVER LOOK) */}
              <button
                onClick={() => setShowVendorProfile(true)}
                className="flex items-center gap-2 text-xs font-bold text-slate-950 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border border-slate-100 hover:border-amber-400 px-4 py-2.5 rounded-xl transition-all shadow-[0_5px_0_#475569,0_8px_15px_rgba(0,0,0,0.6)] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0_1px_0_#475569] cursor-pointer"
              >
                <UserCircle2 className="w-4 h-4 text-slate-900" />
                <span className="capitalize">{activeUser.companyName || activeUser.role || 'Vendor'}</span>
              </button>

              {/* 3D LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                title="Log out"
                className="p-2.5 rounded-xl text-slate-950 hover:text-red-600 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 border border-slate-100 shadow-[0_4px_0_#475569] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0_1px_0_#475569] transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* 3D SILVER LOGIN BUTTON WITH SHINE ANIMATION */
            <button
              onClick={() => setShowAuth(true)}
              className="relative overflow-hidden text-xs font-black text-slate-950 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 border border-white px-5 py-2.5 rounded-xl shadow-[0_6px_0_#475569,0_10px_20px_rgba(255,255,255,0.2)] hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-500 hover:border-amber-200 hover:shadow-[0_6px_0_#92400e] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-[0_2px_0_#475569] transition-all cursor-pointer group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-900 group-hover:text-slate-950" />
                Login / Sign Up
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            </button>
          )}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-gradient-to-b from-slate-200 to-slate-400 border border-white text-slate-950 shadow-[0_4px_0_#475569] active:translate-y-[2px] focus:outline-none font-bold"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation" 
          className="lg:hidden mt-3 border border-amber-500/40 rounded-2xl bg-neutral-950/95 backdrop-blur-2xl px-4 pt-4 pb-5 space-y-3 shadow-[0_20px_40px_rgba(0,0,0,0.9)] transition-all duration-300"
        >
          <div className="px-3 py-1.5 text-[10px] font-black text-amber-400 uppercase tracking-widest font-mono flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Navigation Desk
          </div>
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                  isActive
                    ? 'text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 border-amber-200 shadow-[0_4px_0_#92400e]'
                    : 'text-slate-950 bg-gradient-to-r from-slate-200 to-slate-400 border-white shadow-[0_3px_0_#475569]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-900'}`} />
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-800'}`} />
              </button>
            );
          })}

          <div className="pt-3 mt-2 border-t border-neutral-800">
            {activeUser ? (
              <div className="flex items-center justify-between px-3.5 py-2.5">
                <button
                  onClick={() => {
                    setShowVendorProfile(true);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 capitalize"
                >
                  <UserCircle2 className="w-4 h-4 text-amber-400" />
                  {activeUser.companyName || 'Vendor Profile'}
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-red-400"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowAuth(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-xs font-black text-slate-950 bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 border border-white px-4 py-3 rounded-xl shadow-[0_4px_0_#475569] active:translate-y-[2px]"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* Vendor Profile Modal */}
      {showVendorProfile && activeUser && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-amber-500/40 rounded-3xl w-full max-w-lg p-7 relative shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-slate-100">
            <button
              onClick={() => setShowVendorProfile(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-neutral-800">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-200 flex items-center justify-center text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{activeUser.companyName || 'Vendor Company'}</h3>
                <span className="text-xs font-mono font-bold text-amber-400">GSTIN: {activeUser.gstNo || 'N/A'}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
                <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Business Address
                </span>
                <p className="font-medium text-slate-200 leading-relaxed">{activeUser.address || 'N/A'}</p>
              </div>

              <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
                <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-amber-400" /> Products / Services Offered
                </span>
                <p className="font-medium text-slate-200 leading-relaxed">{activeUser.products || 'N/A'}</p>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
                  <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" /> Email
                  </span>
                  <p className="font-mono text-amber-300 truncate font-semibold">{activeUser.email || 'N/A'}</p>
                </div>

                <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-2xl">
                  <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> Mobile
                  </span>
                  <p className="font-mono text-slate-200 font-semibold">{activeUser.mobile || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}