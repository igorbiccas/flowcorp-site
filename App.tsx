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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),rgba(2,6,23,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.16),transparent_70%)]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.22),rgba(15,23,42,0))]" />
      </div>

      <Header />

      <main className="relative z-10">
        <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 pb-28 pt-48 text-center md:px-8">
          <AnimatedSection className="w-full">
            <div className="mx-auto max-w-3xl space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 shadow-[0_18px_48px_-30px_rgba(59,130,246,0.45)]">
                Flow Research Lab
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                Inteligência artificial humana, feita no Brasil.
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                Criamos experiências de IA conscientes do contexto e desenhadas para o cotidiano. Produtos minimalistas com tecnologia de ponta e foco em confiança.
              </p>
              <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-blue-500/60 bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_30px_70px_-35px_rgba(59,130,246,0.75)] transition hover:bg-blue-400/90"
                >
                  Explorar produtos
                </a>
                <a
                  href="mailto:hello@flowcorp.ai"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Fale com a equipe
                </a>
              </div>
              <ul className="mx-auto flex max-w-xl flex-col gap-4 text-left text-sm text-slate-300 sm:grid sm:grid-cols-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  Modelos proprietários com memória contínua.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  Design centrado em privacidade e acessibilidade.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  Infraestrutura auditável e observabilidade em tempo real.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  Equipe multidisciplinar focada em impacto tangível.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </section>

        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Propósito</p>
              <h2 className="mt-8 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Resolvemos problemas reais com velocidade e cuidado.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-300 md:text-xl">
                Da saúde à educação, desenhamos soluções de IA que se integram ao fluxo de trabalho das pessoas. Nossos produtos nascem de parcerias próximas com especialistas de cada domínio.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="w-full">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Nossos produtos</h2>
                <p className="mt-6 text-base text-slate-300 md:text-lg">
                  Cada iniciativa é construída em diálogo com clientes estratégicos para garantir segurança, qualidade de dados e experiências fluidas.
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

        <footer className="border-t border-white/10 bg-black/20 backdrop-blur">
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