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
                        Transforme 10 minutos de digitação em 30 segundos.
                    </p>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
                        Grave a consulta e receba a anamnese estruturada automaticamente, pronta para o prontuário.
                    </p>

                    <div className="mt-8 space-y-1 text-zinc-300">
                        <p>Mais produtividade médica.</p>
                        <p>Mais faturamento por hora.</p>
                        <p>Menos retrabalho.</p>
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
                        Médicos perdem até 10 minutos por consulta digitando anamnese. Em 2.000 atendimentos/mês, isso representa mais de 300 horas de trabalho administrativo.
                    </p>
                    <div className="mt-8 space-y-1 text-zinc-300">
                        <p>Tempo caro.</p>
                        <p>Desgaste alto.</p>
                        <p>Produtividade limitada.</p>
                    </div>
                    <p className="mt-8 text-lg text-zinc-200">O DataDoc elimina esse gargalo.</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">Como funciona</h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {[
                            {
                                title: '1. Grave normalmente',
                                description: 'Sem mudar sua rotina.',
                            },
                            {
                                title: '2. IA estrutura automaticamente',
                                description: 'Anamnese organizada, clara e padronizada.',
                            },
                            {
                                title: '3. Revise e envie',
                                description: 'Pronto para integrar ao prontuário.',
                            },
                        ].map((step) => (
                            <div key={step.title} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-zinc-400">Leva 30 segundos.</p>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">O impacto para a clínica</h2>

                    <ul className="mt-8 space-y-3 text-zinc-200">
                        {[
                            'Até 300 horas economizadas por mês',
                            'Redução de erros e retrabalho',
                            'Documentação padronizada',
                            'Mais consultas por período',
                            'Melhor experiência para o paciente',
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
                        <div className="text-3xl font-semibold text-white">R$ 3.000 / mês</div>
                        <ul className="mt-6 space-y-2 text-sm text-zinc-200">
                            <li>Até 2.000 anamneses mensais</li>
                            <li>Sem cobrança por médico</li>
                            <li>Mensalidade fixa</li>
                            <li>Sem taxas ocultas</li>
                        </ul>
                        <p className="mt-5 text-zinc-300">Implantação sob consulta.</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="border-b border-zinc-800 py-16" delay="duration-700">
                    <h2 className="text-2xl font-medium text-white md:text-3xl">Para quem é</h2>
                    <ul className="mt-6 space-y-2 text-zinc-300">
                        <li>Clínicas com alto volume de atendimento</li>
                        <li>Especialidades ambulatoriais</li>
                        <li>Redes que buscam eficiência operacional</li>
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
