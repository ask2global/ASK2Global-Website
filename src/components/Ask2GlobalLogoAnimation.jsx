import React from 'react';
import globeImage from '../assets/globe.png';

export default function Ask2GlobalLogoAnimation() {
  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[550px] aspect-square mx-auto flex items-center justify-center select-none overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.3)_0%,rgba(212,175,55,0.08)_45%,transparent_70%)] blur-2xl pointer-events-none" />

      {/* Main Golden Globe (Static) - Center Logo Removed */}
      <div className="relative w-[270px] h-[270px] sm:w-[310px] sm:h-[310px]">
        
        {/* Globe Image */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.4)] border border-amber-500/50">
          <img 
            src={globeImage} 
            alt="Golden Globe" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Static Curved Text Ring - Single Time Company Name & Slogan Covering Full Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]">
          <svg className="w-full h-full" viewBox="0 0 300 300">
            <defs>
              <path
                id="orbitPath"
                d="M 150, 150 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
              />
              
              <linearGradient id="highVisGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff7ed" />
                <stop offset="35%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>

              <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#000000" floodOpacity="0.95" />
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.8" />
              </filter>
            </defs>

            {/* Inner Guide Circle */}
            <circle
              cx="150"
              cy="150"
              r="130"
              fill="none"
              stroke="rgba(245, 158, 11, 0.45)"
              strokeWidth="1.5"
            />

            {/* Outer Guide Circle */}
            <circle
              cx="150"
              cy="150"
              r="142"
              fill="none"
              stroke="rgba(245, 158, 11, 0.25)"
              strokeWidth="1"
            />

            {/* Single Text Block with Spacing covering full circumference */}
            <text 
              fontSize="11.5" 
              fontWeight="800" 
              fill="url(#highVisGold)" 
              filter="url(#textGlow)"
              className="uppercase font-mono tracking-[0.38em]"
            >
              <textPath href="#orbitPath" startOffset="0%">
                ASK2 GLOBAL PRIVATE LIMITED ★ ASK MORE • INNOVATE SMARTER • TRADE GLOBAL ★
              </textPath>
            </text>
          </svg>
        </div>
      </div>

    </div>
  );
}