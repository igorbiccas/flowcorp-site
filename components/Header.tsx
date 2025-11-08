import React, { useState, useEffect } from 'react';
import { InstagramIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = 'transition-colors hover:text-white';

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
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-white/50 hover:text-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="header-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex" id="header-navigation">
            <a href="#purpose" className={navLinkClass}>
              Propósito
            </a>
            <a href="#products" className={navLinkClass}>
              Produtos
            </a>
            <a href="mailto:contato@flowcorp.ai" className={navLinkClass}>
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
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-200`}
      >
        <nav
          className="space-y-3 border-t border-white/10 bg-black/80 px-[5%] py-4 text-base text-white/80"
          aria-label="Mobile navigation"
        >
          <a
            href="#purpose"
            className="block transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Propósito
          </a>
          <a
            href="#products"
            className="block transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Produtos
          </a>
          <a
            href="mailto:contato@flowcorp.ai"
            className="block transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </a>
          <a
            href="https://www.instagram.com/selfbrain_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white transition-colors hover:text-white/70"
            onClick={() => setIsMenuOpen(false)}
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
