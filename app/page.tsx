import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { HonorsSection } from "@/components/honors-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroSection />

      <ScrollReveal direction="up" delay={100}>
        <div id="skills">
          <SkillsSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={200}>
        <div id="education">
          <EducationSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={100}>
        <div id="experience">
          <ExperienceSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <div id="projects">
          <ProjectsSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={100}>
        <div id="honors">
          <HonorsSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={200}>
        <div id="certifications">
          <CertificationsSection />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <ContactSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={50}>
        <Footer />
      </ScrollReveal>
    </main>
  )
}
