"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { BadgeIcon as Certificate, Brain, BarChart3, Zap, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import { CodeBackground } from "./code-background"

const certifications = [
  {
    provider: "Deloitte",
    title: "Data Analytics Job Simulation",
    description:
      "Comprehensive data analytics simulation covering real-world business scenarios, statistical analysis, data visualization, and business intelligence techniques used in professional consulting environments",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "Data Analytics",
    logo: "/deloitte-logo.png",
    certificateUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_prTZvrKxa9ESSyNcD_1751038230689_completion_certificate.pdf",
    certificateImage:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_prTZvrKxa9ESSyNcD_1751038230689_completion_certificate.pdf",
  },
  {
    provider: "Deloitte",
    title: "Technology Job Simulation",
    description:
      "Technology consulting simulation focusing on digital transformation, cloud architecture, cybersecurity frameworks, and technical solutions for enterprise-level challenges",
    icon: <Zap className="w-6 h-6" />,
    category: "Technology",
    logo: "/deloitte-logo.png",
    certificateUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_prTZvrKxa9ESSyNcD_1751045015775_completion_certificate.pdf",
    certificateImage:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_prTZvrKxa9ESSyNcD_1751045015775_completion_certificate.pdf",
  },
  {
    provider: "Microsoft",
    title: "Getting Started with AI Agents in GitHub Copilot",
    description:
      "Advanced course on leveraging AI agents, GitHub Copilot integration, automated code generation, and intelligent development workflows for enhanced productivity",
    icon: <Brain className="w-6 h-6" />,
    category: "AI/ML",
    logo: "/microsoft-logo.png",
    certificateUrl: "https://courses.edx.org/certificates/80a8ca6e5d314460aa4bc0f9bfceb85b",
    certificateImage: "https://courses.edx.org/certificates/80a8ca6e5d314460aa4bc0f9bfceb85b",
  },
  {
    provider: "Microsoft",
    title: "Use AI for Everyday Tasks",
    description:
      "Practical applications of AI tools, automation techniques, productivity enhancement, and integration of AI solutions into daily workflows and business processes",
    icon: <Brain className="w-6 h-6" />,
    category: "AI/ML",
    logo: "/microsoft-logo.png",
    certificateUrl: "https://courses.edx.org/certificates/59303e5ef40a49cb9e65f723d27d3160",
    certificateImage: "https://courses.edx.org/certificates/59303e5ef40a49cb9e65f723d27d3160",
  },
  {
    provider: "Google",
    title: "Introduction to Generative AI",
    description:
      "Foundational course covering generative AI concepts, neural network architectures, transformer models, and practical applications in content generation and automation",
    icon: <Zap className="w-6 h-6" />,
    category: "AI/ML",
    logo: "/google-cloud-logo.png",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8933495?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    certificateImage:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8933495?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    provider: "Google",
    title: "Introduction to Large Language Models",
    description:
      "Deep dive into LLM architecture, training methodologies, attention mechanisms, fine-tuning techniques, and practical implementations for natural language processing",
    icon: <Brain className="w-6 h-6" />,
    category: "AI/ML",
    logo: "/google-cloud-logo.png",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8933932?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    certificateImage:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8933932?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    provider: "Google",
    title: "Prompt Design in Vertex AI",
    description:
      "Advanced prompt engineering techniques, optimization strategies, few-shot learning, chain-of-thought prompting, and best practices for Vertex AI model interactions",
    icon: <Zap className="w-6 h-6" />,
    category: "AI/ML",
    logo: "/google-cloud-logo.png",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8980915?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    certificateImage:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8980915?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    provider: "Google",
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    description:
      "Ethical AI development, bias detection and mitigation, fairness in machine learning, responsible AI deployment practices, and governance frameworks for AI systems",
    icon: <Certificate className="w-6 h-6" />,
    category: "AI Ethics",
    logo: "/google-cloud-logo.png",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8934901?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    certificateImage:
      "https://www.cloudskillsboost.google/public_profiles/59a675db-b43b-419d-a094-751c087123ab/badges/8934901?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
]

export function CertificationsSection() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)
  const [binaryStrings, setBinaryStrings] = useState<string[]>([])

  useEffect(() => {
    const generateBinary = () => {
      const strings: string[] = []
      for (let i = 0; i < 20; i++) {
        let binary = ""
        for (let j = 0; j < 8; j++) {
          binary += Math.random() > 0.5 ? "1" : "0"
        }
        strings.push(binary)
      }
      setBinaryStrings(strings)
    }

    generateBinary()
    const interval = setInterval(generateBinary, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group relative overflow-hidden"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {hoveredCert === index && (
                <>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
                    {binaryStrings.map((binary, i) => (
                      <div
                        key={i}
                        className="absolute text-accent/30 text-xs font-mono animate-pulse"
                        style={{
                          left: `${(i * 5) % 100}%`,
                          top: `${(i * 7) % 100}%`,
                          animationDelay: `${i * 0.1}s`,
                          transform: `rotate(${i * 15}deg)`,
                        }}
                      >
                        {binary}
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background/95 to-accent/10 backdrop-blur-sm z-10 flex items-center justify-center p-4 transition-all duration-300">
                    <div className="text-center space-y-4 relative z-20">
                      <div className="p-4 bg-accent/10 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                        {cert.icon}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg hover:from-accent/90 hover:to-accent/70 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-accent/20 transform hover:scale-105"
                      >
                        View Certificate <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </>
              )}

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <img
                    src={cert.logo || "/placeholder.svg"}
                    alt={`${cert.provider} logo`}
                    className="h-8 object-contain opacity-80"
                  />
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    {cert.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="font-semibold text-accent text-sm">{cert.provider}</p>
                  <CardTitle className="font-heading text-base leading-tight">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-base font-bold text-cyan-400 drop-shadow-md">Hover over certificates to view details and access links</p>
        </div>
      </div>
    </section>
  )
}
