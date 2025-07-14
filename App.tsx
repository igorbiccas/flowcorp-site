import React, { useRef } from 'react';
import type { Product } from './types';
import ProductCard from './components/ProductCard';
import AnimatedSection from './components/AnimatedSection';
import { ArrowDownIcon, WrenchIcon, BrainCircuitIcon, AnamneseIcon, XIcon, InstagramIcon } from './components/icons';

// Product data
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


// Main App Component
const App: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  const handleScrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-300">
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>

      <main className="container mx-auto px-6 md:px-8">
        
        <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 relative">
           <AnimatedSection className="w-full">
                <h1 className="text-5xl md:text-7xl font-black text-neutral-100 mb-4 tracking-tighter">
                FlowCorp
                </h1>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-300 mb-6">
                Criamos o que só é possível com a IA de hoje.
                </p>
                <p className="max-w-2xl mx-auto text-lg text-neutral-400 mb-10">
                Produtos próprios. Com velocidade, propósito e tecnologia real.
                </p>
                <button
                onClick={handleScrollToProducts}
                className="group bg-white text-neutral-950 font-semibold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950"
                >
                Conheça nossos apps <ArrowDownIcon />
                </button>
            </AnimatedSection>
        </section>

        <div className="space-y-24 md:space-y-32">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-6 tracking-tight">
                    Um estúdio de IA, não uma agência.
                </h2>
                <div className="space-y-4 text-lg md:text-xl text-neutral-400 leading-relaxed">
                    <p>
                    A FlowCorp é um estúdio que constrói e lança produtos com IA avançada.
                    </p>
                    <p>
                    Não fazemos promessas. Criamos ferramentas que funcionam.
                    </p>
                    <p>
                    Tudo o que desenvolvemos é nosso — feito para resolver algo que só a IA de hoje permite.
                    </p>
                </div>
            </AnimatedSection>

            <section ref={productsRef}>
                <AnimatedSection className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={product.title} product={product} />
                    ))}
                    </div>
                </AnimatedSection>
            </section>

            <AnimatedSection className="max-w-3xl mx-auto text-center border-t border-neutral-800 pt-16">
                <p className="text-base text-neutral-400 flex items-center justify-center">
                    <WrenchIcon />
                    Também desenvolvemos sites simples com IA sob demanda, quando o projeto faz sentido.
                </p>
                <p className="text-sm text-neutral-600 mt-4">
                    (Esse é só um extra. Nosso foco são nossos próprios produtos.)
                </p>
            </AnimatedSection>
        </div>

        <footer className="text-center py-16 mt-24 md:mt-32 border-t border-neutral-800 text-neutral-500 text-sm">
            <p>© {new Date().getFullYear()} FlowCorp</p>
            <div className="flex justify-center items-center gap-6 my-4">
                <a href="https://x.com/SelfBrain_" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no X" className="text-neutral-500 transition-colors hover:text-neutral-300">
                    <XIcon />
                </a>
                <a href="https://www.instagram.com/selfbrain_/" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram" className="text-neutral-500 transition-colors hover:text-neutral-300">
                    <InstagramIcon />
                </a>
            </div>
            <p className="text-neutral-600">
                Feito com IA e obsessão por boas ideias.
            </p>
        </footer>
      </main>
    </div>
  );
};

export default App;