import { Card, CardContent } from "@/components/ui/atoms/card";
import { Progress } from "@/components/ui/molecules/progress";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Webpack/Vite", level: 85 },
        { name: "Jest/Testing Library", level: 80 },
        { name: "Figma/Design Systems", level: 85 },
        { name: "Performance Optimization", level: 90 },
      ],
    },
    {
      title: "DevOps",
      skills: [{ name: "Vercel", level: 10 }],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth border-border/50"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-card-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
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
