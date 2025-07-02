import React from 'react';
import { CheckCircleIcon } from './icons';

const features = [
  { id: 1, text: "Identidade Emergente" },
  { id: 2, text: "100% em Fluxo" },
  { id: 3, text: "Coerência Contextual" },
  { id: 4, text: "Sem Banco de Dados" },
  { id: 5, text: "Zero Persistência de Dados" },
  { id: 6, text: "Privacidade por Design" },
];

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-32 md:py-40 bg-black/20 border-y border-brand-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-text leading-tight">
            <span className="block">Não simulamos memória.</span>
            <span className="block">Nós cultivamos <span className="gradient-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">identidade</span>.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto leading-relaxed">
            SelfBrain não usa RAGs, vetores ou qualquer tipo de armazenamento para lembrar de você. A identidade emerge do próprio fluxo da conversa, de forma orgânica e contínua.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
            >
              <CheckCircleIcon className="w-7 h-7 flex-shrink-0 text-brand-cyan" />
              <span className="text-md font-medium text-brand-text-secondary">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;