import type { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { dummyExperienceData } from "./assets/assets";
import About from "./components/About";

export default function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Experience data={dummyExperienceData} />
      <About />
    </div>
  );
}
