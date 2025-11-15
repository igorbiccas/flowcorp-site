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

const stats = [
  {
    label: 'Tempo médio de resposta',
    value: '< 200 ms',
    description: 'Orquestração multimodal otimizada com cache cognitivo.',
  },
  {
    label: 'Aderência a políticas',
    value: '99,7%',
    description: 'Controles granulares de compliance e trilhas de auditoria.',
  },
  {
    label: 'Precisão contextual',
    value: '+42%',
    description: 'Memória contínua proprietária alinhada ao seu domínio.',
  },
];

const highlights = [
  {
    title: 'Arquitetura consciente do contexto',
    description:
      'Camada de memória semântica que mantém detalhes críticos de cada jornada e reduz reiterações.',
  },
  {
    title: 'Governança plugável',
    description:
      'Integração transparente com seus data lakes, rotinas de anonimização e controles de acesso.',
  },
  {
    title: 'Observabilidade em tempo real',
    description:
      'Telemetria viva com painéis que mostram impacto, deriva e oportunidades de automação.',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e293b_0%,_#020617_55%,_#020617_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-24 mx-auto h-96 w-[90%] rounded-[48px] border border-white/5 bg-white/5 bg-[linear-gradient(120deg,rgba(99,102,241,0.08),transparent)] opacity-40 blur-2xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      </div>
      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-24 pt-32 text-left md:px-8 md:pt-44">
          <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-[420px] max-w-[40vw] rounded-3xl border border-white/10 bg-white/5 bg-[linear-gradient(135deg,rgba(165,180,252,0.14),rgba(14,165,233,0.12),rgba(236,72,153,0.1))] opacity-60 blur-2xl sm:block" aria-hidden="true" />
          <div className="mx-auto w-full max-w-[860px]">
            <AnimatedSection className="w-full" delay="duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">
                Nova era
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                FlowCorp AI
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.1] tracking-tight text-slate-50 sm:text-6xl">
                IA com memória contínua para operações que não podem parar.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-4 text-lg leading-[1.5] text-slate-200/80 md:text-xl">
                Combina modelos proprietários e fundacionais para entregar experiências que lembram, entendem e se adaptam ao seu contexto.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://selfbrain.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
                >
                  Abrir SelfBrain
                  <span aria-hidden="true" className="text-base">↗</span>
                </a>
                <a
                  href="https://datadocs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
                >
                  Ver DataDoc
                  <span aria-hidden="true" className="text-base">→</span>
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-300">
              <p className="mt-8 text-sm text-white/60">Memória contínua · Privacidade · Observabilidade</p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-500">
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-md transition-all duration-200 hover:border-white/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-white/5 to-sky-500/0 opacity-0 transition-opacity duration-200 group-hover:opacity-60" aria-hidden="true" />
                    <div className="relative flex flex-col gap-2">
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">{stat.label}</span>
                      <span className="text-3xl font-semibold text-white">{stat.value}</span>
                      <p className="text-sm leading-6 text-white/60">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="why-flowcorp" className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Por que FlowCorp?</h2>
                <p className="mt-4 text-base leading-[1.6] text-slate-300 md:text-lg">
                  Uma plataforma desenhada para equipes que precisam de autonomia, governança e resultados medidos em produção real.
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/10 to-sky-500/0 opacity-0 transition-opacity duration-200 group-hover:opacity-70" aria-hidden="true" />
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/70">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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

        <section id="purpose" className="px-6 pb-24 pt-12 md:px-8 md:pt-20">
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-[-4rem] right-[-4rem] h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true" />
            <AnimatedSection className="relative w-full">
              <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <p className="text-base leading-[1.6] text-slate-200/85">
                    Acreditamos em IA feita com propósito: experiências que ampliam o humano e respeitam cada interação.
                    Nossa tecnologia mantém contexto vivo entre canais, aprende com feedbacks e prioriza segurança desde o design.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm leading-6 text-white/70">
                  <p className="font-semibold uppercase tracking-[0.25em] text-white/50">Framework de confiança</p>
                  <ul className="mt-4 space-y-2">
                    <li>• Controles de segurança auditáveis</li>
                    <li>• Rotas de dados transparentes</li>
                    <li>• Métricas de impacto humano</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 pt-6 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center">
            <AnimatedSection className="w-full" delay="duration-700">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">Pronto para pilotar</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Vamos ativar a próxima versão do seu fluxo?</h3>
              <p className="mt-4 text-base leading-[1.6] text-white/70">
                Conectamos sua base de conhecimento, definimos objetivos medidos e entregamos experiências que aprendem de verdade.
              </p>
            </AnimatedSection>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="mailto:contato@flowcorp.ai"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
              >
                Falar com o time
                <span aria-hidden="true" className="text-base">✶</span>
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
              >
                Explorar produtos
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black/60">
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
