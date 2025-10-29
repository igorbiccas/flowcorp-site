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
          ? 'border-zinc-800/80 bg-zinc-950/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-zinc-100 transition-colors hover:text-white"
            aria-label="Flow corp"
          >
            FLOW CORP
          </a>
          <nav className="flex items-center gap-8 text-sm text-zinc-400">
            <a href="#products" className="transition hover:text-zinc-100">
              Produtos
            </a>
            <a
              href="https://www.instagram.com/selfbrain_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="rounded-full border border-zinc-800/70 p-2 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
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