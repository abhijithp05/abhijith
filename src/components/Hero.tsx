import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Sparkles,
} from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-primary-glow/10 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary-glow/10 rounded-full blur-xl animate-pulse delay-700" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Senior</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Frontend
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Crafting exceptional user experiences with modern web
              technologies. Passionate about clean code, performance, and
              innovative solutions that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="group shadow-glow"
                aria-label="view-my-work"
                title="view-my-work"
              >
                View My Work
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button asChild variant="outline" size="xl" className="group">
                <a
                  href="https://drive.google.com/file/d/1EBklxZsw9pnxZvivkj0EZf7sAfTYzGfk/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="download-cv"
                  title="download-cv"
                >
                  <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform hover:shadow-glow"
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
                className="hover:scale-110 transition-transform hover:shadow-glow"
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
                className="hover:scale-110 transition-transform hover:shadow-glow"
                aria-label="email"
                title="email"
              >
                <a href="mailto:abhijithp05@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Abhijith,">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Code preview */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Floating code cards */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-elegant backdrop-blur-sm rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  const App = () =&gt; &#123;&#125;
                </div>
              </div>

              <div className="absolute top-20 -left-8 bg-card border border-border rounded-lg p-4 shadow-elegant backdrop-blur-sm -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  interface Props &#123;&#125;
                </div>
              </div>

              <div className="absolute bottom-4 right-8 bg-card border border-border rounded-lg p-4 shadow-elegant backdrop-blur-sm rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Tailwind</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  @apply flex items-center
                </div>
              </div>

              {/* Main code block */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-primary">function</span>{" "}
                      createAmazingUI() &#123;
                    </div>
                    <div className="text-muted-foreground pl-4">
                      <span className="text-primary">return</span> (
                    </div>
                    <div className="text-muted-foreground pl-8">
                      &lt;<span className="text-primary">Experience</span>
                    </div>
                    <div className="text-muted-foreground pl-12">
                      quality=
                      <span className="text-green-400">"exceptional"</span>
                    </div>
                    <div className="text-muted-foreground pl-12">
                      performance=
                      <span className="text-green-400">"optimized"</span>
                    </div>
                    <div className="text-muted-foreground pl-8">/&gt;</div>
                    <div className="text-muted-foreground pl-4">);</div>
                    <div className="text-muted-foreground">&#125;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
