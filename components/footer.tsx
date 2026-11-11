import { profile } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="container mono">
        <p>Adryan Francisco © 2026</p>
        <nav aria-label="Links do rodapé">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top">Voltar ao topo ↑</a>
        </nav>
        <p>Next.js + TypeScript</p>
      </div>
    </footer>
  )
}
