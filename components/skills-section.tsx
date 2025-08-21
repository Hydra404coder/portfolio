"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBackground } from "./code-background"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "HTML/CSS", level: 90 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "React", level: 85 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "PyTorch", level: 75 },
      { name: "YOLOv5", level: 70 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Google Colab", level: 80 },
      { name: "Power BI", level: 70 },
      { name: "Tableau", level: 65 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
]

function SkillBar({ skill, isVisible }: { skill: { name: string; level: number }; isVisible: boolean }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(skillCategories.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el
  }, [])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full spectrum of AI/ML development, web technologies, and data systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              ref={(el) => setCardRef(el, categoryIndex)}
              className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <CardTitle className="font-heading text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} isVisible={visibleCards[categoryIndex]} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
