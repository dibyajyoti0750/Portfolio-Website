import type { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
