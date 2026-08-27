import { buildPrinciples } from "@/lib/portfolio-data"

export function HowIBuild() {
  return (
    <section className="section build-section" aria-labelledby="build-title">
      <div className="container">
        <div className="build-heading"><p className="eyebrow">Processo</p><h2 id="build-title">Como eu construo</h2></div>
        <div className="principles-grid">
          {buildPrinciples.map((principle) => (
            <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.description}</p></article>
          ))}
        </div>
      </div>
    </section>
  )
}
