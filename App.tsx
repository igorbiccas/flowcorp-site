
import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { InstagramIcon, WhatsAppIcon } from './components/icons';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const heroHighlights = t.app.heroHighlights as Array<{ label: string; value: string }>;
  const heroPillars = t.app.heroPillars as string[];
  const differentials = t.app.differentials as Array<{ title: string; description: string }>;

  const b2bProducts = [
    {
      title: t.app.datadoc.title,
      description: t.app.datadoc.description,
      href: '/datadoc',
      target: '_self',
    },
  ];

  const miniApps = [
    {
      title: t.app.selfbrain.title,
      description: t.app.selfbrain.description,
      href: '/selfbrain',
      target: '_self',
    },
    {
      title: t.app.gaialink.title,
      description: t.app.gaialink.description,
      href: '/gaialink',
      target: '_self',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0f0f12] text-white selection:bg-white/10">
      {/* Subtle Glow Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 50% -20%, rgba(60, 60, 80, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 100% 100%, rgba(40, 40, 60, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, rgba(30, 30, 50, 0.2) 0%, transparent 40%)
          `
        }}
      />

      <Header />

      <main className="relative z-10 flex flex-col pt-32 md:pt-48">
        {/* Hero Section */}
        <section className="px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full" delay="duration-700">
              <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    {t.app.heroBadge}
                  </span>
                  <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                    {t.app.heroTitle}
                  </h1>
                  <p className="text-balance text-base leading-relaxed text-zinc-400 md:text-lg">
                    {t.app.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {heroPillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#solucoes"
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:bg-zinc-200"
                    >
                      {t.app.heroPrimaryCta}
                    </a>
                    <a
                      href="#contato"
                      className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:scale-[1.02] hover:border-white/40"
                    >
                      {t.app.heroSecondaryCta}
                    </a>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-[0_0_80px_-50px_rgba(255,255,255,0.7)]"
                    >
                      <p className="text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* B2B Products Section */}
        <section id="solucoes" className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{t.app.projectsTitle}</h2>
              </div>
              <div className="grid w-full gap-6">
                {b2bProducts.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || "_blank"}
                    rel="noreferrer"
                    className="group relative block space-y-4 rounded-3xl border border-white/5 bg-white/[0.03] p-10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
                  >
                    <div className="space-y-4">
                      <h3 className="text-3xl font-medium text-white md:text-4xl">{product.title}</h3>
                      <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{product.description}</p>
                    </div>
                    <div className="pt-6 text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-10" delay="duration-700">
              <div className="max-w-2xl">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {t.app.differentialsTitle}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {differentials.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6"
                  >
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mini Apps Section */}
        <section id="miniapps" className="mt-32 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{t.app.miniAppsTitle}</h2>
              </div>
              <div className="grid w-full gap-4 md:grid-cols-2">
                {miniApps.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || "_blank"}
                    rel="noreferrer"
                    className="group relative block space-y-3 rounded-2xl border border-white/5 bg-white/[0.04] p-8 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/10"
                  >
                    <h3 className="text-lg font-medium text-white">{product.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{product.description}</p>
                    <div className="pt-4 text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="px-6 py-32 md:py-40 md:px-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <AnimatedSection className="w-full space-y-6" delay="duration-700">
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a
                  href="https://www.instagram.com/flowcorp_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://chat.whatsapp.com/LnN6r20k6IhHWxoRVSdGQO"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition-all duration-300 hover:text-white hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#0f0f12]/80 backdrop-blur-sm px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <span className="text-xs uppercase tracking-widest text-zinc-500">{t.common.footerCopyright}</span>
          <div className="flex gap-8">
            {/* Add secondary links if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
