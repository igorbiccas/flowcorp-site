import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { InstagramIcon, WhatsAppIcon } from './components/icons';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const [animatedStats, setAnimatedStats] = React.useState({ users: 0, apps: 0, countries: 0 });
  const [hasAnimatedStats, setHasAnimatedStats] = React.useState(false);
  const statsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const statsSection = statsRef.current;

    if (!statsSection || hasAnimatedStats) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimatedStats(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, [hasAnimatedStats]);

  React.useEffect(() => {
    if (!hasAnimatedStats) return;

    const statsTarget = { users: 1000, apps: 3, countries: 30 };
    const duration = 2400;
    const start = performance.now();

    const animateStats = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        users: Math.round(statsTarget.users * easedProgress),
        apps: Math.round(statsTarget.apps * easedProgress),
        countries: Math.round(statsTarget.countries * easedProgress),
      });

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      }
    };

    requestAnimationFrame(animateStats);
  }, [hasAnimatedStats]);

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

      <main className="relative z-10 flex flex-col pt-32 md:pt-48">
        <section className="px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="space-y-10 md:space-y-12" delay="duration-700">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 md:text-6xl">
                  {t.app.hero.title}
                </h1>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-zinc-100 via-zinc-500 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.projectsTitle}</h2>
              </div>
              <div className="grid w-full gap-6">
                {b2bProducts.map((product) => (
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
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 60%)' }}
                    />
                    <div className="space-y-4">
                      <h3 className="text-3xl font-semibold text-white md:text-4xl">{product.title}</h3>
                      <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{product.description}</p>
                    </div>
                    <div className="pt-6 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mt-32 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-zinc-100 via-zinc-500 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.miniAppsTitle}</h2>
              </div>
              <div className="grid w-full gap-4 md:grid-cols-2">
                {miniApps.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || '_blank'}
                    rel="noreferrer"
                    className="group relative block space-y-3 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/65 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-zinc-900"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)' }}
                    />
                    <h3 className="text-lg font-medium text-white">{product.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-300">{product.description}</p>
                    <div className="pt-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>
              <div
                ref={statsRef}
                className="grid grid-cols-3 gap-4 rounded-3xl border border-white/15 bg-zinc-900/75 px-4 py-8 text-center md:gap-6 md:px-8 md:py-10"
              >
                <div className="space-y-2">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-4xl">+{animatedStats.users}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 md:text-xs md:tracking-[0.35em]">{t.app.stats.usersLabel}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-4xl">{animatedStats.apps}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 md:text-xs md:tracking-[0.35em]">{t.app.stats.appsLabel}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-4xl">+{animatedStats.countries}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 md:text-xs md:tracking-[0.35em]">{t.app.stats.countriesLabel}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="contato" className="px-6 py-32 md:px-8 md:py-40">
          <div className="mx-auto w-full max-w-5xl text-center">
            <AnimatedSection className="w-full space-y-6" delay="duration-700">
              <div className="flex flex-wrap items-center justify-center gap-8">
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
