import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const whatWeDo = [
  {
    title: 'SaaS de IA prontos para uso',
    description: 'Produtos desenhados para crescer junto com o cliente e gerar valor desde o primeiro dia.',
  },
  {
    title: 'Soluções customizadas de alta velocidade',
    description: 'Construção rápida de software e IA sob medida, com acesso direto à liderança técnica.',
  },
  {
    title: 'Inovação em setores críticos',
    description: 'Saúde, governo, educação e operações que exigem precisão e impacto real.',
  },
];

const mainProducts = [
  {
    title: 'SelfBrain',
    description: 'IA com memória contínua. Experiências personalizadas que evoluem conforme o uso.',
    href: 'https://selfbrain.vercel.app',
  },
  {
    title: 'DataDoc',
    description: 'Anamnese automática e inteligência clínica. Minutos viram documentação completa.',
    href: 'https://datadocs.vercel.app',
  },
];

const whyFlowCorp = [
  'Execução rápida e orientada a resultado.',
  'Entrega em cadência de sprint, sempre com foco em margem e eficiência.',
  'Modelos aplicados no mundo real, não protótipos.',
  'Governança simples, comunicação direta e decisões rápidas.',
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18)_0%,_rgba(2,6,23,0.8)_55%,_#020617_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.06),rgba(168,85,247,0.06),rgba(34,197,94,0.04))]" aria-hidden="true" />
        <div className="absolute inset-x-0 top-14 mx-auto h-[560px] w-[94%] rounded-[48px] border border-white/5 bg-white/5 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.18),rgba(15,23,42,0))] opacity-80 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-16 right-[-5rem] h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.08),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(74,222,128,0.08),transparent_30%)] opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" aria-hidden="true" />
      </div>
      <Header />

      <main className="relative z-10 flex flex-col gap-24 md:gap-28">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-32 pt-32 text-left md:px-8 md:pt-40">
          <div className="pointer-events-none absolute inset-y-16 right-6 hidden w-[440px] max-w-[40vw] rounded-3xl border border-white/10 bg-white/10 bg-[linear-gradient(135deg,rgba(165,180,252,0.12),rgba(34,197,94,0.1),rgba(14,165,233,0.14))] opacity-80 blur-2xl sm:block" aria-hidden="true" />
          <div className="mx-auto w-full max-w-[960px]">
            <AnimatedSection className="w-full space-y-6" delay="duration-700">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-200/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Tecnologia que entrega agora
              </div>
              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-[64px]">
                IA aplicada para resultados imediatos.
              </h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-2 max-w-3xl text-lg leading-snug text-slate-200/90 md:text-xl">
                Tecnologia direta, rápida e criada para escalar com alto contraste, legibilidade e uma estética noturna mais sofisticada.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(34,197,94,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Falar com a FlowCorp
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Entrega com liderança técnica
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-24 pt-16 md:px-8 md:pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full space-y-10" delay="duration-700">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">O que fazemos</h2>
                <p className="max-w-xl text-sm uppercase tracking-[0.22em] text-slate-400">Produtos e squads prontos para escalar</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {whatWeDo.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/10 p-6 shadow-[0_25px_120px_-45px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400/50"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                    <div className="relative space-y-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-lg font-semibold text-emerald-300 ring-1 ring-white/10">
                        ✦
                      </div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-base leading-relaxed text-white/80 md:text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl space-y-4">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Nossos produtos</h2>
                  <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                    SaaS prontos para gerar valor desde o primeiro dia.
                  </p>
                </div>
                <div className="grid w-full gap-6 md:grid-cols-2">
                  {mainProducts.map((product) => (
                    <a
                      key={product.title}
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/10 p-6 shadow-[0_25px_120px_-45px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/60"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_38%)] opacity-0 transition-opacity duration-300 hover:opacity-100" aria-hidden="true" />
                      <div className="relative space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                          • Disponível agora
                        </div>
                        <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                        <p className="text-base leading-relaxed text-white/80 md:text-lg">{product.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Por que escolher a FlowCorp</h2>
              <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_120px_-50px_rgba(0,0,0,0.9)]">
                {whyFlowCorp.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/40 px-4 py-3 text-base text-white/85 transition-colors duration-200 hover:border-emerald-300/40 hover:bg-slate-900/60"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" aria-hidden="true" />
                    <p className="leading-snug">{reason}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-4" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Nossa visão</h2>
              <p className="text-base leading-relaxed text-white/85 md:text-lg">
                Ser a empresa de IA mais eficiente do Brasil, capaz de transformar qualquer processo em escala.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Eficiência</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Precisão</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Entrega contínua</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="contato" className="px-6 pb-32 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/10 px-8 py-12 text-center shadow-[0_20px_100px_-50px_rgba(0,0,0,0.9)]">
            <AnimatedSection className="w-full space-y-6" delay="duration-700">
              <h2 className="text-3xl font-semibold text-white">Entre em contato</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Vamos construir juntos experiências de IA com foco em impacto imediato.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/selfbrain_/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_-18px_rgba(34,197,94,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Instagram
                </a>
                <a
                  href="mailto:contato@flowcorp.ai"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/10"
                >
                  contato@flowcorp.ai
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-10 text-center text-sm text-white/60 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>© 2025 FlowCorp Construído no Brasil</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
