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
  { icon: assets.ts, title: "TypeScript" },
  { icon: assets.tailwind, title: "Tailwind CSS" },
  { icon: assets.react, title: "React JS" },
  { icon: assets.nodejs, title: "Node JS" },
  { icon: assets.express, title: "Express JS" },
  { icon: assets.mongoDB, title: "Mongo DB" },
  { icon: assets.git, title: "Git" },
  { icon: assets.github, title: "GitHub" },
];

export default function Skills(): ReactElement {
  return (
    <div className="flex flex-col space-y-4 md:-mt-16 px-6 md:px-28 xl:px-56">
      <div className="text-center text-2xl md:text-4xl mb-20">
        My <span className="font-black">Skills</span>
      </div>

      <div className="flex justify-center text-sm text-center gap-4">
        {skillsBadge.slice(0, 5).map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center gap-5 border h-24 w-24 rounded font-semibold hover:bg-black hover:text-white cursor-pointer"
          >
            <img src={item.icon} className="w-8 h-8" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center text-sm text-center gap-4">
        {skillsBadge.slice(5, skillsBadge.length).map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center gap-5 border h-24 w-24 rounded font-semibold hover:bg-black hover:text-white cursor-pointer"
          >
            <img src={item.icon} className="w-8 h-8" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
