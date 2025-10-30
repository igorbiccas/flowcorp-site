import React from 'react';

const iconWrapper =
  'w-12 h-12 mb-6 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center shadow-[0_25px_65px_-40px_rgba(148,163,184,0.45)] backdrop-blur';

export const SparklesIcon = () => (
  <div className={iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-7 w-7 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.9 4.2c-1.5-2.6-5.3-2.4-6.5.3l-1.3 3.1c-.3.7-.9 1.2-1.7 1.3l-3.4.4c-2.9.3-4.1 4-1.9 5.9l2.6 2.2c.6.5.9 1.3.8 2.1l-.7 3.3c-.6 2.8 2.5 4.8 4.9 3.4l2.9-1.7c.7-.4 1.5-.4 2.2 0l2.9 1.7c2.5 1.4 5.5-.6 4.9-3.4l-.7-3.3c-.2-.8.2-1.6.8-2.1l2.6-2.2c2.2-1.9 1-5.6-1.9-5.9l-3.4-.4c-.8-.1-1.4-.6-1.7-1.3l-1.3-3.1Z" />
      <path d="M12 15.5c1-2 3.7-2 4.7 0" />
      <path d="M13.3 18.8c.9.8 2.4.8 3.3 0" />
    </svg>
  </div>
);

export const AnamneseIcon = () => (
  <div className={iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-7 w-7 text-slate-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="6" width="22" height="22" rx="6" />
      <path d="M16 11v12" />
      <path d="M10 17h12" />
      <path d="M12.5 5.5 16 3l3.5 2.5" />
    </svg>
  </div>
);

export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="h-5 w-5 text-slate-200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1.5 inline-block transition-transform duration-200 group-hover/button:translate-x-1"
  >
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
