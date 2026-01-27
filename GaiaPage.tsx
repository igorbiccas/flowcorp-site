import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const GaiaPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0f0f12] text-white selection:bg-white/10">
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 pb-24 pt-32 md:px-8 md:pt-40">
        <AnimatedSection className="space-y-8" delay="duration-1000">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Product</p>
            <h1 className="text-4xl font-medium tracking-tighter text-white md:text-6xl">Gaia Link</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Gaia Link is a simple app to create a public profile with your links and discover other people on a map.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-12" delay="duration-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">How it works</h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              Create your profile, add your links, and optionally appear on the map to be discovered by others.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-12" delay="duration-700">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white">Pronto para começar?</h2>
            <a
              href="https://gaialink.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Acessar Gaia Link
            </a>
            <a
              href="https://www.instagram.com/flowcorp_"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Contact support on Instagram
            </a>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#0f0f12] px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <span className="text-xs uppercase tracking-widest text-zinc-500">© 2025 FlowCorp</span>
          <a href="/" className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
            Voltar para a Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GaiaPage;
