import { Timeline } from "./ui/Timeline";

const projectImages = {
  glowup: [
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763483164/ss1_mfwyei.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763483164/ss2_db5mtz.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763483162/ss3_yvs7ux.png",
    "https://res.cloudinary.com/dqw6dicdi/image/upload/v1763483162/ss4_qv3o06.png",
  ],
  vibewallz: [
    "https://placehold.co/600x400?text=Image+One",
    "https://placehold.co/600x400?text=Image+Two",
    "https://placehold.co/600x400?text=Image+Three",
    "https://placehold.co/600x400?text=Image+Four",
  ],
  geminic: [
    "https://placehold.co/600x400?text=Image+One",
    "https://placehold.co/600x400?text=Image+Two",
    "https://placehold.co/600x400?text=Image+Three",
    "https://placehold.co/600x400?text=Image+Four",
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
