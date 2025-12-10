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
      className={`fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-[#0b0f19]/85 backdrop-blur-md transition-all duration-200 ease-in-out ${
        isScrolled ? 'shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-100 transition-colors duration-200 hover:text-zinc-300"
          aria-label="FlowCorp"
        >
          FLOWCORP
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-200">
          <a
            href="/selfbrain"
            className="rounded-full border border-transparent p-2 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900"
            aria-label="Open SelfBrain support"
            title="SelfBrain"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-6 w-6 fill-none stroke-zinc-200"
              role="img"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="20" strokeWidth="3" />
              <path d="M24 4v40" strokeWidth="3" strokeLinecap="round" />
              <path d="M24 24c9 0 16 7 16 16" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
