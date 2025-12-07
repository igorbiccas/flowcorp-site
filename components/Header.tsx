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
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl transition-all duration-200 ease-in-out ${
        isScrolled ? 'shadow-[0_20px_70px_-35px_rgba(15,23,42,0.95)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:text-emerald-200"
          aria-label="FlowCorp"
        >
          <span className="h-8 w-8 rounded-2xl bg-gradient-to-br from-emerald-500 via-cyan-500 to-indigo-500 ring-1 ring-white/20" aria-hidden="true" />
          FLOWCORP
        </a>
        <div className="hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80 md:flex">
          <span className="h-1 w-1 rounded-full bg-emerald-300" aria-hidden="true" />
          Execução inteligente
        </div>
      </div>
    </header>
  );
};

export default Header;
