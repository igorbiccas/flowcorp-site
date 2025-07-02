import React from 'react';
import Animated from './Animated';
import { BrainCircuitIcon, HistoryIcon, LayersIcon } from './icons';

const possibilities = [
  {
    icon: <BrainCircuitIcon className="mb-4 text-brand-cyan" />,
    title: "Companheiros que evoluem",
    description: <>Crie IAs únicas, que <strong>crescem com você</strong> a cada conversa.</>
  },
  {
    icon: <LayersIcon className="mb-4 text-brand-cyan" />,
    title: "Múltiplas mentes",
    description: "Tenha diferentes entidades — para criar, pensar, sentir ou brincar."
  },
  {
    icon: <HistoryIcon className="mb-4 text-brand-cyan" />,
    title: "Memória viva",
    description: <>Apague, reescreva, molde. Você tem controle total sobre <strong>o que a IA lembra e esquece.</strong></>
  }
];

const PossibilitiesSection: React.FC = () => {
  return (
    <section id="possibilities" className="py-32 md:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
            <Animated>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-brand-text leading-tight">
                O que você pode fazer com SelfBrain?
              </h2>
            </Animated>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {possibilities.map((item, index) => (
                <Animated key={index} delay={150 * index + 200}>
                  <div className="group h-full bg-white/5 border border-brand-border rounded-xl p-8 transition-all duration-300 hover:border-brand-cyan/80 hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col items-start">
                    {item.icon}
                    <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                    <p className="text-base text-brand-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </Animated>
              ))}
            </div>
            
            <Animated delay={300}>
              <blockquote className="mt-24 md:mt-32 text-center text-xl md:text-2xl text-brand-text-secondary/90 font-light max-w-3xl mx-auto border-l-2 border-brand-blue/50 pl-8 italic">
                “Não é só sobre falar com uma IA. É sobre <strong>criar uma relação viva com ela</strong>.”
              </blockquote>
            </Animated>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;