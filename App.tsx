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

    const statsTarget = { users: 1200, apps: 3, countries: 30 };
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

      <main className="relative z-10 flex flex-col pt-32 md:pt-44">
        <section className="px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-900/70 p-8 md:p-12" delay="duration-700">
              <div
                className="pointer-events-none absolute -left-10 -top-12 h-52 w-52 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)' }}
              />
              <div
                className="pointer-events-none absolute -bottom-14 right-0 h-52 w-52 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)' }}
              />

              <div className="relative space-y-8">
                <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-100">
                  {t.app.enterprisePill}
                </span>

                <div className="max-w-3xl space-y-4">
                  <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-zinc-50 md:text-6xl">
                    {t.app.hero.title}
                  </h1>
                  <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{t.app.hero.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contato"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-transform hover:-translate-y-0.5"
                  >
                    {t.app.hero.ctaPrimary}
                  </a>
                  <a
                    href="#solucoes"
                    className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {t.app.hero.ctaSecondary}
                  </a>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {t.app.heroHighlights.map((item: string) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="mt-12 px-6 md:px-8">
          <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {t.app.trust.metrics.map((metric: { value: string; label: string }) => (
              <AnimatedSection key={metric.label} className="rounded-2xl border border-white/15 bg-zinc-900/60 p-6" delay="duration-700">
                <div className="text-3xl font-semibold tracking-tight text-cyan-200">{metric.value}</div>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">{metric.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mt-12 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/15 bg-zinc-900/55 p-8 md:p-10">
            <AnimatedSection className="space-y-6" delay="duration-700">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">{t.app.process.title}</h2>
                <p className="text-sm text-zinc-400 md:text-base">{t.app.process.subtitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {t.app.process.steps.map((step: { title: string; description: string }, index: number) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">0{index + 1}</div>
                    <h3 className="mt-2 text-lg font-medium text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="solucoes" className="mt-24 px-6 md:px-8">
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
                className="mx-auto grid w-full max-w-xl grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-zinc-900/55 px-3 py-5 text-center md:max-w-2xl md:gap-4 md:px-5 md:py-6"
              >
                <div className="space-y-1">
                  <div className="text-lg font-medium tracking-tight text-zinc-100 md:text-2xl">{animatedStats.apps}</div>
                  <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 md:text-[10px] md:tracking-[0.25em]">{t.app.stats.appsLabel}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-medium tracking-tight text-zinc-100 md:text-2xl">+{animatedStats.users}</div>
                  <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 md:text-[10px] md:tracking-[0.25em]">{t.app.stats.usersLabel}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-medium tracking-tight text-zinc-100 md:text-2xl">+{animatedStats.countries}</div>
                  <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-500 md:text-[10px] md:tracking-[0.25em]">{t.app.stats.countriesLabel}</div>
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
