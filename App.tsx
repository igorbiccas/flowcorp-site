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
    subtitle: 'Assistente cognitivo com memória contínua.',
    description:
      'Plataforma modular para equipes criarem fluxos de IA persistentes com governança de dados de ponta a ponta.',
    status: 'Em beta',
    buttonText: 'Ver',
    url: 'https://selfbrain.vercel.app/',
  },
  {
    icon: <AnamneseIcon />,
    title: 'DataDoc',
    subtitle: 'Anamneses clínicas sem fricção.',
    description:
      'Coleta pré-consulta com linguagem natural, integrando prontuários e garantindo consistência para profissionais de saúde.',
    status: 'Em desenvolvimento',
    buttonText: 'Ver',
    url: 'https://datadocs.vercel.app/',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-900 text-slate-100">

      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center justify-center px-[5%] pb-32 pt-32 text-center">
          <div className="mx-auto w-full max-w-[680px] space-y-12">
            <AnimatedSection className="w-full" delay="duration-700">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                Inteligência Artificial humana.
                <br />
                Feita no Brasil.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                Criamos IAs conscientes do contexto, feitas para o cotidiano. Design minimalista, tecnologia de ponta e foco em confiança.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <a
                  href="#products"
                  className="group inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 px-10 py-4 text-sm font-semibold text-white shadow-[0_25px_60px_-25px_rgba(56,189,248,0.45)] transition-all duration-300 hover:shadow-[0_25px_80px_-25px_rgba(56,189,248,0.65)] sm:w-auto"
                >
                  Explorar produtos
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-300">
              <ul className="mx-auto flex flex-col gap-6 text-left text-sm text-slate-300 sm:grid sm:grid-cols-2">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl" aria-hidden="true">🧠</span>
                  Modelos proprietários com memória contínua.
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl" aria-hidden="true">🔒</span>
                  Design centrado em privacidade e acessibilidade.
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl" aria-hidden="true">⚙️</span>
                  Infraestrutura auditável e observabilidade em tempo real.
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 text-xl" aria-hidden="true">🤝</span>
                  Equipe multidisciplinar focada em impacto tangível.
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </section>

        <section id="purpose" className="py-28 md:py-36">
          <div className="mx-auto w-full max-w-4xl px-[5%] text-center">
            <AnimatedSection className="w-full">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Propósito</p>
              <h2 className="mt-10 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Resolvemos problemas reais com velocidade e cuidado.
              </h2>
              <p className="mt-10 text-lg leading-relaxed text-slate-300 md:text-xl">
                Da saúde à educação, desenhamos soluções de IA que se integram ao fluxo de trabalho das pessoas. Nossos produtos nascem de parcerias próximas com especialistas de cada domínio.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-32 md:py-40">
          <div className="mx-auto w-full max-w-5xl px-[5%]">
            <AnimatedSection className="w-full">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Nossos produtos</h2>
                <p className="mt-8 text-base text-slate-300 md:text-lg">
                  Cada iniciativa é construída em diálogo com clientes estratégicos para garantir segurança, qualidade de dados e experiências fluidas.
                </p>
              </div>
              <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-12 text-sm text-slate-300 md:flex-row md:px-8">
            <p>© {new Date().getFullYear()} Flow corp. Todos os direitos reservados.</p>
            <p className="text-slate-400">Construído com respeito ao tempo das pessoas.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;