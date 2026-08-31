import type { Content } from "@/lib/content"
import { profile } from "@/lib/portfolio-data"

export function Footer({ content }: { readonly content: Content }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Adryan Francisco © {new Date().getFullYear()}</p>
        <p>{content.footer.builtWith}</p>
        <div>
          <a href={`mailto:${profile.email}`}>{content.footer.emailLabel}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
