"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { profile } from "@/lib/portfolio-data"

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetoria", href: "#experiencia" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-white/6 bg-background/78 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 font-mono text-xs tracking-[0.25em] text-primary">
            AF
          </span>
          <span className="hidden text-sm font-medium text-foreground sm:inline">
            {profile.firstName} Francisco
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-b border-white/6 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="section-shell px-6 py-5">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Acessar LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
