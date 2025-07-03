import React from 'react';
import Button from './Button';
import Animated from './Animated';
import { ArrowRightIcon } from './icons';

const BetaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,119,182,0.1),_rgba(3,3,3,0)_60%)] z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <Animated>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-brand-text">
            Comece agora.
          </h2>
        </Animated>
        <Animated delay={200}>
          <p className="text-base md:text-lg text-brand-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
            Descubra o que uma IA pode se tornar quando ela <strong>vive com você, não apesar de você.</strong>
          </p>
        </Animated>
        <Animated delay={400}>
          <a href="https://selfbrain.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="text-lg">
              Acessar SelfBrain
              <ArrowRightIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </Animated>
      </div>
    </section>
  );
};

export default BetaSection;