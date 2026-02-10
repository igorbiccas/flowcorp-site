
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
    <div className="relative min-h-screen bg-[#07070a] text-white selection:bg-white/10">
      {/* Premium Glow Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 20% -10%, rgba(94, 234, 212, 0.35) 0%, transparent 45%),
            radial-gradient(circle at 90% 10%, rgba(232, 121, 249, 0.35) 0%, transparent 40%),
            radial-gradient(circle at 50% 120%, rgba(59, 130, 246, 0.25) 0%, transparent 55%),
            radial-gradient(circle at 10% 90%, rgba(251, 191, 36, 0.18) 0%, transparent 45%)
          `
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)' }} />

      <Header />

      <main className="relative z-10 flex flex-col pt-32 md:pt-48">
        {/* B2B Products Section */}
        <section className="mt-24 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-cyan-400/80 via-purple-400/70 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.projectsTitle}</h2>
              </div>
              <div className="grid w-full gap-6">
                {b2bProducts.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || "_blank"}
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-30px_rgba(94,234,212,0.6)]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(94,234,212,0.18) 0%, rgba(232,121,249,0.08) 35%, rgba(59,130,246,0.12) 70%, rgba(255,255,255,0) 100%)' }} />
                    <div className="pointer-events-none absolute -right-20 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl transition duration-300 group-hover:opacity-80" />
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

        {/* Mini Apps Section */}
        <section className="mt-32 px-6 md:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <AnimatedSection className="w-full space-y-12" delay="duration-700">
              <div className="max-w-2xl space-y-4">
                <div className="h-px w-20 bg-gradient-to-r from-purple-400/80 via-blue-400/70 to-transparent" />
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">{t.app.miniAppsTitle}</h2>
              </div>
              <div className="grid w-full gap-4 md:grid-cols-2">
                {miniApps.map((product) => (
                  <a
                    key={product.title}
                    href={product.href}
                    target={(product as any).target || "_blank"}
                    rel="noreferrer"
                    className="group relative block space-y-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] hover:shadow-[0_18px_50px_-28px_rgba(232,121,249,0.6)]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(232,121,249,0.15) 0%, rgba(59,130,246,0.1) 50%, rgba(255,255,255,0) 100%)' }} />
                    <h3 className="text-lg font-medium text-white">{product.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-300">{product.description}</p>
                    <div className="pt-4 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:text-white">
                      {t.app.explore}
                    </div>
                  </a>
                ))}
              </div>
              <div ref={statsRef} className="grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-8 text-center shadow-[0_20px_60px_-40px_rgba(59,130,246,0.4)] md:gap-6 md:px-8 md:py-10">
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

      <footer className="relative z-10 border-t border-white/5 bg-[#0b0b10]/90 backdrop-blur-md px-6 py-12 md:px-8">
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
