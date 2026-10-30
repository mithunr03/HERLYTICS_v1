import React from 'react';
import symbolImg from '../assets/herlytics-symbol.png';

interface IllustrationProps {
  type: 'hero' | 'login' | 'assessment' | 'peaceful' | 'cycle';
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  if (type === 'login' || type === 'assessment') {
    return (
      <div className={`relative flex items-center justify-center py-2 ${className}`}>
        {/* Soft Ambient Radiance */}
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#F9EBEF] via-[#FDF0EB] to-[#EDE8F5] blur-2xl opacity-60 pointer-events-none" />

        {/* Refined Wellness Showcase Plate */}
        <div className="relative z-10 w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-3xl border border-[#EFE8E6] p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#F5EDEB] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#FFF8F9] border border-[#F4E3E6] p-1 flex items-center justify-center shrink-0">
                <img src={symbolImg} alt="HerLytics Mark" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2B1D22]">Daily Harmony</p>
                <p className="text-[10px] text-[#866F78]">Predictive Rhythm</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E7F3EF] text-[#3D7A6C]">
              Balanced
            </span>
          </div>

          {/* Gentle Vitality Curves */}
          <div className="space-y-2.5">
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-[#533E46]">
                <span>Hormonal Rhythm</span>
                <span className="font-semibold text-[#8A3B4D]">Follicular Phase</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#FAF7F5] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F3D2D9] to-[#8A3B4D] w-3/4 rounded-full" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-[#533E46]">
                <span>Energy & Vitality</span>
                <span className="font-semibold text-[#5B9F8E]">Optimal</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#FAF7F5] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#E7F3EF] to-[#5B9F8E] w-4/5 rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-1 flex items-center justify-between text-[10px] text-[#866F78]">
            <span>Empowered self-care</span>
            <span className="text-[#8A3B4D] font-medium">Updated daily</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'hero' || type === 'peaceful') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Soft Organic Ambient Background Circles */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#F9EBEF] via-[#EDE8F5] to-[#FDF0EB] blur-2xl opacity-70 pointer-events-none" />

        {/* Abstract Female Silhouette SVG */}
        <svg
          viewBox="0 0 400 400"
          className="relative z-10 w-full max-w-[340px] drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 40C270 40 330 100 330 180C330 260 250 330 200 360C150 330 70 260 70 180C70 100 130 40 200 40Z"
            fill="url(#petalGrad)"
            opacity="0.85"
          />
          <path
            d="M190 120C190 105 200 95 215 95C230 95 240 105 240 120C240 135 228 145 215 145C200 145 190 135 190 120Z"
            fill="#8A3B4D"
            opacity="0.8"
          />
          <path
            d="M170 280C170 230 185 190 205 160C210 152 225 152 230 162C245 192 255 235 255 280C225 290 195 290 170 280Z"
            fill="#C96677"
            opacity="0.9"
          />
          <path
            d="M130 220C100 210 90 170 110 140C125 165 140 190 130 220Z"
            fill="#5B9F8E"
            opacity="0.75"
          />
          <path
            d="M270 220C300 210 310 170 290 140C275 165 260 190 270 220Z"
            fill="#A895D1"
            opacity="0.75"
          />
          <circle cx="200" cy="70" r="5" fill="#EE9E86" />
          <circle cx="120" cy="110" r="4" fill="#A895D1" />
          <circle cx="280" cy="110" r="4" fill="#5B9F8E" />
          <circle cx="200" cy="310" r="6" fill="#C96677" />

          <defs>
            <linearGradient id="petalGrad" x1="70" y1="40" x2="330" y2="360" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF2F4" />
              <stop offset="0.5" stopColor="#F9EBEF" />
              <stop offset="1" stopColor="#EDE8F5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="w-24 h-24 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] p-3 flex items-center justify-center shadow-2xs">
        <img src={symbolImg} alt="HerLytics Emblem" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};
