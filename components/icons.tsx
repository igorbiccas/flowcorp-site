
import React from 'react';

const iconWrapper =
  'flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-white/80 shadow-[0_0_25px_rgba(56,189,248,0.15)] backdrop-blur';

export const SparklesIcon = () => (
  <div className={iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4.5 18.6 10l5.5 2.6-5.5 2.6L16 20.6l-2.6-5.4L7.9 12.6l5.5-2.6L16 4.5Z" />
      <path d="M23.5 20.5l1.2 2.6 2.6 1.2-2.6 1.2-1.2 2.6-1.2-2.6-2.6-1.2 2.6-1.2 1.2-2.6Z" />
      <path d="M8.7 21.1l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9Z" />
    </svg>
  </div>
);

export const AnamneseIcon = () => (
  <div className={iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6.5h9l5 5v12.5a2.5 2.5 0 0 1-2.5 2.5H9a2.5 2.5 0 0 1-2.5-2.5V9a2.5 2.5 0 0 1 2.5-2.5Z" />
      <path d="M18 6.5v5h5" />
      <path d="M12 16h8" />
      <path d="M16 12v8" />
    </svg>
  </div>
);

export const InsightIcon = () => (
  <div className={iconWrapper}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 18.5a9.5 9.5 0 0 1 19 0" />
      <path d="M10 18.5a6 6 0 0 1 12 0" />
      <path d="M16 23.5v2.5" />
      <path d="M12.5 26h7" />
      <circle cx="16" cy="18.5" r="1.5" />
    </svg>
  </div>
);

export const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18.1-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18.1-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.7-3.2 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.4-29.9-17-41.1-4.5-10.9-9.1-9.4-12.4-9.5-3.2-.1-6.9-.1-10.6-.1-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
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

export const BrazilFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="h-4 w-6 rounded-sm shadow-sm">
    <rect width="72" height="48" fill="#009c3b" />
    <path fill="#ffdf00" d="M36 4L68 24L36 44L4 24z" />
    <circle cx="36" cy="24" r="12" fill="#002776" />
    <path fill="#fff" d="M36 24V22A12 12 0 0 0 47.9 23.1L48 24A12 12 0 0 1 36 24Z" />
  </svg>
);

export const USAFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="h-4 w-6 rounded-sm shadow-sm">
    <rect width="72" height="48" fill="#bf0a30" />
    <rect width="72" height="48" y="3.69" fill="#fff" />
    <rect width="72" height="48" y="7.38" fill="#bf0a30" />
    <rect width="72" height="48" y="11.07" fill="#fff" />
    <rect width="72" height="48" y="14.76" fill="#bf0a30" />
    <rect width="72" height="48" y="18.45" fill="#fff" />
    <rect width="72" height="48" y="22.14" fill="#bf0a30" />
    <rect width="72" height="48" y="25.83" fill="#fff" />
    <rect width="72" height="48" y="29.52" fill="#bf0a30" />
    <rect width="72" height="48" y="33.21" fill="#fff" />
    <rect width="72" height="48" y="36.9" fill="#bf0a30" />
    <rect width="72" height="48" y="40.59" fill="#fff" />
    <rect width="72" height="48" y="44.28" fill="#bf0a30" />
    <rect width="28.8" height="25.85" fill="#002868" />
  </svg>
);
