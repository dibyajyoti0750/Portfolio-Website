import type { ReactElement } from "react";
import { assets } from "../assets/assets";

export default function About(): ReactElement {
  return (
    <section
      id="about"
      className="bg-black flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 py-10 md:py-28 px-6 md:px-16 xl:px-32"
    >
      {/* Left: Image */}
      <div className="flex justify-center items-center bg-white rounded-xl">
        <img
          src={assets.about}
          alt="About me"
          className="w-full max-w-md md:max-w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 text-center md:text-left">
          About <span className="font-black">Me</span>
        </h1>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base text-justify">
          I'm someone who enjoys building things for the web and figuring out
          how everything fits together. I'm still learning, but I like the
          process of experimenting, breaking things, and slowly getting better
          at turning ideas into something real.
          <br />
          <br />
          I've been working across the frontend and backend as I grow. Some days
          I'm trying to make a layout feel smoother, and other days I'm dealing
          with simple backend logic or getting an API to behave. I don't know
          everything yet, but I enjoy picking up new tools and improving a
          little at a time.
          <br />
          <br />
          Right now, my goal is to build projects that actually work, load
          quickly, and feel good to use. I'm not trying to present myself as an
          expert. I'm just someone who likes creating things and wants to keep
          moving forward with every project I build.
        </p>
      </div>
    </section>
  );
}
