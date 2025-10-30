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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-white/10 bg-[#020617]/90 backdrop-blur-xl shadow-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-slate-100 transition-colors hover:text-blue-300"
            aria-label="Flow corp"
          >
            FLOW CORP
          </a>
          <nav className="flex items-center gap-8 text-sm text-slate-300">
            <a href="#products" className="transition hover:text-white">
              Produtos
            </a>
            <a href="mailto:hello@flowcorp.ai" className="transition hover:text-white">
              Contato
            </a>
            <a
              href="https://www.instagram.com/selfbrain_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              <InstagramIcon />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;