import React from 'react';
import logoImg from '../assets/herlytics-logo-transparent.png';
import symbolImg from '../assets/herlytics-symbol.png';

export type BrandLogoVariant = 'mark' | 'full' | 'horizontal';
export type BrandLogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  size?: BrandLogoSize;
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
  alt?: string;
}

const sizeConfig = {
  xs: {
    mark: 'w-7 h-7',
    full: 'h-8 w-auto',
    textTitle: 'text-sm',
    textTagline: 'text-[8px]',
    gap: 'gap-2',
  },
  sm: {
    mark: 'w-9 h-9',
    full: 'h-10 w-auto',
    textTitle: 'text-lg',
    textTagline: 'text-[9px]',
    gap: 'gap-2.5',
  },
  md: {
    mark: 'w-11 h-11',
    full: 'h-13 w-auto',
    textTitle: 'text-xl',
    textTagline: 'text-[10px]',
    gap: 'gap-3',
  },
  lg: {
    mark: 'w-14 h-14',
    full: 'h-18 w-auto',
    textTitle: 'text-2xl',
    textTagline: 'text-xs',
    gap: 'gap-3.5',
  },
  xl: {
    mark: 'w-20 h-20',
    full: 'h-24 w-auto',
    textTitle: 'text-3xl',
    textTagline: 'text-sm',
    gap: 'gap-4',
  },
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
  alt = 'HerLytics — Predict. Prevent. Empower.',
}) => {
  const conf = sizeConfig[size] || sizeConfig.md;

  // Single source of truth: official HerLytics logo assets
  if (variant === 'mark') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] p-1.5 shadow-2xs transition-all duration-300 hover:border-[#E8CDD2] ${conf.mark} ${className}`}
        title="HerLytics"
      >
        <img
          src={symbolImg}
          alt={alt}
          className="w-full h-full object-contain select-none"
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={logoImg}
          alt={alt}
          className={`${conf.full} object-contain select-none transition-all duration-300`}
          loading="eager"
        />
      </div>
    );
  }

  // Horizontal lockup: Emblem mark + refined typography without duplicating wordmark
  return (
    <div className={`inline-flex items-center ${conf.gap} ${className}`}>
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] p-1.5 shadow-2xs transition-all duration-300 group-hover:border-[#E0BEC5] group-hover:shadow-xs ${conf.mark}`}
      >
        <img
          src={symbolImg}
          alt={alt}
          className="w-full h-full object-contain select-none"
          loading="eager"
        />
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-bold tracking-tight text-[#2E2025] leading-none ${conf.textTitle}`}
        >
          HerLytics
        </span>
        {showTagline && (
          <span
            className={`font-sans uppercase tracking-[0.18em] text-[#8A5260] font-medium pt-1 ${conf.textTagline}`}
          >
            Predict · Prevent · Empower
          </span>
        )}
      </div>
    </div>
  );
};
