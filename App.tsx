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
      'Plataforma modular para criar agentes e fluxos persistentes com governança de dados fim a fim.',
    status: 'EM BETA',
    buttonText: 'Abrir SelfBrain',
    url: 'https://selfbrain.vercel.app/',
  },
  {
    icon: <AnamneseIcon />,
    title: 'DataDoc',
    subtitle: 'Anamneses clínicas sem fricção.',
    description:
      'Coleta pré-consulta por linguagem natural, integra prontuários e entrega resumos consistentes para profissionais de saúde.',
    status: 'EM DESENVOLVIMENTO',
    buttonText: 'Ver demo do DataDoc',
    url: 'https://datadocs.vercel.app/',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-900 text-slate-100">

      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center justify-center px-[5%] pb-24 pt-28 text-center">
          <div className="mx-auto w-full max-w-[720px] space-y-10">
            <AnimatedSection className="w-full" delay="duration-700">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                IA com memória contínua.
                <br />
                Feita no Brasil.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                IAs conscientes do contexto para o dia a dia. Minimalista, confiável e sob seu controle.
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
              <ul className="mx-auto grid grid-cols-1 gap-8 text-left text-sm text-slate-300 sm:max-w-none sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/15 text-sky-200/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v3" />
                      <path d="M12 18v3" />
                      <path d="M4.93 4.93 7.05 7.05" />
                      <path d="M16.95 16.95 19.07 19.07" />
                      <path d="M3 12h3" />
                      <path d="M18 12h3" />
                      <path d="M4.93 19.07 7.05 16.95" />
                      <path d="M16.95 7.05 19.07 4.93" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </span>
                  <span>Memória contínua proprietária, plugável aos principais modelos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/15 text-sky-200/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21c4-2 7-5.6 7-10.1V5.3L12 3 5 5.3v5.6C5 15.4 8 19 12 21Z" />
                      <path d="M9 11.5 11 13.5 15 9.5" />
                    </svg>
                  </span>
                  <span>Privacidade por padrão e acessibilidade real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/15 text-sky-200/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.57 0 1.12.22 1.51.61.39.39.61.94.61 1.51a1.65 1.65 0 0 0-1.51 1Z" />
                    </svg>
                  </span>
                  <span>Infraestrutura auditável com observabilidade em tempo real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/15 text-sky-200/60">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 18h6" />
                      <path d="m8 6 4-4 4 4" />
                      <path d="M12 2v14" />
                      <path d="M5 22h14" />
                    </svg>
                  </span>
                  <span>Experiência contínua do briefing à operação em produção.</span>
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
                Entregar valor real com velocidade e cuidado.
              </h2>
              <p className="mt-10 text-lg leading-relaxed text-slate-300 md:text-xl">
                Da saúde à educação, integramos IA ao fluxo de trabalho das pessoas em parceria com especialistas.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-32 md:py-40">
          <div className="mx-auto w-full max-w-5xl px-[5%]">
            <AnimatedSection className="w-full">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Produtos</h2>
                <p className="mt-6 text-base text-slate-300 md:text-lg">
                  Construídos junto de clientes estratégicos para garantir segurança, qualidade de dados e experiência fluida.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
          <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-6 py-12 text-center text-sm text-slate-300 md:px-8">
            <p>© 2025 FlowCorp. Construído no Brasil com respeito ao seu tempo e aos seus dados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;