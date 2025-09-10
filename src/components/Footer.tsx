import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-4">
                Always open to discussing new opportunities and exciting projects.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>john.doe@example.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by Senior Frontend Developer
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}