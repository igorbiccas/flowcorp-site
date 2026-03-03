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
                    <h1 className="text-4xl font-medium leading-tight text-white md:text-6xl">DataDoc</h1>

                    <p className="mt-5 max-w-3xl text-xl leading-relaxed text-zinc-200">
                        Documentação clínica rápida, padronizada e pronta para uso.
                    </p>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
                        Grave a consulta e receba a anamnese estruturada automaticamente para o prontuário.
                    </p>

                    <div className="mt-8 space-y-1 text-zinc-300">
                        <p>Mais produtividade.</p>
                        <p>Menos retrabalho.</p>
                        <p>Mais foco no paciente.</p>
                    </div>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://datadocs.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                        >
                            Solicitar demonstração
                            <ArrowRightIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/flowcorp_"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900"
                        >
                            Falar com o time
                        </a>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">O problema que resolvemos</h2>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
                        O registro manual consome tempo clínico e gera sobrecarga operacional.
                    </p>
                    <div className="mt-8 space-y-1 text-zinc-300">
                        <p>Tempo caro.</p>
                        <p>Desgaste da equipe.</p>
                        <p>Menor eficiência.</p>
                    </div>
                    <p className="mt-8 text-lg text-zinc-200">O DataDoc elimina esse gargalo.</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">Como funciona</h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                title: '1. Grave normalmente',
                                description: 'A consulta segue como sempre.',
                            },
                            {
                                title: '2. IA estrutura automaticamente',
                                description: 'Resumo claro e padronizado em segundos.',
                            },
                            {
                                title: '3. Revise e envie',
                                description: 'Valide e registre no prontuário.',
                            },
                        ].map((step) => (
                            <div key={step.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-zinc-400">Fluxo simples e imediato.</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">O impacto para a clínica</h2>

                    <ul className="mt-8 space-y-3 text-zinc-200">
                        {[
                            'Economia de tempo em escala',
                            'Redução de erros e retrabalho',
                            'Documentação padronizada',
                            'Mais capacidade de atendimento',
                            'Melhor experiência do paciente',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span className="mt-1">✔</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-lg text-zinc-200">O DataDoc não é um gravador. É um multiplicador de produtividade.</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">Modelo de contratação</h2>

                    <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-8">
                        <div className="text-3xl font-semibold text-white">Plano mensal sob consulta</div>
                        <ul className="mt-6 space-y-2 text-sm text-zinc-200">
                            <li>Escalável para o volume da clínica</li>
                            <li>Sem cobrança individual por médico</li>
                            <li>Condições transparentes</li>
                        </ul>
                        <p className="mt-5 text-zinc-300">Implantação e detalhes comerciais sob consulta.</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">Para quem é</h2>
                    <ul className="mt-6 space-y-2 text-zinc-300">
                        <li>Clínicas com alto volume de atendimentos</li>
                        <li>Especialidades que exigem documentação recorrente</li>
                        <li>Operações que buscam eficiência e padronização</li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="py-16" delay="duration-700">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center md:p-12">
                        <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl">Menos burocracia. Mais medicina.</h2>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                            >
                                Agendar demonstração
                                <ArrowRightIcon />
                            </a>
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
                            >
                                Testar DataDoc
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
