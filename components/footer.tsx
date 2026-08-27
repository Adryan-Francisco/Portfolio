import { profile } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Adryan Francisco © 2026</p>
        <p>Desenvolvido com Next.js + TypeScript</p>
        <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
    </footer>
  )
}
