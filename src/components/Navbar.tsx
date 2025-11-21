import { useState, type ReactElement } from "react";
import { assets } from "../assets/assets";
import { Download, MenuIcon } from "lucide-react";

type NavLink = {
  title: string;
  link: string;
};

const navLinks: NavLink[] = [
  { title: "About Me", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact Me", link: "#contact" },
];

export default function Navbar(): ReactElement {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="w-full bg-white py-5 mb-5 md:mb-0 font-semibold">
      <div className="flex justify-between px-10 md:justify-around items-center">
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="w-12 h-12" />
          <p>Dibyajyoti</p>
        </div>

        <button
          className="md:hidden cursor-pointer focus:outline-none"
          onClick={() => setShowLinks(!showLinks)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="rounded p-2 hover:bg-gray-100"
            >
              {item.title}
            </a>
          ))}
        </div>

        <button
          onClick={() => alert("It will be available after I create one 😅")}
          className="hidden md:flex items-center gap-2 bg-black text-white rounded py-2 px-4 hover:bg-gray-900 transition cursor-pointer"
        >
          Resume <Download className="w-4 h-4" />
        </button>
      </div>

      <div
        className={`
        md:hidden overflow-hidden transition-all duration-300
        ${
          showLinks
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-3"
        }
      `}
      >
        <div className="flex flex-col gap-2 my-4 px-10 text-center">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="rounded p-1 hover:bg-gray-100"
            >
              {item.title}
            </a>
          ))}
          <button
            onClick={() => alert("It will be available after I create one 😅")}
            className="flex items-center justify-center gap-2 bg-black text-white rounded mt-2 py-2 px-4 hover:bg-gray-900 transition cursor-pointer"
          >
            Resume <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
