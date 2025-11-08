import React, { useState, useEffect } from 'react';
import { InstagramIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md transition-all duration-200 ease-in-out ${
        isScrolled ? 'shadow-[0_20px_60px_-35px_rgba(15,23,42,0.75)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:text-white/70"
          aria-label="Flow corp"
        >
          FLOW CORP
        </a>
        <nav className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/selfbrain_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition-all duration-200 hover:border-white/40 hover:text-white hover:shadow-[0_0_25px_rgba(148,163,255,0.45)]"
          >
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
