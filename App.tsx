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
    label: 'Tempo médio',
    value: '< 200 ms',
    description: 'Respostas em tempo real com malha cognitiva.',
  },
  {
    label: 'Confiabilidade',
    value: '99,7%',
    description: 'Camadas de governança auditáveis.',
  },
  {
    label: 'Ganho contextual',
    value: '+42%',
    description: 'Memória proprietária viva.',
  },
];

const highlights = [
  {
    title: 'Arquitetura consciente',
    description: 'Contexto persistente entre canais.',
    accent: 'bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent',
  },
  {
    title: 'Governança plugável',
    description: 'Dados seguros, uso rastreável.',
    accent: 'bg-gradient-to-br from-sky-500/20 via-transparent to-transparent',
  },
  {
    title: 'Observabilidade viva',
    description: 'Painéis em tempo real.',
    accent: 'bg-gradient-to-br from-fuchsia-500/20 via-transparent to-transparent',
  },
];

const brandPillars = [
  { title: 'IA desenhada no Brasil', detail: 'Equipe multidisciplinar e hubs locais.' },
  { title: 'Privacidade nativa', detail: 'Compliance contínua e SOC-ready.' },
  { title: 'Delivery acelerado', detail: 'Sprints em semanas, não meses.' },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e293b_0%,_#020617_55%,_#020617_100%)] text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-24 mx-auto h-[520px] w-[92%] rounded-[48px] border border-white/10 bg-white/5 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),rgba(15,23,42,0))] opacity-60 blur-2xl" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(94,234,212,0.05)_0%,rgba(236,72,153,0.05)_55%,rgba(14,165,233,0.08)_100%)] opacity-70" aria-hidden="true" />
      </div>
      <Header />

      <main className="relative z-10 flex flex-col">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-24 pt-32 text-left md:px-8 md:pt-40">
          <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-[420px] max-w-[38vw] rounded-3xl border border-white/10 bg-white/10 bg-[linear-gradient(135deg,rgba(165,180,252,0.14),rgba(14,165,233,0.12),rgba(236,72,153,0.18))] opacity-70 blur-2xl sm:block" aria-hidden="true" />
          <div className="mx-auto w-full max-w-[960px]">
            <AnimatedSection className="w-full" delay="duration-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200">
                Brasil primeiro
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                FlowCorp AI
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-[64px]">
                A principal empresa de IA do Brasil.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-5 max-w-2xl text-lg leading-snug text-slate-200/85 md:text-xl">
                Infraestrutura cognitiva própria, fabricada para fluxos críticos e pronta para dominar seus dados em escala nacional.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="mt-10 grid w-full gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 text-xl">🇧🇷</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/50">Hub nacional</p>
                    <p className="mt-1 text-base font-semibold text-white">Times em São Paulo, Recife e Florianópolis.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left backdrop-blur-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-200 hover:opacity-70" aria-hidden="true" />
                      <div className="relative">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/50">{stat.label}</span>
                        <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs text-white/60">{stat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-250">
              <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.4em] text-white/40">
                <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">Memória contínua</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Modelos proprietários</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Observabilidade</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="why-flowcorp" className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Por que FlowCorp?</h2>
                  <p className="mt-4 text-base leading-snug text-slate-300">
                    Plataforma modular, visual e escalável para colocar IA em produção com confiança.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                    <span className="rounded-full border border-white/10 px-3 py-1">GenAI</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">LLMOps</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Data Trust</span>
                  </div>
                </div>
                <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-white/30 ${highlight.accent}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/15 to-white/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                      <div className="relative">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">{highlight.title}</p>
                        <h3 className="mt-5 text-2xl font-semibold text-white">{highlight.description}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-[980px]">
            <AnimatedSection className="w-full">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Produtos</h2>
                <p className="mt-4 text-base leading-snug text-slate-300 md:text-lg">
                  Soluções proprietárias que conectam dados, pessoas e resultados visíveis.
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
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[42px] border border-white/10 bg-black/40 p-10">
            <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-0 right-[-6rem] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />
            <AnimatedSection className="relative w-full">
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    Framework Flow
                  </span>
                  <h3 className="text-3xl font-semibold text-white md:text-[34px]">Construa experiências de IA com estética, segurança e escala.</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {brandPillars.map((pillar) => (
                      <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">{pillar.title}</p>
                        <p className="mt-3 text-sm font-medium text-white/80">{pillar.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative flex min-h-[280px] items-center justify-center">
                  <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent" aria-hidden="true" />
                  <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-slate-900/40 to-sky-500/10 p-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">Canvas Operacional</p>
                    <p className="text-2xl font-semibold text-white">Telemetry, memórias e automações em um único painel.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 pt-6 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center">
            <AnimatedSection className="w-full" delay="duration-700">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">Pronto para pilotar</p>
              <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Ative seu ecossistema de IA com FlowCorp.</h3>
            </AnimatedSection>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
            >
              Explorar produtos
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
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
