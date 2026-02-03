
import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { InstagramIcon, WhatsAppIcon } from './components/icons';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

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
        {/* B2B Products Section */}
        <section className="px-6 md:px-8">
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

        {/* Mini Apps Section */}
        <section className="mt-32 px-6 md:px-8">
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
