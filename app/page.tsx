import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { HowIBuild } from "@/components/how-i-build"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
