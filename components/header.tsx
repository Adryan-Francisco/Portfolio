"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"

import type { Content } from "@/lib/content"
import { profile } from "@/lib/portfolio-data"

// Recebe apenas a fatia de navegação: como este é um Client Component, tudo o que
// chega por props é serializado no payload enviado ao browser.
export function Header({ nav }: { readonly nav: Content["nav"] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(nav.links[0].href.slice(1))
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const sections = nav.links
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section))

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }

        // Sempre destaca a seção visível mais alta na página, inclusive ao rolar para cima.
        const current = sections.find((section) => visible.has(section.id))
        if (current) setActiveSection(current.id)
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [nav.links])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
        return
      }

      if (event.key !== "Tab") return

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || active === menuButtonRef.current)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, closeMenu])

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label={nav.mainLabel}>
        <a href="#top" className="brand" aria-label={nav.brandLabel}>
          <span className="brand-mark">AF</span>
          <span className="brand-name">Adryan Francisco</span>
        </a>

        <ul className="desktop-nav">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                className={activeSection === link.href.slice(1) ? "active" : ""}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="desktop-socials">
          <a className="language-switch" href={nav.otherLanguage.href} hrefLang={nav.otherLanguage.href === "/en" ? "en" : "pt-BR"} aria-label={nav.languageLabel}>
            {nav.otherLanguage.code}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label={nav.githubLabel}>
            <Github />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={nav.linkedinLabel}>
            <Linkedin />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-label={isOpen ? nav.closeMenu : nav.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <nav className="container" aria-label={nav.mobileLabel}>
            {nav.links.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
            <div className="mobile-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn
              </a>
              <a href={nav.otherLanguage.href} hrefLang={nav.otherLanguage.href === "/en" ? "en" : "pt-BR"}>
                {nav.otherLanguage.label}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
