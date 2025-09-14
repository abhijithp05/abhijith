import { Suspense, lazy } from "react";
import { Navigation } from "@/components/ui/sections/Navigation";
import { Hero } from "@/components/ui/sections/Hero";
import { ThemeToggle } from "@/components/ui/sections/ThemeToggle";

const About = lazy(() => import("@/components/ui/sections/About"));
const Contact = lazy(() => import("@/components/ui/sections/Contact"));
const Footer = lazy(() => import("@/components/ui/sections/Footer"));
const Skills = lazy(() => import("@/components/ui/sections/Skills"));
const Experience = lazy(() => import("@/components/ui/sections/Experience"));
const Projects = lazy(() => import("@/components/ui/sections/Projects"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <Hero />

      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
