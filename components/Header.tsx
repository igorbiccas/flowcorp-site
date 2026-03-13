import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BrazilFlagIcon } from './icons';

interface HeaderProps {
  showLanguageSelector?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLanguageSelector = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.app.nav.home },
    { href: '#capacidades', label: t.app.nav.capabilities },
    { href: '#produtos', label: t.app.nav.products },
    { href: '#sobre', label: t.app.nav.about },
    { href: '#contato', label: t.app.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/10 bg-[#0a0a0c]/80 py-4 backdrop-blur-xl' : 'bg-transparent py-6'
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {showLanguageSelector && (
            <button
              onClick={toggleLanguage}
              className="flex h-8 w-12 items-center justify-center rounded-lg border border-white/15 bg-zinc-900/80 transition-transform hover:scale-105 hover:bg-zinc-800 active:scale-95"
              title={language === 'en' ? 'Translate to Portuguese' : 'Translate to English'}
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
