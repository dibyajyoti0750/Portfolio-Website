import type { ReactElement } from "react";
import { assets } from "../assets/assets";

export default function Footer(): ReactElement {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-6 flex items-center justify-between gap-6">
      {/* Left side - Logo + Title */}
      <div className="flex items-center gap-3">
        <img
          src={assets.ts}
          alt="logo"
          className="w-8 h-8 hover:scale-105 transition-transform duration-300"
        />
        <p className="text-sm md:text-xl font-medium tracking-wide">
          Personal{" "}
          <span className="text-blue-400 font-semibold">Portfolio</span>
        </p>
      </div>

      {/* Right side - Info */}
      <div className="text-right space-y-1 text-gray-300 text-xs md:text-base">
        <p className="hover:text-white transition-colors duration-300">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
        <p className="hover:text-blue-400 transition-colors duration-300">
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <span className="font-semibold text-white">DJ</span>
        </p>
      </div>
    </footer>
  );
}
