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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2f7] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.08),rgba(248,250,252,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_70%)]" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(226,232,240,0.9),rgba(241,245,249,0))]" />
      </div>

      <Header />

      <main className="relative z-10">
        <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 pb-24 pt-44 text-center md:px-8">
          <AnimatedSection className="w-full">
            <div className="mx-auto max-w-3xl space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 shadow-sm">
                Flow Research Lab
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Inteligência artificial humana, feita no Brasil.
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                Criamos experiências de IA conscientes do contexto e desenhadas para o cotidiano. Produtos minimalistas com tecnologia de ponta e foco em confiança.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.35)] transition hover:bg-slate-800"
                >
                  Explorar produtos
                </a>
                <a
                  href="mailto:hello@flowcorp.ai"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
                >
                  Fale com a equipe
                </a>
              </div>
              <ul className="mx-auto flex max-w-xl flex-col gap-3 text-left text-sm text-slate-600 sm:grid sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                  Modelos proprietários com memória contínua.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                  Design centrado em privacidade e acessibilidade.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                  Infraestrutura auditável e observabilidade em tempo real.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                  Equipe multidisciplinar focada em impacto tangível.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Propósito</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Resolvemos problemas reais com velocidade e cuidado.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Da saúde à educação, desenhamos soluções de IA que se integram ao fluxo de trabalho das pessoas. Nossos produtos nascem de parcerias próximas com especialistas de cada domínio.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="w-full">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Nossos produtos</h2>
                <p className="mt-4 text-base text-slate-600 md:text-lg">
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

        <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-slate-500 md:flex-row md:px-8">
            <p>© {new Date().getFullYear()} Flow corp. Todos os direitos reservados.</p>
            <p className="text-slate-500">Construído com respeito ao tempo das pessoas.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;