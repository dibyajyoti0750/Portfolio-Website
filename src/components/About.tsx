import type { ReactElement } from "react";
import { assets } from "../assets/assets";

export default function About(): ReactElement {
  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 py-10 md:py-20 px-6 md:px-16 xl:px-32">
      {/* Left: Image */}
      <div className="flex justify-center items-center">
        <img
          src={assets.about}
          alt="About me"
          className="w-full max-w-md md:max-w-full object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-medium mb-6 text-center md:text-left">
          About <span className="font-black">Me</span>
        </h1>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          doloremque rem odit, nulla repudiandae quod iusto perferendis,
          quisquam praesentium expedita error corporis ab nobis natus
          perspiciatis iste. Natus, eaque modi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem sint quae facere culpa alias,
          dolores possimus dolore minima ducimus suscipit magnam distinctio
          fugit incidunt non velit necessitatibus ipsum architecto expedita.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis
          delectus minima esse quo rerum dolorum adipisci eligendi. Nisi fuga
          architecto doloremque, id sequi illum debitis accusantium cupiditate.
          In, explicabo. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Eos aliquid ad cumque praesentium saepe magnam ex vitae,
          exercitationem nulla, qui veniam similique enim soluta laborum quae
          delectus voluptatum, quo nihil!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ex
          deserunt placeat maxime? Dolorem eos fugiat velit modi reprehenderit
          maiores quo similique cumque nisi recusandae quae omnis, qui aperiam
          possimus?
        </p>
      </div>
    </section>
  );
}
