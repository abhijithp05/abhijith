import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led a team of 5 developers in building a complex dashboard application using React and TypeScript",
        "Improved application performance by 40% through code splitting and optimization techniques",
        "Implemented comprehensive testing strategies resulting in 95% code coverage",
        "Mentored junior developers and established coding standards and best practices"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed responsive web applications for clients in e-commerce and fintech sectors",
        "Collaborated with UX/UI designers to create pixel-perfect implementations",
        "Integrated third-party APIs and payment gateways",
        "Optimized applications for mobile devices and cross-browser compatibility"
      ],
      technologies: ["React", "JavaScript", "SCSS", "RESTful APIs", "Redux"]
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Built interactive user interfaces using React and modern JavaScript",
        "Worked closely with backend developers to integrate APIs",
        "Participated in agile development processes and code reviews",
        "Contributed to the company's design system and component library"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in frontend development
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
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