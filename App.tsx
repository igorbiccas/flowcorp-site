import React from 'react';
import type { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AnimatedSection from './components/AnimatedSection';

const products: Product[] = [
  {
    title: 'SelfBrain',
    description:
      'Workspace cognitivo que aprende com cada interação e mantém o contexto vivo para heavy users de IA. Pensado para quem conversa muito com IA e não quer perder memória nem insight.',
    status: 'EM BETA',
    primaryCta: {
      label: '[ Abrir ]',
      url: 'https://selfbrain.vercel.app/',
    },
    secondaryCta: {
      label: '[ Saiba mais ]',
      url: 'https://selfbrain.vercel.app/',
    },
  },
  {
    title: 'DataDoc',
    description:
      'Assistente clínico que automatiza anamneses a partir de áudio e gera texto estruturado para o prontuário. Focado em reduzir tempo de digitação e padronizar informações importantes.',
    status: 'EM DESENVOLVIMENTO',
    primaryCta: {
      label: '[ Em breve ]',
      url: '#',
    },
    secondaryCta: {
      label: '[ Saiba mais ]',
      url: '#',
    },
  },
];

const pillars = [
  'Foco em produto, não em buzzword',
  'Menos promessa, mais entrega',
  'Ciclos curtos de teste e aprendizado',
];

const focusAreas = [
  {
    title: 'Memória contínua',
    description: 'Experiências de IA que lembram do histórico e evoluem com o usuário.',
  },
  {
    title: 'Aplicações em saúde',
    description: 'Ferramentas para apoiar profissionais, ganhar tempo e reduzir trabalho manual.',
  },
  {
    title: 'Observabilidade simples',
    description: 'Acompanhamos uso e resultado de forma pragmática, sem complicar a operação.',
  },
];

const buildPrinciples = [
  {
    title: 'IA desenhada no Brasil',
    detail: 'Visão de longo prazo em IA aplicada e produtos próprios.',
  },
  {
    title: 'Privacidade pragmática',
    detail: 'Menos coleta desnecessária, mais foco no que realmente precisa ser salvo.',
  },
  {
    title: 'Entrega acelerada',
    detail: 'Sprints em semanas. Versão simples primeiro, refinamento depois.',
  },
  {
    title: 'Canvas operacional',
    detail: 'Nossa visão é ter memórias, fluxos e automações em um único painel para cada produto.',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e293b_0%,_#020617_55%,_#020617_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-24 mx-auto h-[520px] w-[92%] rounded-[48px] border border-white/10 bg-white/5 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),rgba(15,23,42,0))] opacity-60 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(120deg,rgba(94,234,212,0.05)_0%,rgba(236,72,153,0.05)_55%,rgba(14,165,233,0.08)_100%)] opacity-70"
          aria-hidden="true"
        />
      </div>
      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-24 pt-32 text-left md:px-8 md:pt-40">
          <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-[420px] max-w-[38vw] rounded-3xl border border-white/10 bg-white/10 bg-[linear-gradient(135deg,rgba(165,180,252,0.14),rgba(14,165,233,0.12),rgba(236,72,153,0.18))] opacity-70 blur-2xl sm:block" aria-hidden="true" />
          <div className="mx-auto w-full max-w-[960px]">
            <AnimatedSection className="w-full" delay="duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200">
                FLOW CORP
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Brasil primeiro
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-[64px]">FlowCorp AI</h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-5 max-w-2xl text-lg leading-snug text-slate-200/85 md:text-xl">
                Estúdio independente de IA criado no Brasil. Produtos focados em saúde e memória digital para gerar resultado rápido no mundo real.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="mt-10 grid w-full gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-xl">🇧🇷</div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">Do Brasil para o Brasil</p>
                    <p className="mt-1 text-base font-semibold text-white">IA feita aqui, pensando em dados, pessoas e negócios brasileiros.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Por que FlowCorp?</h2>
                  <p className="mt-4 text-base leading-snug text-slate-300">
                    Plataforma enxuta para colocar IA em produção com o mínimo de fricção.
                  </p>
                  <div className="mt-8 flex flex-col gap-2 text-sm text-white/80">
                    {pillars.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span aria-hidden="true">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="sm:col-span-3">
                    <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white/60">O que fazemos hoje</h3>
                  </div>
                  {focusAreas.map((area) => (
                    <div key={area.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                      <p className="mt-3 text-sm text-white/70">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="produtos" className="px-6 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full text-center" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Produtos</h2>
            </AnimatedSection>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {products.map((product) => (
                <AnimatedSection key={product.title} delay="duration-700">
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Como construímos</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {buildPrinciples.map((principle) => (
                  <div key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                    <p className="mt-3 text-sm text-white/70">{principle.detail}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-28 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold text-white">Pronto para pilotar</h2>
              <p className="mt-4 text-base text-white/80">
                Quer testar SelfBrain ou acompanhar o desenvolvimento do DataDoc com a FlowCorp.
              </p>
              <div className="mt-8">
                <a
                  href="#produtos"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]"
                >
                  [ Explorar produtos ↗ ]
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-10 text-center text-sm text-white/60 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>Instagram</span>
          <span>© 2025 FlowCorp - Construído no Brasil com respeito ao seu tempo e aos seus dados.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
