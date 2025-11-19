import type { FormEvent, ReactElement } from "react";
import SocialMedia from "./SocialMedia";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

export default function Contact(): ReactElement {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1rrxxg",
        "template_ad43zn4",
        e.currentTarget,
        "z-8e3toyTskaq0gzk"
      )
      .then(() => {
        toast.success("Message sent");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <section
      id="contact"
      className="bg-white flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 py-16 md:py-32 px-6 mb-0 md:mb-10 md:px-16 xl:px-36 text-gray-900 overflow-x-hidden"
    >
      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="col-span-1 flex flex-col gap-5 bg-gray-50 p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
          Get in Touch
        </h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border border-gray-300 focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 outline-none transition-all duration-200"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="border border-gray-300 focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 outline-none transition-all duration-200"
        />
        <textarea
          name="message"
          placeholder="How can I help?*"
          rows={5}
          className="border border-gray-300 focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 outline-none resize-none transition-all duration-200"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <button
            type="submit"
            className="flex-1 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md w-full sm:w-auto cursor-pointer"
          >
            Send Message
          </button>
          <SocialMedia />
        </div>
      </form>

      {/* Contact Info */}
      <div className="col-span-1 flex flex-col justify-center gap-6">
        <div className="leading-tight text-4xl md:text-5xl font-semibold text-gray-900">
          <h1>
            Let's <span className="text-blue-500">talk</span> for
          </h1>
          <h1>something special</h1>
        </div>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you want to reach out about projects, ideas, or opportunities, feel
          free to message me. I'm always open to connecting and learning from
          new people.
        </p>

        <div className="leading-tight text-base md:text-2xl font-semibold text-gray-800 space-y-1">
          <h2>dibyajyotipramanick0750@gmail.com</h2>
          <h2>+91 6291673760</h2>
        </div>
      </div>
    </section>
  );
}
