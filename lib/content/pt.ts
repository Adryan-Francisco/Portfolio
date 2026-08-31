import type { Content } from "./types"

export const pt: Content = {
  locale: "pt",
  htmlLang: "pt-BR",
  path: "/",
  meta: {
    title: "Adryan Francisco — Desenvolvedor Full Stack",
    description:
      "Portfólio de Adryan Francisco, desenvolvedor Full Stack com React, Next.js, TypeScript, C#, .NET, APIs REST, DDD e sistemas em produção.",
    shortDescription: "Sistemas web do frontend à arquitetura, com React, Next.js, TypeScript, C# e .NET.",
    keywords: ["Adryan Francisco", "Desenvolvedor Full Stack", "React", "Next.js", "TypeScript", "C#", ".NET", "DDD"],
    siteName: "Adryan Francisco — Portfólio",
    ogLocale: "pt_BR",
  },
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Projetos", href: "#projetos" },
      { label: "Contato", href: "#contato" },
    ],
    mainLabel: "Navegação principal",
    mobileLabel: "Navegação mobile",
    brandLabel: "Adryan Francisco — início",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    githubLabel: "GitHub de Adryan",
    linkedinLabel: "LinkedIn de Adryan",
    languageLabel: "Ver versão em inglês",
    otherLanguage: { code: "EN", label: "English", href: "/en" },
  },
  hero: {
    availability: "Disponível para oportunidades",
    eyebrow: "Full Stack Developer",
    titleBefore: "Construo sistemas web do ",
    titleAccent: "frontend",
    titleAfter: " à arquitetura.",
    description:
      "Desenvolvo produtos com React, Next.js e TypeScript, conectados a APIs em C# e .NET, banco de dados, regras de domínio e deploy em ambiente real.",
    primaryCta: "Ver projetos",
    secondaryCta: "Entrar em contato",
    panelLabel: "Fluxo técnico do desenvolvimento full stack",
    panelCaption: "product pipeline",
    panelStatus: "production",
    rowStatus: "ready",
    terminalCommand: "build --from-idea --to-production",
    architecture: [
      { label: "Interface", value: "React · Next.js" },
      { label: "Contratos", value: "TypeScript · REST" },
      { label: "Domínio", value: "C# · .NET · DDD" },
      { label: "Dados & deploy", value: "PostgreSQL · Vercel · VPS" },
    ],
    proofLabel: "Resumo profissional",
    proof: [
      { label: "Produto", value: "Experiência pensada de ponta a ponta" },
      { label: "Engenharia", value: "Código organizado para evoluir" },
      { label: "Entrega", value: "Projetos publicados em ambiente real" },
    ],
  },
  about: {
    eyebrow: "Sobre",
    title: "Código é apenas uma parte do produto.",
    paragraphs: [
      "Sou Adryan Thiago de Oliveira Francisco, desenvolvedor Full Stack focado em transformar necessidades reais em aplicações claras, organizadas e publicadas.",
      "Atuo conectando interface, regras de negócio, APIs e dados. Gosto de entender o fluxo antes de escrever código e de estruturar cada camada para que o produto continue sustentável conforme cresce.",
    ],
    expertise: [
      { label: "Frontend", value: "React / Next.js / TypeScript" },
      { label: "Backend", value: "C# / .NET / APIs REST" },
      { label: "Arquitetura", value: "DDD / SOLID / Clean Code" },
      { label: "Dados", value: "PostgreSQL / Supabase / SQL" },
      { label: "Infra", value: "Git / GitHub / VPS / Vercel" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tecnologias que sustentam o produto.",
    description: "Uma base full stack organizada por responsabilidade — da interface ao ambiente de produção.",
    groups: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
      { category: "Backend", items: ["C#", ".NET", "ASP.NET Core", "Node.js", "REST APIs"] },
      { category: "Arquitetura", items: ["DDD", "SOLID", "Clean Code", "Arquitetura em camadas"] },
      { category: "Banco de dados", items: ["PostgreSQL", "SQL", "Supabase"] },
      { category: "Ferramentas e infraestrutura", items: ["Git", "GitHub", "Docker", "Vercel", "VPS"] },
    ],
  },
  projects: {
    eyebrow: "Projetos selecionados",
    title: "Sistemas, não apenas interfaces.",
    description: "Projetos que demonstram integração entre produto, código, dados e entrega.",
    featuredLabel: "Case principal",
    featuredHighlights: [
      "Agenda online e agendamento feito pelo cliente final",
      "Clientes, lembretes e visão financeira no mesmo painel",
      "Publicado em domínio próprio, com fluxo de teste gratuito",
    ],
    viewProject: "Ver projeto",
    secondaryTitle: "Outros projetos",
    secondaryDescription: "Explorações práticas em diferentes partes da stack.",
    demoLabel: "Demo",
    challengeLabel: "Desafio",
    approachLabel: "Decisão",
    privateRepoNote: "Repositório privado",
    githubCta: "Explorar todos os repositórios",
    previewAlt: "Representação da interface do BarberFlow",
    preview: {
      overview: "Visão geral",
      greeting: "Boa tarde, Adryan",
      action: "+ Agendamento",
      metrics: [
        { label: "Módulo", title: "Agenda", note: "organização diária" },
        { label: "Módulo", title: "Clientes", note: "gestão centralizada" },
        { label: "Visão", title: "Operação", note: "painel integrado" },
      ],
      chartLabel: "Desempenho semanal",
      layersLabel: "Camadas",
      layers: ["Interface", "Regras de negócio", "Persistência"],
    },
    items: {
      barberflow: {
        description:
          "SaaS de gestão para barbearias publicado em domínio próprio, reunindo agenda online, cadastro de clientes, lembretes e visão financeira em um único painel.",
        type: "SaaS / Full Stack",
        challenge:
          "Uma barbearia perde horário e cliente quando agenda, contato e caixa vivem em ferramentas separadas.",
        approach:
          "Modelei os quatro módulos sobre um mesmo domínio, com agendamento feito pelo próprio cliente final, e publiquei em domínio próprio com fluxo de teste gratuito.",
      },
      "agenda-medica": {
        description:
          "Sistema de agendamentos médicos com autenticação por sessão, consumo de API HTTP e agenda responsiva com busca, ordenação e paginação.",
        type: "Full Stack",
        challenge:
          "Uma agenda que depende de API externa falha de formas silenciosas: timeout, indisponibilidade e resposta inválida.",
        approach:
          "Separei rotas, serviços e repositórios usando Application Factory e blueprints, dei estado próprio de interface a cada modo de falha e mantive os testes em Pytest rodando sem depender de rede.",
      },
      sic: {
        description:
          "API .NET 8 para produtos, categorias e clientes, organizada em cinco camadas e coberta por testes de integração e de aplicação.",
        type: "Backend / DDD",
        challenge:
          "CRUD cresce rápido e a regra de negócio acaba espalhada pelos controllers.",
        approach:
          "Isolei domínio, aplicação, infraestrutura, API e contratos em projetos separados, deixei o EF Core apenas na borda de persistência e cobri os fluxos com xUnit.",
      },
      "controle-estoque": {
        description:
          "Controle de estoque com autenticação, movimentação de entrada e saída, histórico e dashboard de relatórios, publicado com deploy automatizado.",
        type: "Full Stack",
        challenge:
          "Cada usuário precisa enxergar apenas o próprio estoque, sem que esse filtro dependa do frontend.",
        approach:
          "Apoiei o isolamento no Supabase Auth e no próprio banco, deixando o React consumir só o que já chega filtrado, e automatizei a publicação com GitHub Actions.",
      },
      "angular-supabase-crud": {
        description:
          "Dashboard de gerenciamento de produtos em Angular 17 com Angular Material, cobrindo o CRUD completo sobre uma tabela PostgreSQL no Supabase.",
        type: "Frontend",
      },
      "web-api-dotnet-react": {
        description:
          "API REST em .NET com Entity Framework e migrations versionadas, consumida por um cliente React separado.",
        type: "Full Stack",
        challenge: "Manter a estrutura do banco versionada junto do código, em vez de aplicada à mão.",
        approach: "Usei as migrations do EF Core como fonte da estrutura e mantive o cliente React independente, conversando com a API por contrato HTTP.",
      },
      crudnn: {
        description: "Sistema web com as operações de cadastro, listagem, edição e remoção sobre banco relacional.",
        type: "Web",
      },
      "projeto-ead": {
        description: "Plataforma educacional com foco em organização de páginas e experiência de navegação.",
        type: "Web",
      },
      devops: {
        description: "Aplicação Java com build em Maven, usada para praticar empacotamento e execução de serviços.",
        type: "Backend",
      },
    }
  },
  build: {
    eyebrow: "Processo",
    title: "Como eu construo",
    principles: [
      { number: "01", title: "Produto", description: "Penso no fluxo completo que chega ao usuário, não apenas na implementação isolada." },
      { number: "02", title: "Arquitetura", description: "Organizo responsabilidades, domínio e regras de negócio para manter o código evolutivo." },
      { number: "03", title: "Integração", description: "Conecto interface, APIs, banco de dados e serviços em uma experiência coerente." },
      { number: "04", title: "Entrega", description: "Levo os projetos do repositório ao ambiente real, incluindo publicação e infraestrutura." },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos construir algo juntos?",
    description:
      "Estou aberto a oportunidades, projetos e colaborações para desenvolver sistemas úteis, bem estruturados e prontos para evoluir.",
    emailCta: "Enviar e-mail",
    emailSubject: "Contato via portfólio",
    resumeCta: "Baixar currículo",
    linksLabel: "Links profissionais",
  },
  footer: {
    builtWith: "Desenvolvido com Next.js + TypeScript",
    emailLabel: "E-mail",
  },
}
