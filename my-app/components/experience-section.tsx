import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Users } from "lucide-react"
import Image from "next/image"
import { CodeBackground } from "./code-background"

export function ExperienceSection() {
  return (
    <section className="py-20 bg-background relative">
      <CodeBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development and project leadership experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-lg">
                    <Image src="/google-logo.png" alt="Google" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Google Gemini Campus Ambassador</CardTitle>
                    <p className="text-accent font-medium">Google (via Communique Marketing Solutions)</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    Present - December 2025
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">Current</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Selected as a Campus Ambassador for Google Gemini AI, I drove product adoption and student engagement
                  across my campus. Through this role, facilitated by Communique Marketing Solutions, I organized
                  workshops, led community-building activities, collaborated with campus festivals, and activated 1,500+
                  hands-on trials of Google Gemini AI.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Spearheaded AI awareness initiatives and encouraged students to explore Gemini tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Represented Google Gemini in driving conversations around AI innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Developed leadership, event-management, and communication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Contributed directly to Google's campus-led AI initiatives in India</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Activated 1,500+ hands-on trials</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Campus Ambassador</Badge>
                <Badge variant="secondary">AI Advocacy</Badge>
                <Badge variant="secondary">Event Management</Badge>
                <Badge variant="secondary">Community Building</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">Google Gemini AI</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">Software Developer</CardTitle>
                    <p className="text-accent font-medium">Code Club</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    December 2024 - Present
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">Current</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-lg">AI Murder Mystery Interactive Game Development</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Developed full-stack interactive game using React frontend and FastAPI backend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Integrated Vertex AI for intelligent hint generation and dynamic storytelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Engineered multimedia interface supporting video, audio, and interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Optimized system architecture to handle 100+ concurrent participants</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Supported 100+ participants</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">Vertex AI</Badge>
                <Badge variant="secondary">Full-Stack Development</Badge>
                <Badge variant="secondary">System Architecture</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
