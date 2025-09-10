import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing applications for speed and exceptional user experience"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Staying ahead with cutting-edge technologies and methodologies"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Leading cross-functional teams to deliver outstanding results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in frontend development, I specialize in creating 
                responsive, accessible, and high-performance web applications. My expertise spans 
                across modern JavaScript frameworks, with a particular passion for React and Next.js.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I believe in the power of great user experience and clean, maintainable code. 
                My approach combines technical excellence with creative problem-solving to deliver 
                solutions that not only work flawlessly but also delight users.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">React Expert</Badge>
                <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                <Badge variant="secondary" className="px-3 py-1">Next.js</Badge>
                <Badge variant="secondary" className="px-3 py-1">UI/UX Design</Badge>
                <Badge variant="secondary" className="px-3 py-1">Team Leadership</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth border-border/50">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-card-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}