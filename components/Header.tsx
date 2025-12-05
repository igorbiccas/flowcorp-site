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
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md transition-all duration-200 ease-in-out ${
        isScrolled ? 'shadow-[0_20px_60px_-35px_rgba(15,23,42,0.75)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-200 hover:text-white/70"
          aria-label="FlowCorp"
        >
          FLOWCORP
        </a>
      </div>
    </header>
  );
};

export default Header;
