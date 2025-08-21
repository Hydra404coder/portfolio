"use client"

import { useState, useEffect, useMemo } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navItems = useMemo(() => [
    { name: "Technical Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Honors & Awards", href: "#honors" },
    { name: "Certifications", href: "#certifications" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + window.innerHeight / 3
      let currentSection = ""

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = window.scrollY + rect.top
          if (scrollPosition >= elementTop) {
            currentSection = section
            break
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, navItems])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      setActiveSection(href.substring(1))
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#f2f2f2]/85 backdrop-blur-md border-b border-border overflow-hidden"
    >
      {/* Binary animation overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`nav-binary-${i}`}
            className="absolute text-cyan-400/30 font-mono animate-binary-rain"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              fontSize: `${10 + Math.random() * 8}px`,
              textShadow: "0 0 6px rgba(6,182,212,0.6)",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative z-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-heading font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 drop-shadow-md">
              Akhil Shibu
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                      : "text-muted-foreground hover:text-cyan-400 hover:shadow-[0_0_6px_rgba(6,182,212,0.4)]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-cyan-400 hover:shadow-[0_0_6px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#f2f2f2]/90 backdrop-blur-md border-b border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? "text-cyan-400 bg-cyan-400/10 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                    : "text-muted-foreground hover:text-cyan-400 hover:shadow-[0_0_6px_rgba(6,182,212,0.4)]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
