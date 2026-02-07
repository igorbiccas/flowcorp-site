
import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { AnamneseIcon, SparklesIcon, InsightIcon, ArrowRightIcon } from './components/icons';
import { translations } from './translations';

const DataDocPage: React.FC = () => {
    // Force Portuguese language for this page
    const t = translations.pt;

    React.useEffect(() => {
        document.title = 'DataDoc | Inteligência Clínica - FlowCorp';
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#020203] text-zinc-100 selection:bg-sky-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[160px] opacity-70" />
                <div className="absolute bottom-[-10%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[160px] opacity-50" />
                <div className="absolute left-[8%] top-[35%] h-[20rem] w-[20rem] rounded-full bg-emerald-400/10 blur-[140px] opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)]" />
            </div>

            <Header showLanguageSelector={false} />

            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-32 pt-36 md:px-12 md:pt-52">
                {/* Hero Section */}
                <AnimatedSection className="mb-32 grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]" delay="duration-1000">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
                            </span>
                            {t.datadoc.clinicalIntelligence}
                        </div>

                        <h1 className="mt-8 text-5xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
                            {t.datadoc.heroTitle}
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-300 md:text-xl">
                            {t.datadoc.heroDescription}
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
                            >
                                {t.datadoc.cta.primaryButton}
                                <ArrowRightIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/flowcorp_"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-10 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                            >
                                {t.datadoc.cta.secondaryButton}
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-purple-500/20 blur-2xl" />
                        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                            <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                                    FlowCorp DataDoc
                                </div>
                                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                                    Premium
                                </div>
                            </div>
                            <div className="mt-6 space-y-6">
                                {t.datadoc.howItWorks.steps.map((step, index) => (
                                    <div
                                        key={step.title}
                                        className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1">
                                                {index === 0 ? <AnamneseIcon /> : index === 1 ? <InsightIcon /> : <SparklesIcon />}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                                                    {step.title}
                                                </div>
                                                <p className="mt-2 text-sm font-light text-zinc-300">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-300">
                                {t.datadoc.howItWorks.note}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* How It Works */}
                <AnimatedSection className="mb-40" delay="duration-700">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                            {t.datadoc.howItWorks.title}
                        </span>
                        <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            Inteligência clínica com fluidez operacional
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {t.datadoc.howItWorks.steps.map((step, index) => (
                            <div key={step.title} className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
                                <div className="flex items-center justify-between">
                                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                                        {step.title}
                                    </div>
                                    <div className="text-xs font-semibold text-zinc-500">0{index + 1}</div>
                                </div>
                                <div className="mt-6">
                                    {index === 0 ? <AnamneseIcon /> : index === 1 ? <InsightIcon /> : <SparklesIcon />}
                                </div>
                                <p className="mt-6 text-lg font-light leading-relaxed text-zinc-300">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <p className="max-w-3xl text-center text-lg font-light text-zinc-400">
                            {t.datadoc.howItWorks.note}
                        </p>
                    </div>
                </AnimatedSection>

                {/* Why Use */}
                <AnimatedSection className="mb-32" delay="duration-700">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                            {t.datadoc.why.title}
                        </span>
                        <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            Diferencial premium para clínicas exigentes
                        </h2>
                    </div>

                    <div className="mt-16 grid gap-8 lg:grid-cols-3">
                        {t.datadoc.why.items.map((item, index) => (
                            <div
                                key={item.title}
                                className={`rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 ${
                                    index === 0 ? 'lg:col-span-2' : ''
                                }`}
                            >
                                <div className="text-xl font-medium text-white mb-3">{item.title}</div>
                                <p className="text-lg font-light leading-relaxed text-zinc-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Try It */}
                <AnimatedSection className="mb-32" delay="duration-700">
                    <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-10 py-16 text-center md:px-16">
                        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                            Premium experience
                        </div>
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
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
                                {t.datadoc.audience.title}
                            </div>
                            <h2 className="mt-4 text-3xl font-light tracking-tight text-white md:text-4xl leading-tight">
                                Para equipes que querem precisão, tempo e confiança
                            </h2>
                            <p className="mt-6 text-lg font-light leading-relaxed text-zinc-300">
                                {t.datadoc.audience.description}
                            </p>
                        </div>
                        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
                            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                                Experiência sob medida
                            </div>
                            <div className="mt-6 space-y-4 text-sm font-light text-zinc-300">
                                {t.datadoc.pricing.includesItems.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Pricing Section */}
                <AnimatedSection className="mb-40" delay="duration-700">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl leading-tight">
                            {t.datadoc.pricing.title}
                        </h2>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/[0.02] p-10 md:p-14">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
                            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                                <div>
                                    <div className="text-4xl font-light text-white md:text-5xl">
                                        {t.datadoc.pricing.price}
                                    </div>
                                    <p className="mt-4 text-lg font-light text-zinc-300">
                                        {t.datadoc.pricing.note}
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                                        {t.datadoc.pricing.includesTitle}
                                    </div>
                                    <ul className="mt-6 space-y-3 text-sm font-light text-zinc-300">
                                        {t.datadoc.pricing.includesItems.map((item) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] px-8 py-24 text-center md:py-32" delay="duration-700">
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
                                className="group/button relative inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition-all duration-300 hover:translate-y-[-2px] active:scale-[0.98] shadow-[0_20px_60px_rgba(255,255,255,0.18)]"
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
