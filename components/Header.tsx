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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-zinc-100 tracking-tight transition-colors hover:text-zinc-300">
            Flow corp.
          </a>
          <nav className="flex items-center gap-6">
            <a href="https://www.instagram.com/selfbrain_/" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram" className="text-zinc-400 transition-colors hover:text-zinc-100">
              <InstagramIcon />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;