/**
 * Verifica se todo link externo do portfólio ainda responde.
 * Um repositório renomeado ou tornado privado vira um 404 silencioso em produção —
 * foi exatamente o que aconteceu com o case principal antes desta checagem existir.
 *
 * Uso: npm run check:links
 */
import { profile, projectSources } from "../lib/portfolio-data.ts"

// O LinkedIn responde 999 a clientes automatizados; não é um link quebrado.
const TOLERATED = new Map([[999, "bloqueio anti-bot"]])

const targets = [
  { label: "perfil GitHub", url: profile.github },
  { label: "perfil LinkedIn", url: profile.linkedin },
  ...projectSources.flatMap((project) => [
    project.github && { label: `${project.title} (repo)`, url: project.github },
    project.live && { label: `${project.title} (demo)`, url: project.live },
  ]),
].filter(Boolean)

async function check({ label, url }) {
  try {
    const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(20_000) })
    return { label, url, status: response.status, ok: response.ok || TOLERATED.has(response.status) }
  } catch (error) {
    return { label, url, status: error.name === "TimeoutError" ? "timeout" : "erro de rede", ok: false }
  }
}

const results = await Promise.all(targets.map(check))
const broken = results.filter((result) => !result.ok)

for (const { label, url, status, ok } of results) {
  const note = TOLERATED.get(status)
  console.log(`${ok ? "  ok  " : "FALHA "} ${String(status).padEnd(7)} ${label} — ${url}${note ? ` (${note})` : ""}`)
}

if (broken.length > 0) {
  console.error(`\n${broken.length} link(s) quebrado(s).`)
  process.exit(1)
}

console.log(`\n${results.length} links verificados, todos acessíveis.`)
