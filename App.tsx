import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { InstagramIcon, WhatsAppIcon } from './components/icons';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: t.app.capabilities.automation.title,
      description: t.app.capabilities.automation.description,
    },
    {
      title: t.app.capabilities.documents.title,
      description: t.app.capabilities.documents.description,
    },
    {
      title: t.app.capabilities.intelligentSystems.title,
      description: t.app.capabilities.intelligentSystems.description,
    },
  ];

  const products = [
    {
      title: t.app.datadoc.title,
      description: t.app.datadoc.description,
      href: '/datadoc',
      target: '_self',
      tag: t.app.productTags.platform,
    },
  ];

  const labs = [
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
    <div className="relative min-h-screen bg-[#09090b] text-white selection:bg-white/10">
      <div className="openai-grid pointer-events-none fixed inset-0 z-0 opacity-20" />
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 22% 0%, rgba(255,255,255,0.12) 0%, transparent 38%),
            radial-gradient(circle at 85% 5%, rgba(255,255,255,0.08) 0%, transparent 42%),
            radial-gradient(circle at 50% 115%, rgba(255,255,255,0.08) 0%, transparent 50%),
            linear-gradient(180deg, rgba(24,24,27,0.55) 0%, rgba(9,9,11,0.95) 65%)
          `,
        }}
      />

      <Header />

      <main className="relative z-10 flex flex-col pt-32 md:pt-44">
        <section id="home" className="px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="space-y-10 md:space-y-12" delay="duration-700">
              <div className="mx-auto max-w-4xl space-y-8 text-center">
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-6xl">
                  {t.app.hero.title}
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 md:text-xl">
                  {t.app.hero.subtitle}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#contato"
                    className="rounded-xl border border-white/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-900 transition-all hover:bg-zinc-200"
                  >
                    {t.app.hero.contactButton}
                  </a>
                  <a
                    href="#capacidades"
                    className="rounded-xl border border-white/20 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-200 transition-all hover:border-white/40 hover:text-white"
                  >
                    {t.app.hero.secondaryButton}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="sobre" className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-12" delay="duration-700">
              <div className="max-w-3xl space-y-6">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.about.title}</h2>
                <p className="text-xl leading-relaxed text-zinc-100 md:text-2xl">{t.app.about.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="capacidades" className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-zinc-100 via-zinc-500 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.capabilitiesTitle}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {capabilities.map((capability) => (
                  <article
                    key={capability.title}
                    className="rounded-2xl border border-white/10 bg-zinc-900/55 p-7 transition-all duration-300 hover:border-white/25"
                  >
                    <h3 className="text-lg font-medium text-zinc-50">{capability.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300">{capability.description}</p>
                  </article>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="produtos" className="mt-28 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-zinc-100 via-zinc-500 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.productsTitle}</h2>
              </div>
              <div className="grid w-full gap-6">
                {products.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || '_blank'}
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/70 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-zinc-900"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-80 transition duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          'radial-gradient(circle at 12% 18%, rgba(56,189,248,0.22) 0%, transparent 42%), radial-gradient(circle at 88% 22%, rgba(236,72,153,0.2) 0%, transparent 38%), radial-gradient(circle at 50% 100%, rgba(168,85,247,0.24) 0%, transparent 46%)',
                      }}
                    />
                    <div className="relative space-y-4">
                      <span className="inline-flex rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
                        {product.tag}
                      </span>
                      <h3 className="text-3xl font-semibold text-white md:text-4xl">{product.title}</h3>
                      <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{product.description}</p>
                    </div>
                    <div className="pt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-7">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.labsTitle}</h3>
                <div className="grid w-full gap-4 md:grid-cols-2">
                  {labs.map((lab) => (
                    <a
                      key={lab.title}
                      href={lab.href}
                      target={(lab as any).target || '_blank'}
                      rel="noreferrer"
                      className="group relative block space-y-3 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-zinc-900"
                    >
                      <h3 className="text-base font-medium text-white">{lab.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-300">{lab.description}</p>
                      <div className="pt-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                        {t.app.explore}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="contato" className="px-6 py-28 md:px-8 md:py-36">
          <div className="mx-auto w-full max-w-5xl text-center">
            <AnimatedSection className="w-full space-y-8 rounded-3xl border border-white/10 bg-zinc-900/40 px-6 py-12" delay="duration-700">
              <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">{t.app.contactCta.title}</h2>
              <p className="mx-auto max-w-2xl text-zinc-300">{t.app.contactCta.description}</p>
              <a
                href="https://chat.whatsapp.com/LnN6r20k6IhHWxoRVSdGQO"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl border border-white/20 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-900 transition-all hover:bg-zinc-200"
              >
                {t.app.contactCta.button}
              </a>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-2">
                <a
                  href="https://www.instagram.com/flowcorp_"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://chat.whatsapp.com/LnN6r20k6IhHWxoRVSdGQO"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#09090b]/90 px-6 py-12 backdrop-blur-md md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <span className="text-xs uppercase tracking-widest text-zinc-500">{t.common.footerCopyright}</span>
          <div className="flex gap-8" />
        </div>
      </footer>
    </div>
  );
};

export default App;
