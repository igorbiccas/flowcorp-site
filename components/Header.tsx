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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/5 bg-black/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-70"
          aria-label="FlowCorp"
        >
          FLOWCORP
        </a>
        <nav className="flex items-center gap-8">
          {/* Nav links removed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
