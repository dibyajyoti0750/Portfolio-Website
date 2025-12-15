import type { ReactElement } from "react";
import { assets } from "../assets/assets";

type Skills = {
  icon: string;
  title: string;
};

const skillsBadge: Skills[] = [
  { icon: assets.html, title: "HTML" },
  { icon: assets.css, title: "CSS" },
  { icon: assets.js, title: "JavaScript" },
  { icon: assets.react, title: "React JS" },
  { icon: assets.ts, title: "TypeScript" },
  { icon: assets.tailwind, title: "Tailwind" },
  { icon: assets.redux, title: "Redux" },
  { icon: assets.mongoDB, title: "Mongo DB" },
  { icon: assets.express, title: "Express JS" },
  { icon: assets.nodejs, title: "Node JS" },
  { icon: assets.git, title: "Git" },
  { icon: assets.github, title: "GitHub" },
];

export default function Skills(): ReactElement {
  const skillsStyles =
    "flex flex-col items-center justify-center gap-3 sm:gap-5 h-20 w-20 sm:h-24 sm:w-24 rounded font-semibold hover:bg-black hover:text-white transition-colors cursor-pointer border";

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center py-16 md:py-0 md:mb-32"
    >
      {/* Heading */}
      <div className="text-center text-3xl md:text-5xl font-medium mb-12">
        My <span className="font-black">Skills</span>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 text-center">
        {skillsBadge.map((item) => (
          <div key={item.title} className={skillsStyles}>
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
            <p className="text-xs md:text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
