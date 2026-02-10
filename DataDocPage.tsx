import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { ArrowRightIcon } from './components/icons';
import { translations } from './translations';

const DataDocPage: React.FC = () => {
    const t = translations.pt;

    React.useEffect(() => {
        document.title = 'DataDoc | Inteligência Clínica - FlowCorp';
    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white/20">
            <Header showLanguageSelector={false} />

            <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-28 md:px-10 md:pt-36">
                <AnimatedSection className="border-b border-zinc-800 pb-16" delay="duration-700">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                        {t.datadoc.clinicalIntelligence}
                    </span>

                    <h1 className="mt-4 text-4xl font-medium leading-tight text-white md:text-6xl">
                        {t.datadoc.heroTitle}
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-300">
                        {t.datadoc.heroDescription}
                    </p>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://datadocs.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                        >
                            Conhecer DataDoc
                            <ArrowRightIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/flowcorp_"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900"
                        >
                            Falar com especialistas
                        </a>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">{t.datadoc.howItWorks.title}</h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {t.datadoc.howItWorks.steps.map((step, index) => (
                            <div key={step.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                                <div className="text-sm font-semibold text-zinc-400">0{index + 1}</div>
                                <h3 className="mt-4 text-lg font-medium text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">{t.datadoc.howItWorks.note}</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">{t.datadoc.why.title}</h2>

                    <div className="mt-10 space-y-4">
                        {t.datadoc.why.items.map((item) => (
                            <div key={item.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">{t.datadoc.pricing.title}</h2>

                    <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
                        <div className="text-3xl font-semibold text-white">{t.datadoc.pricing.price}</div>
                        <p className="mt-2 text-zinc-300">{t.datadoc.pricing.note}</p>

                        <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-400">
                            {t.datadoc.pricing.includesTitle}
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                            {t.datadoc.pricing.includesItems.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="py-16" delay="duration-700">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
                        <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl">{t.datadoc.cta.title}</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">{t.datadoc.cta.description}</p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                            >
                                {t.datadoc.cta.primaryButton}
                                <ArrowRightIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/flowcorp_"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
                            >
                                {t.datadoc.cta.secondaryButton}
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </main>

            <footer className="border-t border-zinc-800 px-6 py-10 md:px-10">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{t.common.footerCopyright}</div>
                    <a href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-white">
                        ← {t.common.backHome}
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default DataDocPage;
