import React from 'react';
import Button from './Button';
import { ArrowRightIcon } from './icons';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-32 md:py-40 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,119,182,0.1),_rgba(3,3,3,0)_60%)] z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-text">
          Junte-se à vanguarda da IA.
        </h2>
        <p className="text-lg md:text-xl text-brand-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
          Acesse a plataforma e comece a construir hoje mesmo. O futuro da identidade digital está em suas mãos.
        </p>
        <a href="https://selfbrain.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="text-lg">
            Experimente Agora
            <ArrowRightIcon />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CtaSection;