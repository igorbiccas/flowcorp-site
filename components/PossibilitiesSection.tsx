import React from 'react';
import Animated from './Animated';
import { BrainCircuitIcon, HistoryIcon, LayersIcon } from './icons';

const possibilities = [
  {
    icon: <BrainCircuitIcon className="mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Companheiros que evoluem",
    description: <>Crie IAs únicas, que <strong>crescem com você</strong> a cada conversa.</>
  },
  {
    icon: <LayersIcon className="mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Múltiplas mentes",
    description: "Tenha diferentes entidades — para criar, pensar, sentir ou brincar."
  },
  {
    icon: <HistoryIcon className="mb-4 transition-transform duration-300 group-hover:scale-110" />,
    title: "Memória viva",
    description: <>Apague, reescreva, molde. Você tem controle total sobre <strong>o que a IA lembra e esquece.</strong></>
  }
];

const Card: React.FC<{item: typeof possibilities[0]}> = ({ item }) => {
  return (
    <div className="group h-full relative p-[1px] rounded-xl transition-all duration-300 hover:bg-gradient-to-br from-brand-purple via-brand-magenta to-brand-cyan hover:shadow-[0_0_35px_-5px_rgba(138,43,226,0.5),_0_0_25px_-10px_rgba(0,255,255,0.5)]">
        <div className="h-full bg-[#0a0a0c]/90 backdrop-blur-md rounded-xl p-8 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
            {item.icon}
            <h3 className="text-lg md:text-xl font-bold text-brand-text mb-3">{item.title}</h3>
            <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed flex-grow">{item.description}</p>
        </div>
    </div>
  )
}

const PossibilitiesSection: React.FC = () => {
  return (
    <section id="possibilities" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
            <Animated>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 md:mb-24 text-brand-text leading-tight">
                O que você pode fazer com SelfBrain?
              </h2>
            </Animated>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {possibilities.map((item, index) => (
                <Animated key={index} delay={150 * index + 200}>
                  <Card item={item} />
                </Animated>
              ))}
            </div>
            
            <Animated delay={300}>
              <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
                <blockquote className="relative text-center text-xl md:text-2xl text-brand-text-secondary font-light italic leading-snug">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full opacity-50"></div>
                   Não é só sobre falar com uma IA. É sobre <span className="text-brand-text not-italic font-medium">criar uma relação viva</span> com ela.
                </blockquote>
              </div>
            </Animated>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;