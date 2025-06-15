import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import E10x from "@/public/E10x.jpg";
import vrd from "@/public/vrd.jpg";
import Alphabyte from "@/public/Alphabyte.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Virtual University of Pakistan",
    location: "Lahore",
    description:
      "I graduated after 4 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Lahore",
    description:
      "I worked as a front-end developer for 2 years",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Lahore",
    description:
      "I'm now a full-stack developer. My stack includes React, Tailwind and RTK. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote(Freelance)",
    description:
      "I'm now a full-stack developer and freelancer as well. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB .NET. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E10x",
    description:
      "Developed scalable web applications for U.S.-based healthcare providers using ReactJS and TypeScript.",
    tags: ["React", "Tailwind", "RTK"],
    imageUrl: E10x,
  },
  {
    title: "Virtual Days",
    description:
      "Delivered high-performance web applications for clients including Accenture and Global Study Abroad.",
    tags: ["React", "SASS", "Redux"],
    imageUrl: vrd,
  },
  {
    title: "AlphaByte",
    description:
      "A AI Chatbot which solve given problem like image recognition/image vision, matching profiles etc",
    tags: ["React", "Next.js", "i18n", "Tailwind", "Framer"],
    imageUrl: Alphabyte,
  },
  {
    title: "Wurqi",
    description:"Wurqi platform, which is an enterprise work-management solution designed to unify tasks, goals, communication, and visibility across organizations.",
    tags: ["Next.js", "MSAL", "Tailwind", "Framer"],
    imageUrl: vrd,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
  ".Net"
] as const;
