import React, { useState, useEffect } from 'react';
import ask2Logo from '../assets/ask2 logo 2.jpeg'; // Apne assets path ke according verify kar lein

export default function Ask2GlobalLogoAnimation() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 300);  // Earth Reveal
    const t2 = setTimeout(() => setPhase(3), 1000); // Orbit Path Reveal
    const t3 = setTimeout(() => setPhase(4), 1800); // Orbiting Text Reveal

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[550px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div 
        className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.28)_0%,rgba(212,175,55,0.08)_45%,transparent_70%)] blur-2xl transition-all duration-1000 pointer-events-none ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      />

      {/* Earth / Globe Core */}
      <div className={`relative w-64 h-64 sm:w-72 sm:h-72 transition-all duration-1000 transform ${phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        
        {/* Globe Base Sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-900 via-black to-amber-950/60 border border-amber-500/40 shadow-[inset_0_0_50px_rgba(245,158,11,0.3),0_0_35px_rgba(245,158,11,0.2)]" />

        {/* Latitude & Longitude Grid Lines */}
        <svg className="absolute inset-0 w-full h-full text-amber-500/25 animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <ellipse cx="50" cy="50" rx="48" ry="18" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="34" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="18" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="34" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Center Logo Container - ROUND SHAPE UPDATED */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/90 p-1.5 border-2 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center overflow-hidden">
            <img 
              src={ask2Logo} 
              alt="ASK2 Global Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Orbiting Ring with Text (Gap Filled & Spacing Adjusted) */}
      {phase >= 3 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
            
            <svg 
              className={`w-full h-full transition-opacity duration-1000 ${
                phase >= 4 ? 'opacity-100' : 'opacity-0'
              }`}
              viewBox="0 0 300 300"
            >
              <defs>
                {/* Orbital Circular Path */}
                <path
                  id="orbitPath"
                  d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
                
                {/* Metallic Gold Text Gradient */}
                <linearGradient id="highVisGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff7ed" />
                  <stop offset="35%" stopColor="#fef08a" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>

                {/* Text Shadow Filter */}
                <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#000000" floodOpacity="0.95" />
                  <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#f59e0b" floodOpacity="0.75" />
                </filter>
              </defs>

              {/* Glowing Orbit Guide Line */}
              <circle
                cx="150"
                cy="150"
                r="120"
                fill="none"
                stroke="rgba(245, 158, 11, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Seamlessly Filled Circular Rotating Text */}
              <g className="animate-[spin_20s_linear_infinite] origin-center">
                <text 
                  fontSize="9.8" 
                  fontWeight="800" 
                  fill="url(#highVisGold)" 
                  filter="url(#textGlow)"
                  className="uppercase font-mono tracking-[0.18em]"
                >
                  <textPath href="#orbitPath" startOffset="0%">
                     ASK2 GLOBAL PRIVATE LIMITED ★ ASK MORE • INNOVATE SMARTER • TRADE GLOBAL ★ ASK2 GLOBAL PRIVATE LIMITED ★ ASK MORE • INNOVATE SMARTER • TRADE GLOBAL
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* Bottom Subtitle Label */}
      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 transition-all duration-1000 transform ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] text-amber-300 uppercase bg-black/90 px-4 py-1.5 rounded-full border border-amber-500/40 backdrop-blur-md shadow-lg shadow-amber-500/10 whitespace-nowrap inline-block">
          Global Trade & Enterprise Network
        </span>
      </div>
    </div>
  );
}