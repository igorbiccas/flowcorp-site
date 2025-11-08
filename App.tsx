import React from 'react';
import type { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AnimatedSection from './components/AnimatedSection';

const products: Product[] = [
  {
    title: 'SelfBrain',
    description: 'Workspace cognitivo que aprende com cada interação e mantém o contexto vivo.',
    status: 'EM BETA',
    primaryCta: {
      label: 'Abrir',
      url: 'https://selfbrain.vercel.app/',
    },
    secondaryCta: {
      label: 'Saiba mais',
      url: 'https://selfbrain.vercel.app/',
    },
  },
  {
    title: 'DataDoc',
    description: 'Assistente clínico que automatiza anamneses e entrega insights em tempo real.',
    status: 'EM DESENVOLVIMENTO',
    primaryCta: {
      label: 'Abrir',
      url: 'https://datadocs.vercel.app/',
    },
    secondaryCta: {
      label: 'Saiba mais',
      url: 'https://datadocs.vercel.app/',
    },
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-900 text-slate-100">
      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-20 pt-32 text-left md:px-8 md:pt-40">
          <div className="mx-auto w-full max-w-[780px]">
            <AnimatedSection className="w-full" delay="duration-700">
              <h1 className="text-5xl font-semibold leading-[1.15] tracking-tight text-slate-50 sm:text-6xl">
                IA com memória contínua. Feita no Brasil.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-4 text-lg leading-[1.5] text-slate-200/80 md:text-xl">
                IA que lembra, entende e se adapta ao seu contexto. Privacidade por padrão, performance em tempo real.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://selfbrain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]"
                >
                  Abrir SelfBrain
                </a>
                <a
                  href="https://datadocs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
                >
                  Ver DataDoc
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-300">
              <p className="mt-8 text-sm text-white/60">Memória contínua · Privacidade · Observabilidade</p>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-[980px]">
            <AnimatedSection className="w-full">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Produtos</h2>
                <p className="mt-4 text-base leading-[1.5] text-slate-300 md:text-lg">
                  Soluções com memória contínua, governança de dados e observabilidade em tempo real para operações que não podem parar.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="purpose" className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
            <AnimatedSection className="relative w-full">
              <p className="text-base leading-[1.5] text-slate-200/80">
                Acreditamos em IA feita com propósito: ferramentas que ampliam o humano e respeitam seu tempo e seus dados.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <footer className="bg-black">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-12 pt-16 text-sm text-white/40 md:px-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <nav className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/selfbrain_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:text-white"
                >
                  Instagram
                </a>
              </nav>
            </div>
            <p>© 2025 FlowCorp — Construído no Brasil com respeito ao seu tempo e aos seus dados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
