import React from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';
import { AnamneseIcon, SparklesIcon, ArrowRightIcon } from './components/icons';

const DataDocPage: React.FC = () => {
    React.useEffect(() => {
        document.title = 'DataDoc | Inteligência Clínica - FlowCorp';
    }, []);

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

            <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 pb-24 pt-32 md:px-8 md:pt-40">
                {/* Hero Section */}
                <AnimatedSection className="space-y-8" delay="duration-1000">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Product</p>
                            <span className="h-px w-8 bg-zinc-800"></span>
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">Inteligência Clínica</span>
                        </div>
                        <h1 className="text-4xl font-medium tracking-tighter text-white md:text-7xl">
                            DataDoc
                        </h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
                            A revolução na anamnese médica. Transforme conversas naturais em documentação clínica estruturada com o poder da IA.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Features Grid */}
                <AnimatedSection className="grid gap-8 md:grid-cols-2" delay="duration-700">
                    <div className="group space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]">
                        <AnamneseIcon />
                        <h3 className="text-xl font-medium text-white">Anamnese Automática</h3>
                        <p className="text-zinc-400">
                            Capture a consulta em tempo real e deixe que nossa IA organize os sintomas, histórico e queixas em um formato médico padrão.
                        </p>
                    </div>
                    <div className="group space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]">
                        <SparklesIcon />
                        <h3 className="text-xl font-medium text-white">Inteligência Clínica</h3>
                        <p className="text-zinc-400">
                            Sugestões inteligentes e insights baseados em protocolos médicos atualizados, auxiliando na precisão do diagnóstico.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Benefits Section */}
                <AnimatedSection className="space-y-12" delay="duration-700">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-medium tracking-tight text-white md:text-4xl">Por que escolher o DataDoc?</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="space-y-2">
                                <div className="text-sky-400 font-medium">Economia de Tempo</div>
                                <p className="text-sm text-zinc-500">Reduza em até 70% o tempo gasto com burocracia e preenchimento de prontuários.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-sky-400 font-medium">Foco no Paciente</div>
                                <p className="text-sm text-zinc-500">Mantenha contato visual e atenção total no paciente enquanto a IA cuida das notas.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="text-sky-400 font-medium">Padronização</div>
                                <p className="text-sm text-zinc-500">Garanta que todos os prontuários sigam uma estrutura clara, rica e profissional.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-12 md:py-24" delay="duration-700">
                    <div className="relative z-10 mx-auto max-w-2xl space-y-8">
                        <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
                            Pronto para elevar sua prática clínica?
                        </h2>
                        <p className="text-lg text-zinc-400">
                            Junte-se a centenas de médicos que já estão transformando seu fluxo de trabalho com o DataDoc.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="https://datadocs.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="group/button inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
                            >
                                Acessar Plataforma
                                <ArrowRightIcon />
                            </a>
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]" />
                    <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
                </AnimatedSection>
            </main>

            <footer className="relative z-10 border-t border-white/5 bg-[#0f0f12] px-6 py-12 md:px-8">
                <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
                    <div className="flex items-center gap-4">
                        <span className="text-xs uppercase tracking-widest text-zinc-500">© 2025 FlowCorp</span>
                    </div>
                    <a href="/" className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
                        <span className="transition-transform group-hover:-translate-x-1">←</span>
                        Voltar para a Home
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default DataDocPage;
