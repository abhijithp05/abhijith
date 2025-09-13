import { Button } from "@/components/ui/button";
import {
  emailId,
  footerLabel,
  getInTouchLabel,
  letsConnectLabel,
  location,
  navItems,
  phoneNumber,
  quickLinksLabel,
} from "@/constants/navigation.const";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {letsConnectLabel}
              </h3>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:shadow-glow h-12 w-12"
                  aria-label="github"
                  title="github"
                >
                  <a
                    href="https://github.com/abhijithp05"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:shadow-glow h-12 w-12"
                  aria-label="linkedin"
                  title="linkedin"
                >
                  <a
                    href="https://www.linkedin.com/in/abhijith-pillai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:shadow-glow h-12 w-12"
                  aria-label="email"
                  title="email"
                >
                  <a href="mailto:abhijithp05@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Abhijith,">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {quickLinksLabel}
              </h3>
              <div className="space-y-2">
                {navItems?.map((item) => (
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="block text-muted-foreground hover:text-foreground transition-smooth"
                    aria-label={item.label}
                    title={item.label}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {getInTouchLabel}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{emailId}</p>
                <p>{phoneNumber}</p>
                <p>{location}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground mt-2">{footerLabel}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
