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
    href: '/selfbrain',
    target: '_self',
  },
  {
    title: 'DataDoc',
    description: 'Anamnese automática e inteligência clínica. Minutos viram documentação completa.',
    href: 'https://datadocs.vercel.app',
  },
  {
    title: 'Gaia Link',
    description: 'Gaia Link is a simple app to create a public profile with your links and discover other people on a map.',
    href: '/gaialink',
    target: '_self',
  },
];



const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0d111c] via-[#0a0d17] to-black text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.05),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.03),transparent_32%)] opacity-50"
        aria-hidden="true"
      />
      <Header />

      <main className="relative z-10 flex flex-col gap-24 md:gap-28">
        <section className="relative flex min-h-[calc(100vh-6rem)] w-full items-center px-6 pb-32 pt-32 text-left md:px-8 md:pt-40">
          <div className="mx-auto w-full max-w-[960px]">
            <AnimatedSection className="w-full space-y-4" delay="duration-700">
              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-[64px]">IA aplicada para resultados imediatos.</h1>
            </AnimatedSection>

          </div>
        </section>

        <section className="px-6 pb-24 pt-16 md:px-8 md:pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <AnimatedSection className="w-full space-y-10" delay="duration-700">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">O que fazemos</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {whatWeDo.map((item) => (
                  <div key={item.title} className="space-y-3 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                    <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
                    <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{item.description}</p>
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
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">Nossos produtos</h2>
                  <p className="text-base leading-relaxed text-zinc-300 md:text-lg">SaaS prontos para gerar valor desde o primeiro dia.</p>
                </div>
                <div className="grid w-full gap-6 md:grid-cols-2">
                  {mainProducts.map((product) => (
                    <a
                      key={product.title}
                      href={product.href}
                      target={(product as any).target || "_blank"}
                      rel="noreferrer"
                      className="space-y-3 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900"
                    >
                      <h3 className="text-lg font-semibold text-zinc-50">{product.title}</h3>
                      <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{product.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>





        <section id="contato" className="px-6 pb-32 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-3xl border border-zinc-800 bg-zinc-900/60 px-8 py-12 text-center">
            <AnimatedSection className="w-full space-y-6" delay="duration-700">
              <h2 className="text-3xl font-semibold text-zinc-50">Entre em contato</h2>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/flowcorp_"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-800"
                >
                  Instagram
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 bg-[#0a0d17]/80 px-6 py-10 text-center text-sm text-zinc-400 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>© 2025 FlowCorp Construído no Brasil</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
