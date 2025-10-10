import type { ReactElement } from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import { dummyTestimonialsData } from "../assets/assets";

export default function MyTestimonials(): ReactElement {
  return (
    <div className="bg-black text-white flex flex-col py-12 md:py-32 px-6 md:px-16 mx-auto">
      <h1 className="text-3xl md:text-5xl font-medium text-center">
        My <span className="font-black">Testimonials</span>
      </h1>

      <AnimatedTestimonials testimonials={dummyTestimonialsData} />
    </div>
  );
}
