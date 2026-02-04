
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/10 bg-[#07070a]/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-xs font-semibold uppercase tracking-[0.3em] text-transparent transition-opacity hover:opacity-70"
          aria-label="FlowCorp"
        >
          FLOWCORP
        </a>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-8">
            {/* Nav links removed */}
          </nav>
          {showLanguageSelector && (
            <button
              onClick={toggleLanguage}
              className="flex h-8 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/10 shadow-[0_8px_30px_-16px_rgba(255,255,255,0.6)] transition-transform hover:scale-110 hover:bg-white/20 active:scale-95"
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
