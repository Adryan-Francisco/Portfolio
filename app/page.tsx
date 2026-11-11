import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { HowIBuild } from "@/components/how-i-build"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal-observer"

export default function Home() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
