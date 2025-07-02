import React from 'react';

const possibilities = [
  {
    title: "Companheiros de IA Evolutivos",
    description: "Crie IAs que realmente aprendem e evoluem com você ao longo de conversas contínuas, desenvolvendo uma personalidade e compreensão únicas."
  },
  {
    title: "Personas Digitais Dinâmicas",
    description: "Desenvolva múltiplas 'mentes' ou personas para diferentes tarefas ou interações, cada uma com sua própria identidade emergente e coerente."
  },
  {
    title: "Interfaces de Próxima Geração",
    description: "Projete sistemas que não apenas respondem a comandos, mas que mantêm uma presença digital contínua, redefinindo a interação humano-computador."
  }
];

const PossibilitiesSection: React.FC = () => {
  return (
    <section id="possibilities" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-brand-text leading-tight">
              O que é <span className="gradient-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">possível</span> com SelfBrain?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {possibilities.map((item, index) => (
                <div key={index} className="group bg-brand-background border border-brand-border rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-2xl hover:shadow-brand-blue/10">
                  <div className="h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"></div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                    <p className="text-base text-brand-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <blockquote className="mt-24 md:mt-32 text-center text-xl md:text-2xl text-brand-text-secondary/80 font-light max-w-3xl mx-auto border-l-2 border-brand-blue/50 pl-8 italic">
              “Você não programa a memória. Você a cultiva.”
            </blockquote>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;