"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}

export function ScrollReveal({ children, direction = "up", delay = 0, className = "" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    const currentRef = ref.current
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const getTransformClass = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} translate-y-16 opacity-0`
        case "down":
          return `${baseClasses} -translate-y-16 opacity-0`
        case "left":
          return `${baseClasses} translate-x-16 opacity-0`
        case "right":
          return `${baseClasses} -translate-x-16 opacity-0`
        default:
          return `${baseClasses} translate-y-16 opacity-0`
      }
    }

    return `${baseClasses} translate-y-0 translate-x-0 opacity-100`
  }

  return (
    <div ref={ref} className={`${getTransformClass()} ${className}`}>
      {children}
    </div>
  )
}
