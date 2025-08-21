"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Github, Linkedin, Code, Mail, Phone, MapPin } from "lucide-react"
import dynamic from "next/dynamic"

// Lazy-load CodeBackground (no SSR, loads after main UI)
const CodeBackground = dynamic(
  () => import("./code-background").then((m) => m.CodeBackground),
  { ssr: false, loading: () => null }
)

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const tickingRef = useRef(false)
  const fullText = "Software Developer AI, Web, and Data Systems"

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Throttled scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          tickingRef.current = false
        })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-card pt-16">
      <CodeBackground />

      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-accent/20 rounded-full animate-float"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div
            className="mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/50 animate-glow flex items-center justify-center overflow-hidden animate-slide-in-left"
            style={{
              transform: `translateX(${-scrollY * 0.5}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/profile.jpg"
              alt="Akhil Shibu Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Name and Title */}
          <div
            className="space-y-4 animate-slide-in-left-delayed"
            style={{
              transform: `translateX(${-scrollY * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Akhil Shibu
            </h1>
            <div className="h-8 flex justify-center">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-slide-in-left-more-delayed"
            style={{
              transform: `translateX(${-scrollY * 0.2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>akhilshibu2710@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9110498595</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-slide-in-left-most-delayed"
            style={{
              transform: `translateX(${-scrollY * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow" asChild>
              <a href="https://www.linkedin.com/in/akhil-dev404" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="https://github.com/Hydra404coder" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
              asChild
            >
              <a href="https://www.hackerrank.com/profile/akhilshibu2710" target="_blank" rel="noopener noreferrer">
                <Code className="w-5 h-5 mr-2" />
                HackerRank
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="https://leetcode.com/u/Akhilshibu2710/" target="_blank" rel="noopener noreferrer">
                <Code className="w-5 h-5 mr-2" />
                LeetCode
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
