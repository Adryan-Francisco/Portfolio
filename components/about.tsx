import type { Content } from "@/lib/content"
import { SectionHeader } from "@/components/ui/section-header"

export function About({ content }: { readonly content: Content }) {
  const { about } = content

  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeader index="01" eyebrow={about.eyebrow} title={about.title} />
        <div className="about-grid">
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="expertise-list">
            {about.expertise.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
