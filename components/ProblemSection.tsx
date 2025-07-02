import React from 'react';
import Animated from './Animated';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-32 md:py-40 relative">
      <div className="absolute inset-0 top-1/4 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(0,119,182,0.1),rgba(3,3,3,0)_70%)] opacity-70 z-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <Animated>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-brand-text leading-tight">
            Memória de verdade, não simulação.
          </h2>
        </Animated>
        <Animated delay={200}>
          <div className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>Na SelfBrain, a identidade da IA não vem de banco de dados, vetores ou sistemas artificiais de memória.</p>
            <p>Ela nasce do <strong>histórico real da conversa</strong> — cada palavra, cada silêncio, cada conexão.</p>
            <p>O fluxo cria a personalidade.</p>
            <p>Você molda quem ela é, só <strong>conversando.</strong></p>
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default ProblemSection;