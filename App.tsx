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
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20" />
      </div>

      <Header />

      <main className="relative z-10">
        <section className="container mx-auto grid min-h-[90vh] items-center gap-20 px-6 pb-32 pt-40 md:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] md:px-8">
          <AnimatedSection className="space-y-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-neutral-300">
              Flowcorp • IA com intenção
            </div>
            <div className="space-y-8">
              <h1 className="text-[clamp(2.75rem,5vw,3.75rem)] font-medium leading-tight text-neutral-100">
                Inteligência artificial para pessoas que pensam longe.
              </h1>
              <p className="max-w-xl text-base leading-7 text-neutral-400">
                Projetamos produtos de IA que equilibram tecnologia proprietária com delicadeza de experiência. Cada interação é pensada para respeitar contextos, garantir confiança e criar impacto real.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-3 rounded-full bg-[#f5f1e6] px-6 py-3 text-sm font-medium text-[#050505] transition hover:bg-[#f0ead9]"
              >
                Explorar produtos
              </a>
              <a
                href="mailto:contato@flowcorp.ai"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-neutral-100 transition hover:border-white/30"
              >
                Falar com a equipe
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Processos</p>
                <p className="text-lg font-medium text-neutral-100">
                  Ritualizamos descobertas junto aos especialistas de cada setor para transformar conhecimento tácito em fluxos inteligentes.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Resultados</p>
                <p className="text-lg font-medium text-neutral-100">
                  Plataformas enxutas, auditáveis e preparadas para crescer com governança de dados transparente.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section id="manifesto" className="py-28 md:py-36">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="grid gap-16 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] md:items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">Propósito</p>
                <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight text-neutral-50">
                  Resolvemos problemas reais com ritmo e cuidado extremo.
                </h2>
                <p className="text-base leading-7 text-neutral-400">
                  Da saúde à educação, desenhamos soluções de IA que se integram aos fluxos de trabalho existentes. Construímos ao lado de equipes que conhecem profundamente seus desafios e precisam de parceiros confiáveis.
                </p>
              </div>
              <div className="space-y-6 border-l border-white/10 pl-8">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Tempo médio</p>
                  <p className="text-lg font-medium text-neutral-100">6 semanas para o primeiro piloto validado</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Especialistas</p>
                  <p className="text-lg font-medium text-neutral-100">Rede de parceiros médicos, jurídicos e educacionais</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Governança</p>
                  <p className="text-lg font-medium text-neutral-100">Auditoria contínua e métricas compartilháveis por fluxo</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="products" className="py-32 md:py-40">
          <div className="container mx-auto px-6 md:px-8">
            <AnimatedSection className="space-y-16">
              <div className="grid gap-10 md:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] md:items-end">
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">Nossos produtos</p>
                  <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight text-neutral-50">
                    Camadas de inteligência feitas para ampliar equipes humanas.
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-neutral-400">
                    Cada iniciativa nasce de co-criação com clientes estratégicos para garantir segurança, qualidade de dados e jornadas fluídas do primeiro contato à operação contínua.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-medium text-neutral-200">
                    Manifestamos rigor técnico com sensibilidade de design. Os produtos abaixo estão em evolução contínua junto às equipes que os utilizam diariamente.
                  </p>
                  <p className="text-sm text-neutral-500">
                    Consulte-nos para pilotos direcionados, integrações customizadas e gestão de mudanças centrada em pessoas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {products.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <footer id="contato" className="border-t border-white/10 bg-transparent">
          <div className="container mx-auto grid gap-6 px-6 py-12 text-sm text-neutral-400 md:grid-cols-[1fr_auto_auto] md:items-center md:px-8">
            <p className="text-neutral-500">© {new Date().getFullYear()} Flow corp. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
              <a href="#" className="transition hover:text-neutral-200">
                Política
              </a>
              <a
                href="https://www.linkedin.com/company/flowcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-neutral-200"
              >
                LinkedIn
              </a>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-neutral-200">
              <span>Flowcorp</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-neutral-400" aria-hidden="true" />
              <span>{new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
