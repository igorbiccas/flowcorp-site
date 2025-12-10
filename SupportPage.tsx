import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import AnimatedSection from './components/AnimatedSection';

const supportContent = {
  en: {
    heroTitle: 'Welcome to the SelfBrain Support Center!',
    intro: 'Here you’ll find answers to the most common questions from users on World App.',
    sections: [
      {
        title: '🪙 FlowCoins & Store',
        questions: [
          {
            q: 'What are FlowCoins?',
            a: `FlowCoins are the in-app virtual currency used inside SelfBrain to unlock experiences:\n\nPurchase limited-time AI characters from the Store\n\nInteract with your AIs (each message costs 1 FlowCoin)\n\nAccess special features`,
          },
          {
            q: 'How can I earn more FlowCoins?',
            a: `You can increase your balance in three ways:\n\nDaily Reward: Collect free FlowCoins every day by opening the app through World.\n\nAI Resale: If you no longer want an AI you purchased, you can sell it back for 3 FlowCoins.\n\nTop-ups via World App: You can purchase additional FlowCoins using World Wallet (USDC).`,
          },
          {
            q: 'I bought FlowCoins but they didn’t show up. What should I do?',
            a: `Most purchases are confirmed instantly, but depending on network conditions, it may take a few minutes.\nIf your balance does not update within 10 minutes, please contact our support team with your transaction details.`,
          },
        ],
      },
      {
        title: '🤖 AI Characters (Slots & Creation)',
        questions: [
          {
            q: 'What’s the difference between Store AIs and Custom AIs?',
            a: `Store AIs: Limited-time characters with unique personalities, available only for short periods. Once removed from the Store, they may never return.\n\nCustom AIs: Fully personalized characters created by you.`,
          },
          {
            q: 'How many AIs can I have?',
            a: 'Every user has 10 memory slots. If you reach the limit, you must sell or delete an existing AI to create or purchase a new one.',
          },
          {
            q: 'Do Store AIs disappear from the Store?',
            a: `Yes — Store AIs are seasonal and time-limited.\nThis means:\n\nSome AIs may only stay available for a few hours or days\n\nRarer AIs might not return once their cycle ends`,
          },
        ],
      },
      {
        title: '🔒 Privacy & Security',
        questions: [
          {
            q: 'Are my conversations private?',
            a: 'Yes. Your conversations and AI data are stored locally on your device.\nSelfBrain does not use your messages to train any public AI models, and your identity from World App is never shared.',
          },
        ],
      },
    ],
    contact: {
      title: 'Need more help?',
      description:
        'If you couldn’t find what you were looking for, or if something isn’t working as expected, our support team is ready to assist you.',
      responseTime: 'Typically responds within 24 hours',
      cta: 'Contact on Instagram',
    },
    tipLabel: 'Tip',
    tip:
      'Keep SelfBrain updated inside World App to enjoy the latest features, improvements, and seasonal AI releases!',
  },
  pt: {
    heroTitle: 'Bem-vindo ao Centro de Suporte SelfBrain!',
    intro: 'Aqui você encontra as respostas mais comuns dos usuários no World App.',
    sections: [
      {
        title: '🪙 FlowCoins & Loja',
        questions: [
          {
            q: 'O que são FlowCoins?',
            a: `FlowCoins são a moeda virtual dentro do SelfBrain para desbloquear experiências:\n\nCompre personagens de IA por tempo limitado na Loja\n\nInteraja com suas IAs (cada mensagem custa 1 FlowCoin)\n\nAcesse recursos especiais`,
          },
          {
            q: 'Como ganho mais FlowCoins?',
            a: `Você pode aumentar seu saldo de três formas:\n\nRecompensa Diária: Coletar FlowCoins grátis todos os dias abrindo o app pelo World.\n\nRevenda de IA: Se não quiser mais uma IA comprada, você pode revendê-la por 3 FlowCoins.\n\nRecargas via World App: Você pode comprar FlowCoins adicionais usando World Wallet (USDC).`,
          },
          {
            q: 'Comprei FlowCoins e elas não apareceram. O que fazer?',
            a: `A maioria das compras é confirmada na hora, mas pode levar alguns minutos dependendo da rede.\nSe o saldo não atualizar em até 10 minutos, entre em contato com o suporte enviando os dados da transação.`,
          },
        ],
      },
      {
        title: '🤖 Personagens de IA (Slots & Criação)',
        questions: [
          {
            q: 'Qual a diferença entre IAs da Loja e IAs Customizadas?',
            a: `IAs da Loja: Personagens por tempo limitado com personalidades únicas, disponíveis apenas por curtos períodos. Quando saem da Loja, podem nunca mais voltar.\n\nIAs Customizadas: Personagens totalmente personalizados criados por você.`,
          },
          {
            q: 'Quantas IAs posso ter?',
            a: 'Cada usuário possui 10 slots de memória. Ao atingir o limite, é preciso vender ou excluir uma IA existente para criar ou comprar uma nova.',
          },
          {
            q: 'As IAs da Loja desaparecem?',
            a: `Sim — as IAs da Loja são sazonais e limitadas.\nIsso significa:\n\nAlgumas IAs ficam disponíveis apenas por algumas horas ou dias\n\nIAs mais raras podem não voltar quando o ciclo termina`,
          },
        ],
      },
      {
        title: '🔒 Privacidade & Segurança',
        questions: [
          {
            q: 'Minhas conversas são privadas?',
            a: 'Sim. Suas conversas e dados de IA ficam armazenados localmente no dispositivo.\nO SelfBrain não usa suas mensagens para treinar modelos públicos de IA e sua identidade do World App nunca é compartilhada.',
          },
        ],
      },
    ],
    contact: {
      title: 'Precisa de mais ajuda?',
      description:
        'Se você não encontrou o que procurava ou algo não está funcionando como esperado, nosso time de suporte está pronto para ajudar.',
      responseTime: 'Normalmente respondemos em até 24 horas',
      cta: 'Falar no Instagram',
    },
    tipLabel: 'Dica',
    tip:
      'Mantenha o SelfBrain atualizado no World App para aproveitar os últimos recursos, melhorias e lançamentos sazonais de IA!',
  },
};

