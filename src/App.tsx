import type { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { dummyExperienceData } from "./assets/assets";
import About from "./components/About";
import Projects from "./components/Projects";
import MyTestimonials from "./components/MyTestimonials";

export default function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience data={dummyExperienceData} />
      <Projects />
      <About />
      <MyTestimonials />
    </div>
  );
}
