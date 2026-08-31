import type { Content } from "./types"

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  path: "/en",
  meta: {
    title: "Adryan Francisco — Full Stack Developer",
    description:
      "Portfolio of Adryan Francisco, a Full Stack developer working with React, Next.js, TypeScript, C#, .NET, REST APIs, DDD and systems running in production.",
    shortDescription: "Web systems from the frontend to the architecture, with React, Next.js, TypeScript, C# and .NET.",
    keywords: ["Adryan Francisco", "Full Stack Developer", "React", "Next.js", "TypeScript", "C#", ".NET", "DDD"],
    siteName: "Adryan Francisco — Portfolio",
    ogLocale: "en_US",
  },
  nav: {
    links: [
      { label: "About", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projetos" },
      { label: "Contact", href: "#contato" },
    ],
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
    brandLabel: "Adryan Francisco — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    githubLabel: "Adryan's GitHub",
    linkedinLabel: "Adryan's LinkedIn",
    languageLabel: "View Portuguese version",
    otherLanguage: { code: "PT", label: "Português", href: "/" },
  },
  hero: {
    availability: "Open to opportunities",
    eyebrow: "Full Stack Developer",
    titleBefore: "I build web systems from the ",
    titleAccent: "frontend",
    titleAfter: " to the architecture.",
    description:
      "I develop products with React, Next.js and TypeScript, connected to C# and .NET APIs, databases, domain rules and deployment to real environments.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    panelLabel: "Technical flow of full stack development",
    panelCaption: "product pipeline",
    panelStatus: "production",
    rowStatus: "ready",
    terminalCommand: "build --from-idea --to-production",
    architecture: [
      { label: "Interface", value: "React · Next.js" },
      { label: "Contracts", value: "TypeScript · REST" },
      { label: "Domain", value: "C# · .NET · DDD" },
      { label: "Data & deploy", value: "PostgreSQL · Vercel · VPS" },
    ],
    proofLabel: "Professional summary",
    proof: [
      { label: "Product", value: "Experience designed end to end" },
      { label: "Engineering", value: "Code organized to evolve" },
      { label: "Delivery", value: "Projects shipped to real environments" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Code is only one part of the product.",
    paragraphs: [
      "I'm Adryan Thiago de Oliveira Francisco, a Full Stack developer focused on turning real needs into clear, well-organized applications that actually ship.",
      "I work connecting interface, business rules, APIs and data. I like to understand the flow before writing code, and to structure each layer so the product stays sustainable as it grows.",
    ],
    expertise: [
      { label: "Frontend", value: "React / Next.js / TypeScript" },
      { label: "Backend", value: "C# / .NET / REST APIs" },
      { label: "Architecture", value: "DDD / SOLID / Clean Code" },
      { label: "Data", value: "PostgreSQL / Supabase / SQL" },
      { label: "Infra", value: "Git / GitHub / VPS / Vercel" },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "The technologies behind the product.",
    description: "A full stack foundation organized by responsibility — from the interface to the production environment.",
    groups: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
      { category: "Backend", items: ["C#", ".NET", "ASP.NET Core", "Node.js", "REST APIs"] },
      { category: "Architecture", items: ["DDD", "SOLID", "Clean Code", "Layered architecture"] },
      { category: "Databases", items: ["PostgreSQL", "SQL", "Supabase"] },
      { category: "Tools and infrastructure", items: ["Git", "GitHub", "Docker", "Vercel", "VPS"] },
    ],
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Systems, not just interfaces.",
    description: "Projects that show the integration between product, code, data and delivery.",
    featuredLabel: "Main case",
    featuredHighlights: [
      "Online agenda with booking done by the end client",
      "Clients, reminders and financial overview in one panel",
      "Published on its own domain, with a free trial flow",
    ],
    viewProject: "View project",
    secondaryTitle: "Other projects",
    secondaryDescription: "Hands-on explorations across different parts of the stack.",
    demoLabel: "Demo",
    challengeLabel: "Challenge",
    approachLabel: "Decision",
    privateRepoNote: "Private repository",
    githubCta: "Browse all repositories",
    previewAlt: "Illustration of the BarberFlow interface",
    preview: {
      overview: "Overview",
      greeting: "Good afternoon, Adryan",
      action: "+ Appointment",
      metrics: [
        { label: "Module", title: "Schedule", note: "daily organization" },
        { label: "Module", title: "Clients", note: "centralized management" },
        { label: "View", title: "Operations", note: "integrated dashboard" },
      ],
      chartLabel: "Weekly performance",
      layersLabel: "Layers",
      layers: ["Interface", "Business rules", "Persistence"],
    },
    items: {
      barberflow: {
        description:
          "A barbershop management SaaS published on its own domain, bringing online booking, client records, reminders and financial overview into a single panel.",
        type: "SaaS / Full Stack",
        challenge:
          "A barbershop loses slots and clients when the schedule, the contacts and the till live in separate tools.",
        approach:
          "I modelled the four modules on a shared domain, with booking done by the end client, and published it on its own domain with a free trial flow.",
      },
      "agenda-medica": {
        description:
          "A medical scheduling system with session authentication, HTTP API consumption and a responsive agenda with search, sorting and pagination.",
        type: "Full Stack",
        challenge:
          "An agenda that depends on an external API fails in quiet ways: timeouts, downtime and malformed responses.",
        approach:
          "I separated routes, services and repositories using an Application Factory with blueprints, gave every failure mode its own interface state, and kept the Pytest suite running without network access.",
      },
      sic: {
        description:
          "A .NET 8 API for products, categories and clients, organized across five layers and covered by integration and application tests.",
        type: "Backend / DDD",
        challenge:
          "CRUD grows fast, and business rules end up scattered across controllers.",
        approach:
          "I isolated domain, application, infrastructure, API and contracts into separate projects, kept EF Core at the persistence edge only, and covered the flows with xUnit.",
      },
      "controle-estoque": {
        description:
          "An inventory system with authentication, stock in and out movements, history and a reporting dashboard, shipped with automated deployment.",
        type: "Full Stack",
        challenge:
          "Each user must see only their own inventory, without that filter depending on the frontend.",
        approach:
          "I anchored the isolation in Supabase Auth and in the database itself, so React only consumes what already arrives filtered, and automated publishing with GitHub Actions.",
      },
      "angular-supabase-crud": {
        description:
          "A product management dashboard in Angular 17 with Angular Material, covering full CRUD over a PostgreSQL table on Supabase.",
        type: "Frontend",
      },
      "web-api-dotnet-react": {
        description:
          "A .NET REST API with Entity Framework and versioned migrations, consumed by a separate React client.",
        type: "Full Stack",
        challenge: "Keeping the database structure versioned alongside the code, instead of applied by hand.",
        approach: "I used EF Core migrations as the source of the schema and kept the React client independent, talking to the API through an HTTP contract.",
      },
      crudnn: {
        description: "A web system covering create, list, edit and delete operations over a relational database.",
        type: "Web",
      },
      "projeto-ead": {
        description: "An e-learning platform focused on page structure and navigation experience.",
        type: "Web",
      },
      devops: {
        description: "A Java application built with Maven, used to practise packaging and running services.",
        type: "Backend",
      },
    }
  },
  build: {
    eyebrow: "Process",
    title: "How I build",
    principles: [
      { number: "01", title: "Product", description: "I think about the complete flow that reaches the user, not just the isolated implementation." },
      { number: "02", title: "Architecture", description: "I organize responsibilities, domain and business rules to keep the code able to evolve." },
      { number: "03", title: "Integration", description: "I connect interface, APIs, databases and services into one coherent experience." },
      { number: "04", title: "Delivery", description: "I take projects from the repository to a real environment, including publishing and infrastructure." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Shall we build something together?",
    description:
      "I'm open to opportunities, projects and collaborations to build useful systems that are well structured and ready to evolve.",
    emailCta: "Send an email",
    emailSubject: "Contact via portfolio",
    resumeCta: "Download résumé",
    linksLabel: "Professional links",
  },
  footer: {
    builtWith: "Built with Next.js + TypeScript",
    emailLabel: "Email",
  },
}
