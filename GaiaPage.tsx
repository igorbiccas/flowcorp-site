
import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { useLanguage } from './contexts/LanguageContext';

const GaiaPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0f0f12] text-white selection:bg-white/10">
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 pb-24 pt-32 md:px-8 md:pt-40">
        <AnimatedSection className="space-y-8" delay="duration-1000">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{t.gaia.productLabel}</p>
            <h1 className="text-4xl font-medium tracking-tighter text-white md:text-6xl">{t.gaia.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              {t.gaia.heroDescription}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-12" delay="duration-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">{t.gaia.howItWorks}</h2>
            <p className="text-lg leading-relaxed text-zinc-400">
              {t.gaia.howItWorksDesc}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-12" delay="duration-700">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white">{t.gaia.readyToStart}</h2>
            <a
              href="https://gaialink.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.gaia.accessButton}
            </a>
            <a
              href="https://www.instagram.com/flowcorp_"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {t.common.contactInstagram}
            </a>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#0f0f12] px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <span className="text-xs uppercase tracking-widest text-zinc-500">{t.common.footerCopyright}</span>
          <a href="/" className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
            {t.common.backHome}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GaiaPage;
