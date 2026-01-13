import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const GaiaPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0d111c] via-[#0a0d17] to-black text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.05),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.03),transparent_32%)] opacity-50"
        aria-hidden="true"
      />
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-28 md:px-8 md:pt-32">
        <AnimatedSection className="space-y-6" delay="duration-700">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-200/80">Product</p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight text-zinc-50 md:text-[44px]">Gaia Link</h1>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
                Gaia Link is a simple app to create a public profile with your links and discover other people on a map.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-6" delay="duration-700">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">How it works</h2>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
             <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                Create your profile, add your links, and optionally appear on the map to be discovered by others.
             </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-6" delay="duration-700">
          <div className="flex flex-col gap-4 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/10 p-8 shadow-xl items-center text-center">
             <a
                href="https://www.instagram.com/flowcorp_"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-600/20 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-[1px] hover:border-indigo-300 hover:bg-indigo-600/30"
              >
                <span>Contact support on Instagram</span>
              </a>
          </div>
        </AnimatedSection>

      </main>

      <footer className="relative z-10 border-t border-zinc-800 bg-[#0a0d17]/80 px-6 py-10 text-center text-sm text-zinc-400 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>© 2025 FlowCorp Construído no Brasil</span>
          <a
            href="/"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            Voltar para a Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GaiaPage;