type Language = keyof typeof supportContent;

const SupportPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const content = useMemo(() => supportContent[language], [language]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0d111c] via-[#0a0d17] to-black text-zinc-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.05),transparent_38%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.04),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.03),transparent_32%)] opacity-50"
        aria-hidden="true"
      />
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-28 md:px-8 md:pt-32">
        <AnimatedSection className="space-y-6" delay="duration-700">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-200/80">Support</p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight text-zinc-50 md:text-[44px]">{content.heroTitle}</h1>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">{content.intro}</p>
            </div>
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/70 text-2xl shadow-lg transition hover:-translate-y-[1px] hover:border-indigo-400/50 hover:text-white"
              aria-label={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
            >
              {language === 'en' ? '🇧🇷' : '🇺🇸'}
            </button>
          </div>
        </AnimatedSection>

        {content.sections.map((section) => (
          <AnimatedSection key={section.title} className="space-y-6" delay="duration-700">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">{section.title}</h2>
            </div>
            <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
              {section.questions.map((item) => (
                <div key={item.q} className="space-y-2 rounded-2xl bg-black/30 p-4">
                  <h3 className="text-lg font-semibold text-zinc-100">{item.q}</h3>
                  <p className="whitespace-pre-line text-base leading-relaxed text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection className="space-y-6" delay="duration-700">
          <div className="flex flex-col gap-4 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600/20 to-fuchsia-600/10 p-8 shadow-xl">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-zinc-50 md:text-3xl">{content.contact.title}</h2>
              <p className="text-base leading-relaxed text-zinc-200 md:text-lg">{content.contact.description}</p>
              <p className="text-sm text-indigo-200/80">{content.contact.responseTime}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href="https://www.instagram.com/flowcorp_"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-600/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-[1px] hover:border-indigo-300 hover:bg-indigo-600/30"
              >
                <span className="text-xl">📲</span>
                <span>{content.contact.cta}</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6" delay="duration-700">
          <h3 className="text-lg font-semibold text-zinc-50">{content.tipLabel}</h3>
          <p className="mt-2 text-base leading-relaxed text-zinc-300">{content.tip}</p>
        </AnimatedSection>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 bg-[#0a0d17]/80 px-6 py-10 text-center text-sm text-zinc-400 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 md:flex-row md:justify-between md:text-left">
          <span>© 2025 FlowCorp Construído no Brasil</span>
          <a
            href="/"
            className="text-zinc-300 transition-colors hover:text-white"
          >
            Voltar para a Home
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SupportPage;
