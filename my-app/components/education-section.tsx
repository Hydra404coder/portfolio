import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"
import { CodeBackground } from "./code-background"

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Artificial Intelligence and Machine Learning",
    institution: "Atria Institute of Technology Bangalore",
    period: "August 2023 - July 2027",
    grade: "CGPA: 8.67",
    status: "Current",
  },
  {
    degree: "Pre-University Course",
    field: "Science",
    institution: "St. Joseph's Pre-University College",
    period: "2021 - 2023",
    grade: "85.5%",
    status: "Completed",
  },
  {
    degree: "Secondary School",
    field: "General Education",
    institution: "St Marys Public School",
    period: "2008 - 2021",
    grade: "89.89%",
    status: "Completed",
  },
]

export function EducationSection() {
  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey in AI/ML and computer science fundamentals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">{edu.degree}</CardTitle>
                      <p className="text-accent font-medium">{edu.field}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-medium text-accent">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-foreground font-medium">{edu.institution}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === "Current" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
