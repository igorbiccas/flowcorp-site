import React, { useState, useEffect } from 'react';

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out supports-[backdrop-filter]:bg-[#050505]/80 bg-[#050505]/90 backdrop-blur ${
        isScrolled ? 'shadow-[0_12px_40px_rgba(0,0,0,0.45)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white/10' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-[0.35em] text-neutral-300 transition-colors hover:text-neutral-100"
            aria-label="Flow corp"
          >
            <span>flowcorp</span>
            <span className="text-neutral-500" aria-hidden="true">
              •
            </span>
          </a>
          <nav className="flex items-center gap-8">
            <a
              href="#manifesto"
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 transition hover:text-neutral-100"
            >
              Manifesto
            </a>
            <a
              href="#products"
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 transition hover:text-neutral-100"
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 transition hover:text-neutral-100"
            >
              Contato
            </a>
            <a
              href="mailto:contato@flowcorp.ai"
              className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-neutral-100 transition hover:border-white/30"
            >
              Falar com a Flow
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
