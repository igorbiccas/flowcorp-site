import React, { useRef } from 'react';
import type { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AnimatedSection from './components/AnimatedSection';
import { ArrowDownIcon, WrenchIcon, BrainCircuitIcon, AnamneseIcon } from './components/icons';

const products: Product[] = [
  {
    icon: <BrainCircuitIcon />,
    title: 'SelfBrain',
    subtitle: 'Uma IA com memória contínua.',
    description: 'Ela lembra de você. Evolui com você. Cria uma identidade real com o tempo.',
    status: 'Em beta',
    buttonText: 'Saiba mais',
    url: 'https://selfbrain.vercel.app/',
  },
  {
    icon: <AnamneseIcon />,
    title: 'DataDoc',
    subtitle: 'Geração automática de anamnese médica por IA.',
    description: 'Grave uma conversa. A IA entende e gera o relatório.',
    status: 'MVP em desenvolvimento',
    buttonText: 'Ver MVP',
    url: 'https://datadocs.vercel.app/',
  },
];

const App: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
                    Somos um estúdio de IA focado em construir e lançar produtos próprios que resolvem problemas reais com tecnologia de ponta.
                </p>
                <button
                onClick={handleScrollToProducts}
                className="group inline-flex items-center justify-center bg-white text-black font-semibold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
                >
                Conheça nossos produtos <ArrowDownIcon />
                </button>
            </AnimatedSection>
        </section>

        <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
                <AnimatedSection className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tighter leading-tight">
                                "Criamos ferramentas que funcionam."
                            </h2>
                        </div>
                        <div className="md:col-span-3 text-lg md:text-xl text-zinc-400 leading-relaxed space-y-6">
                            <p>
                            A FlowCorp é um estúdio de IA. Construímos e lançamos nossos próprios produtos com tecnologia avançada.
                            </p>
                            <p>
                            Tudo o que desenvolvemos é nosso — feito para resolver algo que só a IA de hoje permite, com velocidade e propósito.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        <section ref={productsRef} id="products" className="py-24 md:py-32 bg-zinc-950">
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

        <section className="py-24 md:py-32">
           <div className="container mx-auto px-6 md:px-8">
              <AnimatedSection className="max-w-3xl mx-auto">
                <div className="border border-zinc-800 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-zinc-900">
                  <div className="bg-zinc-800 border border-zinc-700 p-3 rounded-full flex-shrink-0">
                      <WrenchIcon />
                  </div>
                  <div className="flex-grow">
                      <p className="text-base md:text-lg text-zinc-300">
                          Também desenvolvemos sites simples com IA sob demanda, quando o projeto faz sentido.
                      </p>
                      <p className="text-sm text-zinc-500 mt-2">
                          (Nosso foco são nossos próprios produtos.)
                      </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
        </section>


        <footer className="container mx-auto px-6 md:px-8 py-8 border-t border-zinc-800 text-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-zinc-500">© {new Date().getFullYear()} FlowCorp. Todos os direitos reservados.</p>
                <p className="text-zinc-500">
                    Feito com IA e obsessão por boas ideias.
                </p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;