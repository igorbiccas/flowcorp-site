import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const whatWeDo = [
  {
    title: 'Produtos que escalam',
    description:
      'Criamos aplicações e plataformas que resolvem infraestruturas invisíveis e transformam mercados.',
  },
  {
    title: 'Serviços rápidos e premium',
    description:
      'Entrega expressa de soluções digitais e IA para empresas que querem impacto imediato.',
  },
  {
    title: 'Inovação onde poucos entram',
    description:
      'Atuamos em saúde, educação, governo e tecnologias emergentes — áreas onde o lucro encontra o futuro.',
  },
];

const mainProducts = [
  {
    title: 'SelfBrain',
    description:
      'Memória contínua para IA. Ferramenta que conecta passado, presente e futuro de interações humanas e digitais.',
    href: 'https://selfbrain.vercel.app',
  },
  {
    title: 'DataDoc',
    description:
      'Anamnese automática + inteligência para clínicas e hospitais. Reduza burocracia, aumente eficiência, libere expertise.',
    href: 'https://datadocs.vercel.app',
  },
];

const whyFlowCorp = [
  'Você trabalha direto com o fundador (velocidade máxima).',
  'Entregas em tempo recorde, sem burocracia.',
  'Foco em margens elevadas: investimos em resultado, não em promessas.',
  'Marca orientada para o bilhão — porque cada projeto conta.',
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
                FlowCorp
              </span>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.08] tracking-tight text-slate-50 sm:text-[64px]">Tecnologia inteligente para soluções reais.</h1>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-150">
              <p className="mt-5 max-w-3xl text-lg leading-snug text-slate-200/85 md:text-xl">
                Criamos produtos escaláveis, serviços táticos de alto impacto e atuamos onde o futuro já virou presente.
              </p>
            </AnimatedSection>
            <AnimatedSection className="w-full" delay="duration-700 delay-200">
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]"
                >
                  Vamos conversar
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 pt-12 md:px-8 md:pt-16">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">O que fazemos</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {whatWeDo.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Nossos produtos principais</h2>
                  <p className="mt-4 text-base leading-snug text-slate-300">
                    Ferramentas desenhadas para combinar IA aplicada com operação enxuta.
                  </p>
                </div>
                <div className="grid w-full gap-6 md:grid-cols-2">
                  {mainProducts.map((product) => (
                    <a
                      key={product.title}
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
                    >
                      <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                      <p className="mt-3 text-sm text-white/80">{product.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">Por que escolher a FlowCorp</h2>
              <div className="mt-8 flex flex-col gap-4 text-base text-white/85">
                {whyFlowCorp.map((reason) => (
                  <div key={reason} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    <p className="leading-snug">{reason}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="contato" className="px-6 pb-28 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-12 text-center">
            <AnimatedSection className="w-full" delay="duration-700">
              <h2 className="text-3xl font-semibold text-white">Vamos conversar</h2>
              <p className="mt-4 text-base text-white/80">
                Tem uma ideia? Um problema que parece sem solução? Fale com a FlowCorp. Estamos prontos para construir algo grande, rápido e lucrativo.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/selfbrain_/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20"
                >
                  Instagram
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-10 text-center text-sm text-white/60 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>© 2025 FlowCorp - Construído no Brasil com respeito ao seu tempo e aos seus dados.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
