import React, { useState, useEffect, useRef } from 'react';
import { InstagramIcon } from './icons';

const focusableSelectors =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const focusFirstLink = () => {
      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        focusableSelectors,
      );
      focusable?.[0]?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const menuFocusable = menuRef.current
        ? Array.from(
            menuRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
          )
        : [];
      const toggleButton = toggleButtonRef.current
        ? [toggleButtonRef.current]
        : [];
      const focusableElements = [...toggleButton, ...menuFocusable];

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const isShiftTab = event.shiftKey;
      const activeElement = document.activeElement as HTMLElement | null;

      if (!isShiftTab && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (isShiftTab && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    };

    focusFirstLink();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-white/10 bg-[#020617]/90 backdrop-blur-xl shadow-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.2em] text-slate-100 transition-colors hover:text-blue-300"
            aria-label="Flow corp"
          >
            FLOW CORP
          </a>
          <nav className="flex items-center gap-8 text-sm text-slate-300">
            <a href="#products" className="transition hover:text-white">
              Produtos
            </a>
            <a href="mailto:hello@flowcorp.ai" className="transition hover:text-white">
              Contato
            </a>
            <a
              href="https://www.instagram.com/selfbrain_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="primary-navigation"
        ref={menuRef}
        className={`md:hidden ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        } absolute inset-x-0 top-20 origin-top transform transition-all duration-200 ease-out ${
          isMenuOpen ? 'translate-y-0 scale-y-100' : '-translate-y-2 scale-y-95'
        }`}
        aria-hidden={!isMenuOpen}
        style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
      >
        <div className="container mx-auto px-6 pb-6 pt-2">
          <nav className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-lg backdrop-blur">
            <ul className="flex flex-col gap-4 text-sm text-slate-600">
              <li>
                <a
                  href="#products"
                  className="block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                  onClick={closeMenu}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@flowcorp.ai"
                  className="block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                  onClick={closeMenu}
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/selfbrain_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga-nos no Instagram"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-slate-600 transition hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
                  onClick={closeMenu}
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
