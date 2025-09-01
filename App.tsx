import React from 'react';
import type { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AnimatedSection from './components/AnimatedSection';
import { SparklesIcon, AnamneseIcon } from './components/icons';

const products: Product[] = [
  {
    icon: <SparklesIcon />,
    title: 'SelfBrain',
    subtitle: 'Uma IA com memória contínua.',
    description: 'Uma IA que lembra, evolui e cria uma identidade com você.',
    status: 'Em beta',
    buttonText: 'Saiba mais',
    url: 'https://selfbrain.vercel.app/',
  },
  {
    icon: <AnamneseIcon />,
    title: 'DataDoc',
    subtitle: 'Geração automática de anamnese médica por IA.',
    description: 'Grave uma conversa e a IA gera o relatório médico.',
    status: 'MVP em desenvolvimento',
    buttonText: 'Ver MVP',
    url: '#',
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300">
      <Header />
      
      <main>
        <section className="container mx-auto px-6 md:px-8 min-h-screen flex flex-col justify-center items-center text-center py-20 relative">
           <AnimatedSection className="w-full">
                <h1 className="text-5xl md:text-6xl font-semibold text-zinc-100 mb-6 tracking-tight">
                    Inteligência Artificial com Propósito.
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 mb-10">
                    Estúdio de IA que constrói e lança produtos próprios com tecnologia de ponta.
                </p>
            </AnimatedSection>
        </section>

        <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
                <AnimatedSection className="max-w-3xl mx-auto text-center">
                    <div className="text-lg md:text-xl text-zinc-400 leading-relaxed space-y-6">
                        <p>
                        A FlowCorp é um estúdio de IA que constrói e lança produtos próprios com tecnologia avançada.
                        </p>
                        <p>
                        Nossos produtos resolvem problemas reais, impulsionados pela IA moderna com velocidade e propósito.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        <section id="products" className="py-24 md:py-32 bg-zinc-950">
            <div className="container mx-auto px-6 md:px-8">
                <AnimatedSection className="w-full">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-zinc-100 mb-12 tracking-tight">
                        Nossos Produtos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((product) => (
                        <ProductCard key={product.title} product={product} />
                    ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>

        <footer className="container mx-auto px-6 md:px-8 py-8 border-t border-zinc-800 text-sm mt-24">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-zinc-500">© {new Date().getFullYear()} FlowCorp. Todos os direitos reservados.</p>
                <p className="text-zinc-500">
                    Feito com IA e boas ideias.
                </p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;