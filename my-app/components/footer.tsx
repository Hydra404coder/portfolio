import { Github, Linkedin, Code, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/akhil-dev404"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Hydra404coder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/Akhilshibu2710/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="mailto:akhilshibu2710@gmail.com"
              className="p-3 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading text-xl font-bold">Akhil Shibu</h3>
            <p className="text-muted-foreground">Software Developer AI, Web, and Data Systems</p>
          </div>

          <div className="pt-6 border-t border-accent/20">
            <p className="text-sm text-muted-foreground">
              © 2024 Akhil Shibu. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
