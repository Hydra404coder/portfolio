import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Users } from "lucide-react"
import { CodeBackground } from "./code-background"

const honors = [
  {
    title: "Hackathon Finalist",
    description: "Oracle-sponsored intercollegiate event",
    icon: <Trophy className="w-6 h-6" />,
    type: "Competition",
  },
  {
    title: "Smart India Hackathon (SIH) Selection",
    description: "National Level Competition",
    icon: <Award className="w-6 h-6" />,
    type: "National",
  },
  {
    title: "Event Organizer",
    description: "AI-powered Murder Mystery college fest",
    icon: <Users className="w-6 h-6" />,
    type: "Leadership",
  },
]

export function HonorsSection() {
  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Honors & Awards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and leadership achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {honors.map((honor, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 text-center group"
            >
              <CardHeader>
                <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                  <div className="text-accent">{honor.icon}</div>
                </div>
                <CardTitle className="font-heading text-lg">{honor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{honor.description}</p>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                  {honor.type}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
