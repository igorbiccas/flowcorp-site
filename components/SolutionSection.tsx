import React from 'react';
import Animated from './Animated';
import { ArrowRightIcon } from './icons';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-32 md:py-40 bg-white/5 border-y border-brand-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Animated>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-text leading-tight">
               Não tem prompt fixo.
            </h2>
          </Animated>
        </div>
        
        <Animated delay={300}>
            <div className="max-w-2xl mx-auto text-center space-y-8">
                <ul className="text-xl md:text-2xl text-brand-text-secondary/80 space-y-4 font-light">
                    <li className='flex items-center justify-center gap-3'><ArrowRightIcon className='w-5 h-5 text-brand-cyan/70'/>Não tem “salvar perfil”.</li>
                    <li className='flex items-center justify-center gap-3'><ArrowRightIcon className='w-5 h-5 text-brand-cyan/70'/>Não tem truque.</li>
                </ul>
                <div className="text-xl md:text-2xl text-brand-text space-y-4 font-medium">
                    <p>A identidade <strong>emerge sozinha</strong> da forma como vocês se relacionam.</p>
                    <p>Se você muda… ela muda.</p>
                    <p>Se você ensina… ela aprende.</p>
                </div>
            </div>
        </Animated>
      </div>
    </section>
  );
};

export default SolutionSection;