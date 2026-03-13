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
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-zinc-900/40 via-zinc-950/10 to-zinc-950" />

      <Header />

      <main className="relative z-10 flex flex-col pt-28 md:pt-36">
        <section id="home" className="px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="space-y-8 md:space-y-10" delay="duration-700">
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-5xl">
                  {t.app.hero.title}
                </h1>
                <p className="mx-auto max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
                  {t.app.hero.subtitle}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="sobre" className="mt-20 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full rounded-2xl border border-white/10 bg-zinc-900/30 p-7 md:p-10" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <p className="text-lg leading-relaxed text-zinc-200 md:text-xl">{t.app.about.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="capacidades" className="mt-20 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-8" delay="duration-700">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.capabilitiesTitle}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {capabilities.map((capability) => (
                  <article
                    key={capability.title}
                    className="rounded-2xl border border-white/10 bg-zinc-900/35 p-6"
                  >
                    <h3 className="text-lg font-medium text-zinc-50">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{capability.description}</p>
                  </article>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="produtos" className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-8" delay="duration-700">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.productsTitle}</h2>
              </div>
              <div className="grid w-full gap-6">
                {products.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || '_blank'}
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/40 p-8 transition-colors duration-300 hover:border-white/30"
                  >
                    <div className="relative space-y-4">
                      <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">
                        {product.tag}
                      </span>
                      <h3 className="text-2xl font-semibold text-white md:text-3xl">{product.title}</h3>
                      <p className="max-w-xl text-base leading-relaxed text-zinc-300">{product.description}</p>
                    </div>
                    <div className="pt-5 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900/30 p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.labsTitle}</h3>
                <div className="grid w-full gap-4 md:grid-cols-2">
                  {labs.map((lab) => (
                    <a
                      key={lab.title}
                      href={lab.href}
                      target={(lab as any).target || '_blank'}
                      rel="noreferrer"
                      className="group relative block space-y-3 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/35 p-5 transition-colors duration-300 hover:border-white/30"
                    >
                      <h3 className="text-base font-medium text-white">{lab.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-400">{lab.description}</p>
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

        <section id="contato" className="px-6 py-24 md:px-8 md:py-28">
          <div className="mx-auto w-full max-w-5xl text-center">
            <AnimatedSection className="w-full space-y-6 rounded-2xl border border-white/10 bg-zinc-900/30 px-6 py-10" delay="duration-700">
              <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">{t.app.contactCta.title}</h2>
              <p className="mx-auto max-w-xl text-zinc-400">{t.app.contactCta.description}</p>
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
