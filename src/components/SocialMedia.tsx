import type { ElementType, ReactElement } from "react";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

type SocialLink = {
  Icon: ElementType;
  url: string;
};

const socials: SocialLink[] = [
  { Icon: Github, url: "https://github.com/dibyajyoti0750" },
  { Icon: Twitter, url: "https://x.com/developer_dj_" },
  { Icon: Linkedin, url: "https://www.linkedin.com/in/dibyajyotipramanick/" },
  { Icon: Instagram, url: "https://www.instagram.com/developer_dj/" },
];

export default function SocialMedia(): ReactElement {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      {socials.map(({ Icon, url }, idx) => (
        <a
          key={idx}
          href={url}
          className="p-2 border-2 rounded-lg hover:bg-gray-900 hover:text-white active:scale-110 transition-all duration-200"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
