import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Exprerience from "@/components/Experience/Experience";
import Tech from "@/components/Tech/Tech";
import Works from "@/components/Works/Works";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Contact from "@/components/Contact/Contact";
import StarsCanvas from "@/components/StarsCanvas/StarsCanvas";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Exprerience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
