import logo from "./logo.png";
import hero from "./hero.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import ts from "./typescript.png";
import tailwind from "./tailwindcss-mark.d52e9897.svg";
import react from "./react.svg";
import nodejs from "./node-js.png";
import express from "./expressjs.svg";
import mongoDB from "./mongodb-icon.svg";
import redux from "./redux.svg";
import git from "./git.png";
import github from "./github.png";
import about from "./about.png";

import google from "./google.png";
import youtube from "./youtube.png";
import microsoft from "./microsoft.png";

export const assets = {
  logo,
  hero,
  html,
  css,
  js,
  ts,
  tailwind,
  react,
  nodejs,
  express,
  mongoDB,
  redux,
  git,
  github,
  about,
};

export const dummyExperienceData = [
  {
    companyLogo: google,
    companyRole: "Lead Software Engineer at Google",
    workTime: "Jan 2025 - Present",
    description:
      "Leading a team of 10 engineers to design and optimize large-scale distributed systems for Google's Search infrastructure. Spearheaded the migration of legacy microservices to a modern cloud-native architecture, improving performance by 35%.",
  },
  {
    companyLogo: youtube,
    companyRole: "Frontend Developer at YouTube",
    workTime: "Apr 2022 - Dec 2024",
    description:
      "Developed and maintained YouTube's creator analytics dashboard using React, TypeScript, and Redux. Collaborated with UX designers to enhance accessibility and improve load times by 25%.",
  },
  {
    companyLogo: microsoft,
    companyRole: "Software Engineer Intern at Microsoft",
    workTime: "Jun 2021 - Mar 2022",
    description:
      "Worked on the Azure DevOps team to implement CI/CD pipelines using Node.js and Docker. Automated deployment processes, reducing manual intervention by 40%.",
  },
];

export const dummyTestimonialsData = [
  {
    quote:
      "He codes like he's assembling the Avengers — with precision, chaos, and a plan that somehow works perfectly in the end.",
    name: "Tony Stark",
    designation: "Genius, Billionaire, Philanthropist",
    src: "https://i.pinimg.com/736x/81/dc/f5/81dcf572ebe8cf8f7329270fd6dc912c.jpg",
  },
  {
    quote:
      "I see in him the same determination I had when I first built my dream. He doesn't just build apps — he builds legacies.",
    name: "Bruce Wayne",
    designation: "CEO, Wayne Enterprises",
    src: "https://i.pinimg.com/736x/d3/54/bb/d354bb4b90c4ef6666b2b556d9e79486.jpg",
  },
  {
    quote:
      "He's fast, efficient, and doesn't miss a beat. If there was a coding multiverse, he'd be the one rewriting reality.",
    name: "Peter Parker",
    designation: "Freelance Photographer, Daily Bugle",
    src: "https://i.pinimg.com/736x/e1/22/38/e12238944a39b8a3bb8ce571a656f393.jpg",
  },
  {
    quote:
      "He's got the kind of focus I haven't seen since the impossible missions. Give him a deadline — he'll outrun it.",
    name: "Ethan Hunt",
    designation: "IMF Agent",
    src: "https://i.pinimg.com/736x/ee/1e/e9/ee1ee9d539b3e7ab7a1e5b8af4a81ec3.jpg",
  },
];
