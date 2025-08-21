"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Brain, Video, Bike } from "lucide-react"
import { CodeBackground } from "./code-background"

const projects = [
  {
    title: "Sustainable Fertilizer Optimizer using Integrated GIS and Machine Learning",
    description:
      "GIS-integrated fertilizer recommendation system with precision mapping, real-time soil metrics processing, and interactive UI with dynamic visualizations",
    icon: <Database className="w-6 h-6" />,
    technologies: ["Firebase", "Python", "JSON", "Flask", "HTML", "Pandas", "QGIS", "TensorFlow"],
    features: [
      "Precision mapping with GIS integration",
      "Real-time soil metrics processing",
      "Interactive UI with dynamic visualizations",
      "Machine learning-based recommendations",
    ],
    category: "AI/ML",
  },
  {
    title: "Real-Time Dumper Load Monitoring System (RTDLS)",
    description:
      "IoT-based load monitoring for mining with LoRaWAN communication, 95% accuracy, cloud analytics dashboard",
    icon: <Code className="w-6 h-6" />,
    technologies: ["Embedded C", "nrf24l01", "RFID", "Arduino Uno", "Weighing Load Cell Sensor YZC-131", "HX711"],
    features: ["IoT-based load monitoring", "LoRaWAN communication", "95% accuracy rate", "Cloud analytics dashboard"],
    category: "IoT",
  },
  {
    title: "AI-Driven Interactive Murder Mystery Competition",
    description:
      "Video-based interactive game with real-time AI hints, multimedia interface, optimized for 100+ concurrent users",
    icon: <Brain className="w-6 h-6" />,
    technologies: ["React", "FastAPI", "Vertex AI", "HTML", "CSS", "JavaScript"],
    features: [
      "Video-based interactive gameplay",
      "Real-time AI hint generation",
      "Multimedia interface",
      "100+ concurrent user support",
    ],
    category: "AI/ML",
  },
  {
    title: "BikeLink",
    description:
      "Responsive web platform for bike enthusiasts with smooth scrolling, interactive effects, cross-browser compatibility",
    icon: <Bike className="w-6 h-6" />,
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "Git"],
    features: [
      "Responsive web design",
      "Smooth scrolling effects",
      "Interactive user interface",
      "Cross-browser compatibility",
    ],
    category: "Web",
  },
  {
    title: "Object Scope: Video Stream Object Detection",
    description:
      "Real-time object detection web app with video streaming, file uploads, low-latency in-browser detection",
    icon: <Video className="w-6 h-6" />,
    technologies: ["YOLOv5", "Flask", "MediaPipe", "OpenCV", "PyTorch"],
    features: [
      "Real-time object detection",
      "Video streaming support",
      "File upload functionality",
      "Low-latency in-browser detection",
    ],
    category: "AI/ML",
  },
]

const categories = ["All", "AI/ML", "Web", "IoT"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning AI/ML, web development, and IoT systems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-muted/50 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-accent text-accent-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent/20 transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="font-heading text-lg leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
