import React from 'react';

export const ArrowRightIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export const BrainCircuitIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-brain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brand-purple)" />
        <stop offset="100%" stopColor="var(--color-brand-cyan)" />
      </linearGradient>
    </defs>
    <g stroke="url(#g-brain)">
        <path d="M12 5a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2" />
        <path d="M12 5a3 3 0 0 0 -3 3v1h-2a3 3 0 0 0 -3 3v2" />
        <path d="M12 13v1a3 3 0 0 0 3 3h1" />
        <path d="M12 13v1a3 3 0 0 1 -3 3h-1" />
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M18 12h-1" />
        <path d="M7 12h-1" />
        <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </g>
  </svg>
);

export const LayersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-layers" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brand-purple)" />
        <stop offset="100%" stopColor="var(--color-brand-cyan)" />
      </linearGradient>
    </defs>
    <g stroke="url(#g-layers)">
        <path d="M12 16l-8 -4.5l8 -4.5l8 4.5l-8 4.5" />
        <path d="M4 13.5l8 4.5l8 -4.5" />
        <path d="M4 9.5l8 4.5l8 -4.5" />
    </g>
  </svg>
);

export const HistoryIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="g-history" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-brand-purple)" />
        <stop offset="100%" stopColor="var(--color-brand-cyan)" />
      </linearGradient>
    </defs>
    <g stroke="url(#g-history)">
        <path d="M12 8l-4 4l4 4" />
        <path d="M20 12h-12" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" transform="rotate(-45 12 12)" />
    </g>
  </svg>
);


const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-12 h-12 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

export const EmptyMindIcon: React.FC<{className?: string}> = ({ className }) => (
  <IconWrapper className={className}>
    <defs>
      <linearGradient id="g-empty" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8A2BE2" />
        <stop offset="100%" stopColor="#FF00FF" />
      </linearGradient>
      <filter id="glow-empty" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow-empty)" stroke="url(#g-empty)">
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" opacity="0.5" />
      <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    </g>
  </IconWrapper>
);

export const ContextIcon: React.FC<{className?: string}> = ({ className }) => (
  <IconWrapper className={className}>
     <defs>
      <linearGradient id="g-context" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0096FF" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
       <filter id="glow-context" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow-context)" stroke="url(#g-context)">
      <path d="M8 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" opacity="0.3" transform="rotate(10 12 12)" />
      <path d="M4 8h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
    </g>
  </IconWrapper>
);

export const EvolveIcon: React.FC<{className?: string}> = ({ className }) => (
  <IconWrapper className={className}>
    <defs>
      <linearGradient id="g-evolve" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF00FF" />
        <stop offset="100%" stopColor="#00FFFF" />
      </linearGradient>
      <filter id="glow-evolve" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow-evolve)" stroke="url(#g-evolve)">
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M15.536 8.464l-1.071 1.071" opacity="0.5"/>
      <path d="M8.464 15.536l-1.071 1.071" opacity="0.5"/>
      <path d="M9.535 8.464l-1.07 1.071" opacity="0.5"/>
      <path d="M16.505 15.536l-1.07 1.071" opacity="0.5"/>
      <path d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16z" />
    </g>
  </IconWrapper>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M7.8 2h8.4c2.1 0 3.8 1.7 3.8 3.8v8.4c0 2.1-1.7 3.8-3.8 3.8h-8.4c-2.1 0-3.8-1.7-3.8-3.8v-8.4c0-2.1 1.7-3.8 3.8-3.8z" />
     <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
     <path d="M16.5 7.5l0 .01" />
  </svg>
);