export type ProjectId =
  | "barberflow"
  | "agenda-medica"
  | "sic"
  | "controle-estoque"
  | "angular-supabase-crud"
  | "web-api-dotnet-react"
  | "crudnn"
  | "projeto-ead"
  | "devops"

/** Dados estáveis de cada projeto. Textos traduzíveis vivem em `lib/content`. */
export interface ProjectSource {
  readonly id: ProjectId
  readonly title: string
  readonly techs: readonly string[]
  /** `null` quando o repositório é privado — nunca aponte para uma URL que retorna 404. */
  readonly github: string | null
  readonly live: string | null
  readonly featured: boolean
}

export const profile = {
  firstName: "Adryan",
  fullName: "Adryan Thiago de Oliveira Francisco",
  location: "Brasil",
  email: "adryanfrancisco62@gmail.com",
  github: "https://github.com/Adryan-Francisco?tab=repositories",
  linkedin: "https://www.linkedin.com/in/adryan-francisco",
  githubUsername: "Adryan-Francisco",
} as const

export const siteUrl = "https://portfolio-adryanf.vercel.app"

/** Currículo opcional: o botão só é exibido quando o arquivo existe em `public/`. */
export const resumeFile = "curriculo.pdf"

/** Ordenados por força do case: o que um recrutador vê primeiro é o que mais prova. */
export const projectSources: readonly ProjectSource[] = [
  {
    id: "barberflow",
    title: "BarberFlow",
    techs: ["Next.js", "TypeScript", "SaaS", "Vercel"],
    github: null,
    live: "https://appbarberflow.com.br",
    featured: true,
  },
  {
    id: "agenda-medica",
    title: "Agenda Médica",
    techs: ["Python", "Flask", "SQLAlchemy", "Docker", "Pytest"],
    github: "https://github.com/Adryan-Francisco/Agenda-Medica",
    live: null,
    featured: false,
  },
  {
    id: "sic",
    title: "SIC",
    techs: ["C#", ".NET 8", "EF Core", "DDD", "xUnit"],
    github: "https://github.com/Adryan-Francisco/SIC",
    live: null,
    featured: false,
  },
  {
    id: "controle-estoque",
    title: "Controle de estoque",
    techs: ["React", "Vite", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Adryan-Francisco/controle-estoque",
    live: "https://adryan-francisco.github.io/controle-estoque/",
    featured: false,
  },
  {
    id: "angular-supabase-crud",
    title: "Angular Supabase Dashboard",
    techs: ["Angular", "TypeScript", "Angular Material", "Supabase"],
    github: "https://github.com/Adryan-Francisco/angular-supabase-crud",
    live: null,
    featured: false,
  },
  {
    id: "web-api-dotnet-react",
    title: "Web API .NET + React",
    techs: ["C#", ".NET", "EF Core", "React"],
    github: "https://github.com/Adryan-Francisco/Web-Api-em-.Net-React",
    live: null,
    featured: false,
  },
  {
    id: "crudnn",
    title: "CRUDNN",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Adryan-Francisco/CRUDNN",
    live: null,
    featured: false,
  },
  {
    id: "projeto-ead",
    title: "Projeto EAD",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Adryan-Francisco/ProjetoEAD",
    live: null,
    featured: false,
  },
  {
    id: "devops",
    title: "DevOps",
    techs: ["Java", "Maven"],
    github: "https://github.com/Adryan-Francisco/DevOps",
    live: null,
    featured: false,
  },
] as const
