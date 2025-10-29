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
    subtitle: 'Coleta pré-consulta com linguagem natural.',
    description:
      'Integra informações clínicas em um só lugar, gera relatórios estruturados e reduz etapas repetitivas para equipes de saúde.',
    status: 'Em desenvolvimento',
    buttonText: 'Ver',
    url: 'https://datadocs.vercel.app/',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-200">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,244,245,0.08),rgba(39,39,42,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(161,161,170,0.18),transparent_70%)]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),rgba(39,39,42,0))]" />
      </div>

      <Header />

      <main className="relative z-10">
        <section className="container mx-auto flex min-h-[90vh] flex-col justify-center px-6 pb-24 pt-40 md:px-8">
          <AnimatedSection className="w-full">
            <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="space-y-8 text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
                  Flow Research Lab
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
                  IA aplicada, transparente e feita para gente real.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                  Desenvolvemos sistemas inteligentes que entendem o contexto do seu negócio e entregam respostas confiáveis. Infraestrutura proprietária, estética precisa e ciclos curtos de experimentação.
                </p>
                <div className="flex flex-col items-start gap-3 text-sm text-zinc-300/90 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Modelos privados com memória contínua.
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
                    Observabilidade em tempo real e governança.
                  </div>
                </div>
                <a
                  href="#products"
                  className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-[0_25px_60px_-30px_rgba(250,250,250,0.6)] transition hover:border-white hover:bg-zinc-100"
                >
                  Explorar produtos
                </a>
              </div>
              <div className="relative h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-[0_60px_120px_-80px_rgba(250,250,250,0.65)]">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(244,244,245,0.12),transparent_65%)]" aria-hidden="true" />
                <div className="relative space-y-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Playbooks</p>
                  <h2 className="text-2xl font-semibold text-zinc-100">Metodologia proprietária</h2>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Combina discovery acelerado, laboratório de dados e entrega contínua. Cada produto nasce de ciclos de validação com parceiros estratégicos.
                  </p>
                  <div className="grid gap-4 text-sm text-zinc-300">
                    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/70 px-4 py-3">
                      <p className="font-medium text-zinc-200">Discovery orientado a impacto</p>
                      <p className="text-xs text-zinc-500">Diagnósticos rápidos com stakeholders e dados reais.</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/70 px-4 py-3">
                      <p className="font-medium text-zinc-200">Ciclos semanais de shipping</p>
                      <p className="text-xs text-zinc-500">Lançamentos contínuos com métricas de confiabilidade.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="mx-auto grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">Propósito</p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                  Resolvemos problemas reais com velocidade e cuidado.
                </h2>
                <p className="text-lg leading-relaxed text-zinc-400 md:text-xl">
                  Aliamos pesquisa aplicada e engenharia para colocar IA nas mãos de quem precisa. Sem hipérboles, apenas entregas que melhoram processos e liberam tempo para decisões críticas.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-6">
                  <p className="text-base font-semibold text-zinc-100">Experimentos orientados por dados</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Cada iteração parte de dados proprietários com trilha de auditoria. Observamos o ciclo completo: ingestão, processamento e entrega.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-6">
                  <p className="text-base font-semibold text-zinc-100">Design operacional</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    Interfaces claras que priorizam clareza e automação discreta. Usuários enxergam o que importa, sem ruído.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="w-full">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">Nossos produtos</h2>
                <p className="mt-4 text-base text-zinc-400 md:text-lg">
                  Cada iniciativa é construída em diálogo com clientes estratégicos para garantir segurança, qualidade de dados e experiências fluidas.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <footer className="border-t border-zinc-800/80 bg-zinc-950/80">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-500 md:flex-row md:px-8">
            <p>© {new Date().getFullYear()} Flow corp. Todos os direitos reservados.</p>
            <p className="text-zinc-500">Construído com respeito ao tempo das pessoas.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;