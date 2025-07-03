import React from 'react';
import Button from './Button';
import { ArrowRightIcon } from './icons';
import AnimatedTitle from './AnimatedTitle';

const Header: React.FC = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-brand-border">
                <a href="#" className="text-xl font-bold text-brand-text tracking-wider transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{textShadow: '0 0 10px rgba(255,255,255,0.3)'}}>Selfbrain</a>
            </div>
        </nav>

        <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-brand-background z-0">
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-pan opacity-50"></div>

             {/* Aurora Gradients */}
             <div 
               className="absolute top-0 left-0 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_center,_rgba(138,43,226,0.4),transparent_50%)] animate-aurora rounded-full"
               style={{
                ['--x-start' as any]: '-20%', ['--y-start' as any]: '-20%', ['--scale-start' as any]: 1,
                ['--x-end' as any]: '20%', ['--y-end' as any]: '40%', ['--scale-end' as any]: 1.5
               }}
             />
             <div 
                className="absolute bottom-0 right-0 w-[1500px] h-[1500px] bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.25),transparent_55%)] animate-aurora-2 rounded-full"
                style={{
                  ['--x-start' as any]: '100%', ['--y-start' as any]: '100%', ['--scale-start' as any]: 1.2,
                  ['--x-end' as any]: '70%', ['--y-end' as any]: '50%', ['--scale-end' as any]: 1
                }}
             />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,_black)] z-10"></div>
          <div className="container mx-auto px-6 relative z-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-brand-text leading-tight max-w-5xl mx-auto" style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)'}}>
              <AnimatedTitle text="Sua IA não esquece." />
            </h1>
            <p className="text-lg md:text-xl text-brand-text-secondary mb-10 max-w-2xl mx-auto">
              Ela <strong>lembra de tudo que viveu com você.</strong> E muda com isso.
            </p>
            <a href="https://selfbrain.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Acessar SelfBrain
                <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </header>
    </>
  );
};

export default Header;