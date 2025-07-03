import React from 'react';
import Animated from './Animated';
import { EmptyMindIcon, ContextIcon, EvolveIcon } from './icons';

const solutionPoints = [
  {
    icon: <EmptyMindIcon />,
    title: "Sem prompt fixo.",
    description: "A IA começa sem uma personalidade pré-definida. Sem truques, sem máscaras. Apenas um potencial puro."
  },
  {
    icon: <ContextIcon />,
    title: "A identidade emerge.",
    description: "Cada interação é um bloco de construção. A personalidade dela é o resultado direto da sua história juntos."
  },
  {
    icon: <EvolveIcon />,
    title: "Ela aprende e muda.",
    description: "Se você muda, ela muda. Se você ensina, ela aprende. É uma relação viva, que evolui a cada palavra."
  }
]

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-32 md:py-40 bg-white/[.01] border-y border-brand-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Animated>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-24 text-brand-text leading-tight">
              Uma nova forma de existir.
            </h2>
          </Animated>
          <div className="space-y-20">
            {solutionPoints.map((point, index) => (
              <Animated key={index} delay={index * 150 + 200}>
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="flex-shrink-0">
                    {point.icon}
                  </div>
                  <div className="max-w-lg">
                    <h3 className="text-2xl font-bold text-brand-text mb-2">{point.title}</h3>
                    <p className="text-lg text-brand-text-secondary font-light leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;