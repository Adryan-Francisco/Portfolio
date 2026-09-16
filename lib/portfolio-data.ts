export type ProjectType = "SaaS / Full Stack" | "Full Stack" | "Frontend" | "Backend" | "Web"

export interface Project {
  readonly title: string
  readonly description: string
  readonly techs: readonly string[]
  readonly type: ProjectType
  readonly github: string
  readonly live: string | null
  readonly featured: boolean
}

export const profile = {
  firstName: "Adryan",
  fullName: "Adryan Thiago de Oliveira Francisco",
  role: "Desenvolvedor Full Stack",
  location: "Brasil",
  github: "https://github.com/Adryan-Francisco?tab=repositories",
  linkedin: "https://www.linkedin.com/in/adryan-francisco",
  githubUsername: "Adryan-Francisco",
} as const

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
] as const

export const expertise = [
  { label: "Frontend", value: "React / Next.js / TypeScript" },
  { label: "Backend", value: "C# / .NET / APIs REST" },
  { label: "Arquitetura", value: "DDD / SOLID / Clean Code" },
  { label: "Dados", value: "PostgreSQL / Supabase / SQL" },
  { label: "Infra", value: "Git / GitHub / VPS / Vercel" },
] as const

export const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["C#", ".NET", "ASP.NET Core", "Node.js", "REST APIs"] },
  { category: "Arquitetura", items: ["DDD", "SOLID", "Clean Code", "Arquitetura em camadas"] },
  { category: "Banco de dados", items: ["PostgreSQL", "SQL", "Supabase"] },
  { category: "Ferramentas e infraestrutura", items: ["Git", "GitHub", "Docker", "Vercel", "VPS"] },
] as const

export const featuredProjects: readonly Project[] = [
  {
    title: "BarberFlow",
    description: "SaaS completo para barbearias, com agenda, clientes, financeiro, automações e gestão modular em uma experiência consistente do desktop ao celular.",
    techs: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    type: "SaaS / Full Stack",
    github: "https://github.com/Adryan-Francisco/barbearia-saas",
    live: "https://www.appbarberflow.com.br",
    featured: true,
  },
  {
    title: "Controle de imóveis",
    description: "Aplicação para cadastro, organização e consulta de imóveis rurais com persistência de dados no Supabase.",
    techs: ["React", "JavaScript", "Supabase"],
    type: "Frontend",
    github: "https://github.com/Adryan-Francisco/controle-imoveis-react",
    live: null,
    featured: false,
  },
  {
    title: "Web API .NET + React",
    description: "Projeto full stack que integra uma interface React a um backend .NET por meio de uma API REST.",
    techs: ["React", ".NET", "C#"],
    type: "Full Stack",
    github: "https://github.com/Adryan-Francisco/Web-Api-em-.Net-React",
    live: null,
    featured: false,
  },
  {
    title: "CRUDNN",
    description: "Sistema web para as operações essenciais de cadastro, listagem, edição e remoção.",
    techs: ["HTML", "CSS", "JavaScript"],
    type: "Web",
    github: "https://github.com/Adryan-Francisco/CRUDNN",
    live: null,
    featured: false,
  },
  {
    title: "Projeto EAD",
    description: "Projeto educacional com foco em organização de páginas e experiência de navegação.",
    techs: ["HTML", "CSS", "JavaScript"],
    type: "Web",
    github: "https://github.com/Adryan-Francisco/ProjetoEAD",
    live: null,
    featured: false,
  },
  {
    title: "Controle de estoque",
    description: "Aplicação para gerenciamento de itens e fluxo operacional de estoque.",
    techs: ["JavaScript", "HTML", "CSS"],
    type: "Frontend",
    github: "https://github.com/Adryan-Francisco/controle-estoque",
    live: null,
    featured: false,
  },
  {
    title: "SIC",
    description: "Sistema em C# com foco em organização de domínio, API e responsabilidades em camadas.",
    techs: ["C#", ".NET", "APIs REST", "DDD"],
    type: "Backend",
    github: "https://github.com/Adryan-Francisco/SIC",
    live: null,
    featured: false,
  },
  {
    title: "DevOps",
    description: "Projeto em Java que amplia o repertório de estrutura e organização de aplicações.",
    techs: ["Java"],
    type: "Backend",
    github: "https://github.com/Adryan-Francisco/DevOps",
    live: null,
    featured: false,
  },
] as const

export const buildPrinciples = [
  { number: "01", title: "Produto", description: "Penso no fluxo completo que chega ao usuário, não apenas na implementação isolada." },
  { number: "02", title: "Arquitetura", description: "Organizo responsabilidades, domínio e regras de negócio para manter o código evolutivo." },
  { number: "03", title: "Integração", description: "Conecto interface, APIs, banco de dados e serviços em uma experiência coerente." },
  { number: "04", title: "Entrega", description: "Levo os projetos do repositório ao ambiente real, incluindo publicação e infraestrutura." },
] as const
