export const projects = [
  {
    title: "Metro Quadrado",
    url: "https://www.metroimobi.com.br/",
    stack: [
      "Next.js 16",
      "React Native",
      "Expo",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Docker",
      "TypeScript",
    ],
    destaques: {
      pt: [
        "API RESTful servindo painel administrativo, portal do cliente/corretor e app mobile (Expo/React Native) em produção com ~50 usuários ativos.",
        "Autenticação com Clerk, controle de acesso por papel (admin, cliente, corretor) e app publicado no TestFlight via pipeline EAS Build + EAS Submit.",
        "Arquitetura com Next.js 16 App Router, Prisma ORM, PostgreSQL e deploy containerizado via Docker.",
      ],
      en: [
        "RESTful API serving an admin panel, client/broker portal, and mobile app (Expo/React Native), live in production with ~50 active users.",
        "Implemented Clerk authentication, role-based access control (admin, client, broker), and published the mobile app on TestFlight via EAS Build + EAS Submit pipeline.",
        "Architecture built with Next.js 16 App Router, Prisma ORM, PostgreSQL, and containerized deployment via Docker.",
      ],
    },
  },
  {
    title: "ASO Apollo",
    url: null,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    destaques: {
      pt: [
        "Sistema de gestão de saúde ocupacional em produção com ~30 usuários, cobrindo módulos de Exames, Fatores de Risco e Planos.",
        "API integrada ao gateway de pagamentos Asaas para processamento de cobranças, assinaturas recorrentes e gestão de checkout.",
        "Autenticação com controle de acesso por papel e fluxos de onboarding multiempresa.",
      ],
      en: [
        "Occupational health management system live in production with ~30 active users, covering Exams, Risk Factors, and Health Plans modules.",
        "Integrated with Asaas payment gateway for billing processing, recurring subscriptions, and checkout management.",
        "Role-based authentication and multi-company onboarding flows.",
      ],
    },
  },
  {
    title: "GameBacklog",
    url: "https://github.com/MatheusMW21/GameManager",
    stack: [
      "ASP.NET Core 9",
      "Entity Framework Core",
      "PostgreSQL",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    description: {
      pt: "Um gerenciador de backlog de jogos que permite acompanhar, avaliar e descobrir jogos. Integra-se ao IGDB, Steam e HowLongToBeat para enriquecer sua biblioteca com capas, metadados e estimativas de tempo para conclusão.",
      en: "A game backlog manager to track, rate, and discover games. Integrates with IGDB, Steam, and HowLongToBeat to enrich your library with cover art, metadata, and time-to-beat estimates.",
    },
  },
  {
    title: "Web Extension Accessibility",
    url: "https://github.com/TCC-web-extension-accessibility",
    stack: ["React 19", "FastAPI", "Python"],
    description: {
      pt: "Este projeto tem como objetivo principal criar uma pacote de acessibilidade web, visando proporcionar melhor experiência de navegação nos sites de internet para pessoas com deficiência.",
      en: "This project's main goal is to build a web accessibility toolkit, aiming to provide a better browsing experience on websites for people with disabilities.",
    },
  },
];
