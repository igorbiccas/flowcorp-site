import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const supportContent = {
  en: {
    heroTitle: 'SelfBrain Support',
    intro: 'Frequently asked questions for World App users.',
    sections: [
      {
        title: '🪙 FlowCoins',
        questions: [
          {
            q: 'What are FlowCoins?',
            a: 'Virtual currency to unlock Store AIs and special features. Interactions are free.',
          },
          {
            q: 'How to get them?',
            a: 'Daily rewards, reselling AIs (3 coins), or recharging with USDC via World App.',
          },
        ],
      },
      {
        title: '🤖 AI Characters',
        questions: [
          {
            q: 'Store vs Custom AIs?',
            a: 'Store AIs are seasonal and limited-time. Custom AIs are built by you.',
          },
          {
            q: 'Limits?',
            a: '10 slots total. Sell or delete to free up space.',
          },
        ],
      },
      {
        title: '🔒 Privacy',
        questions: [
          {
            q: 'Is it private?',
            a: 'Yes. Data is stored locally. We never use your messages for training or share your identity.',
          },
        ],
      },
    ],
    contact: {
      title: 'Need help?',
      description: 'Our team typically responds within 24 hours on Instagram.',
      responseTime: 'Fast response',
      cta: 'Contact on Instagram',
    },
  },
  pt: {
    heroTitle: 'Suporte SelfBrain',
    intro: 'Respostas rápidas para usuários do World App.',
    sections: [
      {
        title: '🪙 FlowCoins',
        questions: [
          {
            q: 'O que são FlowCoins?',
            a: 'Moeda virtual para desbloquear IAs da Loja e recursos. Conversas são grátis.',
          },
          {
            q: 'Como ganhar?',
            a: 'Recompensa diária, revenda de IAs (3 coins) ou recarga com USDC pelo World App.',
          },
        ],
      },
      {
        title: '🤖 Personagens',
        questions: [
          {
            q: 'Loja vs Customizadas?',
            a: 'IAs da Loja são sazonais/limitadas. Customizadas são criadas por você.',
          },
          {
            q: 'Limites?',
            a: '10 slots de memória. Venda ou exclua para liberar espaço.',
          },
        ],
      },
      {
        title: '🔒 Privacidade',
        questions: [
          {
            q: 'É privado?',
            a: 'Sim. Dados locais. Não treinamos modelos com suas mensagens nem compartilhamos dados.',
          },
        ],
      },
    ],
    contact: {
      title: 'Dúvidas?',
      description: 'Respondemos em até 24h via Instagram.',
      responseTime: 'Resposta rápida',
      cta: 'Falar no Instagram',
    },
  },
};

type Language = keyof typeof supportContent;

const SupportPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const content = useMemo(() => supportContent[language], [language]);

  return (
    <div className="relative min-h-screen bg-[#0f0f12] text-white selection:bg-white/10">
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-24 px-6 pb-24 pt-32 md:px-8 md:pt-40">
        <AnimatedSection className="space-y-8" delay="duration-1000">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Support</p>
              <h1 className="text-4xl font-medium tracking-tighter text-white md:text-5xl">{content.heroTitle}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{content.intro}</p>
            </div>
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition-colors hover:bg-white/10"
              aria-label={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
            >
              {language === 'en' ? '🇧🇷' : '🇺🇸'}
            </button>
          </div>
        </AnimatedSection>

        {content.sections.map((section) => (
          <AnimatedSection key={section.title} className="space-y-12" delay="duration-700">
            <h2 className="text-2xl font-medium tracking-tight text-white">{section.title}</h2>
            <div className="grid gap-4">
              {section.questions.map((item) => (
                <div key={item.q} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
                  <h3 className="text-lg font-medium text-white">{item.q}</h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-zinc-400">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection className="space-y-12" delay="duration-700">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center md:items-start md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-medium tracking-tight text-white">{content.contact.title}</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{content.contact.description}</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">{content.contact.responseTime}</p>
            </div>
            <a
              href="https://www.instagram.com/flowcorp_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {content.contact.cta}
            </a>
          </div>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-[#0f0f12] px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <span className="text-xs uppercase tracking-widest text-zinc-500">© 2025 FlowCorp</span>
          <a href="/" className="text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-white">
            Voltar para a Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
