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
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-[0_15px_60px_-35px_rgba(15,23,42,0.65)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-[5%]">
        <a
          href="#"
          className="text-base font-semibold tracking-[0.3em] text-white transition-colors hover:text-white/80"
          aria-label="Flow corp"
        >
          FLOW CORP
        </a>
        <nav className="flex items-center gap-10 text-sm text-white/70">
          <a href="#purpose" className="transition-colors hover:text-white">
            Propósito
          </a>
          <a href="#products" className="transition-colors hover:text-white">
            Produtos
          </a>
          <a href="mailto:contato@flowcorp.ai" className="transition-colors hover:text-white">
            Contato
          </a>
          <a
            href="https://www.instagram.com/selfbrain_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga-nos no Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white/60 transition-all duration-300 hover:border-white/80 hover:text-white"
          >
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;