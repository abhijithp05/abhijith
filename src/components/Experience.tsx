import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Sunbelt Rentals / Publicis Sapient",
      location: "India",
      period: "January 2023 – Till Date",
      description: [
        "Involved in various design discussions with the Architects.",
        "Understanding requirements & estimating the time to create an efficient solution.",
        "Creating new reusable components and separate UI repo which could be used in a variety of applications.",
        "Creating responsive pages for web applications which could be viewed properly on desktops as well as tablets.",
        "Writing Unit tests.",
      ],
      technologies: [
        "JavaScript",
        "React JS",
        "TypeScript",
        "NextJS",
        "Redux",
        "Jest",
        "HTML5",
        "CSS3",
        "Jenkins",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Financial Services (FS) / Bukuwarung",
      location: "India",
      period: "April 2022 – Nov 2022",
      description: [
        "Involved in various design discussions with the Architects.",
        "Understanding requirements & estimating the time to create an efficient solution.",
        "Creating UI components on the customer end and business partner end.",
        "Logging the events for each page direction, screen landing, and error pages to identify the traffic of the user and improving business by analyzing the logs with help of Amplitude, Clevertap, and DataDogs.",
        "Minimizing the bundle size and optimizing the code by shifting the commonly used React components into a separate UI repo.",
      ],
      technologies: [
        "JavaScript",
        "React JS",
        "NextJS",
        "Redux",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Jenkins",
        "Amplitude",
        "CleverTap",
        "DataDogs",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Mitchell Connect Estimating (MCE) / Mitchell (USA)",
      location: "India",
      period: "October 2017 – April 2022",
      description: [
        "Involved in various design discussions with the Architects.",
        "Understanding requirements & estimating the time to create an efficient solution.",
        "Creating UI components on the customer end and business partner end.",
      ],
      technologies: [
        "JavaScript",
        "React JS",
        "TypeScript",
        "Gulp",
        "Webpack",
        "Visual Studio 2017",
        "Jest",
        "HTML5",
        "CSS3",
        "Jenkins",
      ],
    },
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
              <Card
                key={index}
                className="bg-card-gradient shadow-card hover:shadow-elegant transition-smooth border-border/50"
              >
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
                      <li
                        key={itemIndex}
                        className="text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="px-3 py-1"
                      >
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
