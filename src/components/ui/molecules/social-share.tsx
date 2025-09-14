import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../atoms/button";

export const SocialShare = () => (
  <div className="flex gap-4 pt-4">
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
      <a
        href="mailto:abhijithp05@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Abhijith,"
        aria-label="Mail me"
      >
        <Mail className="h-5 w-5" />
      </a>
    </Button>
  </div>
);
