import type { ReactElement } from "react";
import { assets } from "../assets/assets";
import SocialMedia from "./SocialMedia";

export default function Hero(): ReactElement {
  return (
    <section className="min-h-screen flex flex-col justify-start px-6 md:px-28 xl:px-56">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10">
        {/* Text Section */}
        <div className="lg:col-span-3 flex flex-col gap-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-left">
          <h1>
            Hello I'm <span className="font-black">DJ.</span>
          </h1>
          <h1 className="leading-tight">
            <span className="font-black">Full-Stack </span>
            <span className="font-black text-blue-500">Developer</span>
          </h1>
          <h1>
            Based In <span className="font-black">India.</span>
          </h1>

          <p className="text-sm md:text-base text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Hi, my name is Dibyajyoti Pramanick. I'm a passionate full-stack
            developer with a love for creating fast, modern, and visually
            appealing web experiences.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center">
          <img
            src={assets.hero}
            alt="Hero image"
            className="scale-x-[-1] w-full h-auto lg:h-[80vh] object-contain"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <SocialMedia />
    </section>
  );
}
