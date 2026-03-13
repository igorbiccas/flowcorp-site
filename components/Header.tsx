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
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  const navLinks = [
    { href: `${isHomePage ? '' : '/'}#home`, label: t.app.nav.home },
    { href: `${isHomePage ? '' : '/'}#capacidades`, label: t.app.nav.capabilities },
    { href: `${isHomePage ? '' : '/'}#produtos`, label: t.app.nav.products },
    { href: `${isHomePage ? '' : '/'}#sobre`, label: t.app.nav.about },
    { href: `${isHomePage ? '' : '/'}#contato`, label: t.app.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'border-b border-white/10 bg-[#0a0a0c]/75 py-3 backdrop-blur-lg' : 'bg-transparent py-5'
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
          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-200"
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
