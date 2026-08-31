import type { Content } from "@/lib/content"

export function HowIBuild({ content }: { readonly content: Content }) {
  const { build } = content

  return (
    <section className="section build-section" aria-labelledby="build-title">
      <div className="container">
        <div className="build-heading">
          <p className="eyebrow">{build.eyebrow}</p>
          <h2 id="build-title">{build.title}</h2>
        </div>
        <div className="principles-grid">
          {build.principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
