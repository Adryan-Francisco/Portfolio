"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"

import { navLinks, profile } from "@/lib/portfolio-data"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("sobre")

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Navegação principal">
        <a href="#top" className="brand" aria-label="Adryan Francisco — início">
          <span className="brand-mark">AF</span>
          <span className="brand-name">Adryan Francisco</span>
        </a>

        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className={activeSection === link.href.slice(1) ? "active" : ""} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="desktop-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub de Adryan"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Adryan"><Linkedin /></a>
        </div>

        <button className="menu-button" type="button" aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          <nav className="container" aria-label="Navegação mobile">
            {navLinks.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <span>0{index + 1}</span>{link.label}
              </a>
            ))}
            <div className="mobile-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
