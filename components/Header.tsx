
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrazilFlagIcon } from './icons';

interface HeaderProps {
  showLanguageSelector?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLanguageSelector = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/10 bg-[#0a0a0c]/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
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

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
            <a href="/" className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white">
              Home
            </a>
            <a href="/#contato" className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white">
              Contato
            </a>
            <a href="/selfbrain" className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white">
              SelfBrain
            </a>
            <a href="/datadoc" className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white">
              DataDoc
            </a>
          </nav>
          {showLanguageSelector && (
            <button
              onClick={toggleLanguage}
              className="flex h-8 w-12 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 transition-transform hover:scale-105 hover:bg-zinc-800 active:scale-95"
              title={language === 'en' ? "Translate to Portuguese" : "Translate to English"}
            >
              {language === 'en' ? (
                <BrazilFlagIcon />
              ) : (
                <span className="text-xs font-bold text-zinc-400">EN</span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
