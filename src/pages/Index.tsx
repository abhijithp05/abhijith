import { Suspense, lazy } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Projects"));

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
