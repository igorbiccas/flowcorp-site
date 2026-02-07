
import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { AnamneseIcon, SparklesIcon, ArrowRightIcon } from './components/icons';
import { translations } from './translations';

const DataDocPage: React.FC = () => {
    // Force Portuguese language for this page
    const t = translations.pt;

    React.useEffect(() => {
        document.title = 'DataDoc | Inteligência Clínica - FlowCorp';
    }, []);

    return (
        <div className="relative min-h-screen bg-[#020203] text-zinc-100 selection:bg-sky-500/30 overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute top-[-10%] left-[20%] w-[60%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full opacity-50" />
                <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full opacity-30" />
            </div>

            <Header showLanguageSelector={false} />

            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-32 pt-40 md:px-12 md:pt-56">
                {/* Hero Section */}
                <AnimatedSection className="max-w-4xl mx-auto text-center mb-32" delay="duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        {t.datadoc.clinicalIntelligence}
                    </div>

                    <h1 className="text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 leading-[1.1]">
                        {t.datadoc.heroTitle}
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed md:text-xl font-light">
                        {t.datadoc.heroDescription}
                    </p>
                </AnimatedSection>

                {/* How It Works */}
                <AnimatedSection className="mb-40" delay="duration-700">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            {t.datadoc.howItWorks.title}
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {t.datadoc.howItWorks.steps.map((step, index) => (
                            <div
                                key={step.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] p-10 transition-all duration-500 hover:bg-white/[0.03] hover:border-white/10"
                            >
                                <div className="mb-8">
                                    {index === 0 ? <AnamneseIcon /> : <SparklesIcon />}
                                </div>
                                <div className="text-sky-400 text-sm font-medium uppercase tracking-[0.2em] mb-3">
                                    {step.title}
                                </div>
                                <p className="text-zinc-400 leading-relaxed text-lg font-light">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-center text-lg text-zinc-400 font-light">
                        {t.datadoc.howItWorks.note}
                    </p>
                </AnimatedSection>

                {/* Why Use */}
                <AnimatedSection className="mb-32" delay="duration-700">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            {t.datadoc.why.title}
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {t.datadoc.why.items.map((item) => (
                            <div key={item.title} className="rounded-3xl border border-white/5 bg-white/[0.01] p-8">
                                <div className="text-xl font-medium text-white mb-3">{item.title}</div>
                                <p className="text-zinc-400 text-lg font-light leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Try It */}
                <AnimatedSection className="mb-32" delay="duration-700">
                    <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-10 py-16 text-center md:px-16">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl leading-tight mb-6">
                            {t.datadoc.trial.title}
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                            {t.datadoc.trial.description}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Audience */}
                <AnimatedSection className="mb-40" delay="duration-700">
                    <div className="text-center">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl leading-tight mb-6">
                            {t.datadoc.audience.title}
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                            {t.datadoc.audience.description}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Pricing Section */}
                <AnimatedSection className="mb-40" delay="duration-700">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            {t.datadoc.pricing.title}
                        </h2>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-14">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                            <div className="flex flex-col items-center text-center">
                                <div className="text-4xl font-light text-white md:text-5xl">
                                    {t.datadoc.pricing.price}
                                </div>
                                <div className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                                    {t.datadoc.pricing.includesTitle}
                                </div>
                                <ul className="mt-6 space-y-3 text-lg font-light text-zinc-300">
                                    {t.datadoc.pricing.includesItems.map((item) => (
                                        <li key={item} className="flex items-center justify-center gap-3">
                                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm font-light text-zinc-500">
                                    {t.datadoc.pricing.note}
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] px-8 py-24 text-center md:py-32" delay="duration-700">
                    {/* Interior glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

                    <div className="relative z-10 mx-auto max-w-3xl space-y-12">
                        <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl leading-[1.1]">
                            {t.datadoc.cta.title}
                        </h2>
                        <p className="text-lg text-zinc-400 md:text-xl font-light max-w-xl mx-auto">
                            {t.datadoc.cta.description}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="group/button relative inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                            >
                                {t.datadoc.cta.primaryButton}
                                <ArrowRightIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/flowcorp_"
                                target="_blank"
                                rel="noreferrer"
                                className="group/button relative inline-flex h-16 items-center justify-center rounded-full border border-white/20 px-12 text-lg font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
                            >
                                {t.datadoc.cta.secondaryButton}
                            </a>
                        </div>
                    </div>

                    {/* Radial gradient overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_50%)]" />
                </AnimatedSection>
            </main>

            <footer className="relative z-10 border-t border-white/5 bg-[#020203] px-6 py-16 md:px-12">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                        {t.common.footerCopyright}
                    </div>

                    <a href="/" className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 transition-colors hover:text-white">
                        <span className="transition-transform duration-300 group-hover:-translate-x-2">←</span>
                        {t.common.backHome}
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default DataDocPage;
