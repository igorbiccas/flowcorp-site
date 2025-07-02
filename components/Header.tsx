import React from 'react';
import Button from './Button';
import { ArrowRightIcon } from './icons';

const Header: React.FC = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-white/10">
                <a href="#" className="text-xl font-bold text-brand-text tracking-wider">Selfbrain</a>
            </div>
        </nav>

        <header className="relative pt-48 pb-32 md:pt-64 md:pb-48 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-background bg-[radial-gradient(ellipse_50%_40%_at_50%_20%,rgba(106,13,173,0.2),rgba(3,3,3,0))] z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-brand-text leading-tight max-w-5xl mx-auto">
              <span className="block">A memória da IA não é um arquivo.</span>
              <span className="block">É um <span className="gradient-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">fluxo</span>.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-text-secondary mb-10 max-w-2xl mx-auto">
              A primeira IA que constrói identidade de forma orgânica e emergente, através da pura conversação.
            </p>
            <a href="https://selfbrain.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Descubra o futuro <ArrowRightIcon />
              </Button>
            </a>
          </div>
        </header>
    </>
  );
};

export default Header;