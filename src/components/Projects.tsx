import { Timeline } from "./ui/Timeline";

const projectImages = {
  glowup: [
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570486/ss1_voymp1.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570311/ss2_uwchoj.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570310/ss3_zmiclc.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570310/ss4_doltv4.png",
  ],
  vibewallz: [
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570326/ss5_xwimwy.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570325/ss6_zr5mhv.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570324/ss7_nbdfz5.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570324/ss8_gxwqzq.png",
  ],
  geminic: [
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570343/ss9_iqy9wt.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570343/ss10_xlejoy.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570342/ss11_iputyj.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763570342/ss12_lnmqoa.png",
  ],
};

export default function Projects() {
  const data = [
    {
      title: "GlowUp",
      link: "https://glow-up-social-media-app-prod-front.vercel.app",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            A clean and responsive social platform where users can share posts,
            connect, and engage easily. Built with a modern MERN stack setup for
            smooth and fast interactions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {projectImages.glowup.map((url) => (
              <img
                onClick={() => window.open(url, "_blank")}
                src={url}
                title="View image"
                alt="template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "VibeWallz",
      link: "https://vibewallz-ai.onrender.com",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            An AI powered platform that generates unique wallpapers from simple
            text prompts. Built to deliver clean, high quality visuals with a
            smooth user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {projectImages.vibewallz.map((url) => (
              <img
                onClick={() => window.open(url, "_blank")}
                src={url}
                title="View image"
                alt="template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Geminic",
      link: "https://react-gemini-clone-rho.vercel.app",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm">
            A React based chatbot application that delivers a polished
            conversational experience. Built with a focus on usability, speed,
            and clean UI.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {projectImages.geminic.map((url) => (
              <img
                onClick={() => window.open(url, "_blank")}
                src={url}
                title="View image"
                alt="template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover cursor-pointer shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="projects" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </section>
  );
}
