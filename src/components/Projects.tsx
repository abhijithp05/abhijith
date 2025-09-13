import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Coach,
  SunbeltRentals,
  Mitchell,
  Portfolio,
  Furlenco,
  Keurig,
  Bukuwarung,
} from "@/assets";

export default function Projects() {
  const projects = [
    {
      title: "Coach",
      description:
        "A full-featured e-commerce platform built with Next.js and React JS. Features include product catalog, shopping cart, user authentication and checkout pages",
      image: Coach,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "React Testing Library",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "SFCC",
      ],
      liveUrl: "https://www.coach.com/?moov_rt=mw",
      featured: true,
    },
    {
      title: "Furlenco",
      description:
        "A furnitue rental platform based out of India built with Next.js and TypeScript",
      image: Furlenco,
      technologies: [
        "Next.js",
        "React Query",
        "React",
        "Redux Toolkit",
        "Jest",
        "React Testing Library",
        "TypeScript",
        "Tailwind CSS",
      ],
      liveUrl: "https://www.furlenco.com/unlmtd",
      featured: true,
    },
    {
      title: "Bukuwarung",
      description:
        "Bukuwarung is a digital platform that empowers small retailers in Indonesia by providing them with access to a wide range of products, competitive pricing, and efficient supply chain management.",
      image: Bukuwarung,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "TypeScript",
        "Tailwind CSS",
        "Tailwind CSS",
      ],
      liveUrl: "https://bukuwarung.com/bukuagen",
      featured: true,
    },
    {
      title: "Keurig",
      description:
        "Keurig is a leading beverage company known for its innovative single-serve coffee makers and a wide variety of coffee pods. The brand is synonymous with convenience, quality, and a personalized coffee experience.",
      image: Keurig,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "TypeScript",
        "Tailwind CSS",
        "Tailwind CSS",
      ],
      liveUrl: "https://keurig.com/",
    },
    {
      title: "Sunbelt Rentals",
      description:
        "Sunbelt Rentals provides the rental tools and equipment customers need to build and maintain across North America. They provide rental equipment and managed solutions into every market and sector including construction, industrial, energy, infrastructure and events.",
      image: SunbeltRentals,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "TypeScript",
        "Tailwind CSS",
        "HighchartsJS",
      ],
      liveUrl: "https://www.sunbeltrentals.com/",
      featured: true,
    },
    {
      title: "Mitchell",
      description:
        "Mitchell Connect Estimating is the latest cloud-based solution being developed & maintained by Mitchell. It is responsible for the creation of estimates in case of any damage to an insured vehicle.",
      image: Mitchell,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "TypeScript",
        "Tailwind CSS",
        "Enzyme",
        "HTML5",
        "CSS3",
      ],
      liveUrl:
        "https://ag.mymitchell.com/enterprise/authorization/m1/login?app=connect",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing responsive design, smooth animations, and optimal performance scores.",
      image: Portfolio,
      technologies: [
        "Next.js",
        "React",
        "Redux Toolkit",
        "Jest",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],
      liveUrl: "https://abhijithpillai.vercel.app/",
      githubUrl: "https://github.com/abhijithp05/abhijith",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-card-gradient shadow-card hover:shadow-elegant transition-smooth border-border/50 overflow-hidden ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-2 py-1 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      aria-label={`live-demo-${project.title}`}
                      title={`live-demo-${project.title}`}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`live-demo-${project.title}`}
                        title={`live-demo-${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        aria-label={`code-${project.title}`}
                        title={`code-${project.title}`}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
