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
          ? 'border-slate-200/80 bg-white/85 backdrop-blur-xl shadow-sm'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-slate-900 transition-colors hover:text-slate-600"
            aria-label="Flow corp"
          >
            FLOW CORP
          </a>
          <nav className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#products" className="transition hover:text-slate-900">
              Produtos
            </a>
            <a href="mailto:hello@flowcorp.ai" className="transition hover:text-slate-900">
              Contato
            </a>
            <a
              href="https://www.instagram.com/selfbrain_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
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