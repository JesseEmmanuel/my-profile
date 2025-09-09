import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 dark:text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-2 dark:text-white">Jesse Emmanuel Basco</h3>
            <p className="text-muted-foreground dark:text-white">Software Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="mailto:jesseemmanuel@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 dark:text-white" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 dark:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 dark:text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center dark:text-white w-full">
          <p className="text-muted-foreground text-sm dark:text-white">
            © {new Date().getFullYear()} Jesse Emmanuel Basco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
