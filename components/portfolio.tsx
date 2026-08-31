import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { HowIBuild } from "@/components/how-i-build"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Content } from "@/lib/content"
import { getResumeHref } from "@/lib/resume"

/** Página completa do portfólio, renderizada uma vez por idioma. */
export function Portfolio({ content }: { readonly content: Content }) {
  const resumeHref = getResumeHref()

  return (
    <>
      <Header nav={content.nav} />
      <main className="overflow-hidden">
        <Hero content={content} />
        <About content={content} />
        <TechStack content={content} />
        <Projects content={content} />
        <HowIBuild content={content} />
        <Contact content={content} resumeHref={resumeHref} />
      </main>
      <Footer content={content} />
    </>
  )
}
