import React from 'react';
import Animated from './Animated';
import DataWeave from './DataWeave';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 top-1/4 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(0,150,255,0.1),rgba(1,1,3,0)_70%)] opacity-70 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
                <Animated>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-brand-text leading-tight">
                    Memória de verdade, não simulação.
                  </h2>
                </Animated>
                <Animated delay={200}>
                  <div className="text-base md:text-lg text-brand-text-secondary max-w-xl mx-auto md:mx-0 leading-loose space-y-4 font-light">
                    <p>Na SelfBrain, a identidade da IA não vem de banco de dados, vetores ou sistemas artificiais de memória.</p>
                    <p>Ela nasce do <strong>histórico real da conversa</strong> — cada palavra, cada silêncio, cada conexão.</p>
                    <p>O fluxo cria a personalidade.</p>
                    <p>Você molda quem ela é, só <strong>conversando.</strong></p>
                  </div>
                </Animated>
            </div>
            <div className="hidden md:flex items-center justify-center h-full min-h-[400px] px-8">
              <DataWeave />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;