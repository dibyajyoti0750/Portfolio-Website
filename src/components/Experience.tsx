import type { ReactElement } from "react";

interface ExperienceData {
  companyLogo: string;
  companyRole: string;
  workTime: string;
  description: string;
}

interface ExperienceProps {
  data: ExperienceData[];
}

export default function Experience({ data }: ExperienceProps): ReactElement {
  return (
    <section className="flex flex-col bg-black text-white mt-24 py-28 px-6 sm:px-10 md:px-24 xl:px-56">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-medium mb-24 text-center">
        My <span className="font-black">Experience</span>
      </h1>

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 md:gap-10">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            {/* Top row: logo + role + time */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.companyLogo}
                  alt="company logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <p className="font-bold text-lg">{item.companyRole}</p>
              </div>

              <p className="text-sm text-gray-400">{item.workTime}</p>
            </div>

            {/* Description (below full width) */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
