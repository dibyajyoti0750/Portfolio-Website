import type { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}
