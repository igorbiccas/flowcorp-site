import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-32 md:py-40">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-text leading-tight">
          As IAs de hoje têm <span className="gradient-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">amnésia</span>.
        </h2>
        <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
          Cada nova conversa começa do zero. Sua identidade, seu contexto e suas nuances são esquecidos no instante em que a janela fecha. Selfbrain resolve isso na raiz do problema.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;