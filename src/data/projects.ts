import { ProjectItem } from "@/types/projectTypes";
import { TAGS } from "./tags";

export const webDevProjects: Array<ProjectItem> = [
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    tags: [TAGS.webDevelopment, TAGS.nextjs, TAGS.tailwind],
    internalUrl: "/projects/portfolio-website",
    externalUrl: "",
  },
];

export const gameDevProjects: Array<ProjectItem> = [
  {
    name: "Atlas M1",
    description:
      "A short visual and audio experience about a doomed submarine operator at the bottom of the ocean. Built with Construct 3.",
    tags: [TAGS.gameDevelopment, TAGS.gameTesting],
    internalUrl: "/projects/atlas-m1",
    externalUrl: "",
  },
];

export const arduinoProjects: Array<ProjectItem> = [
  {
    name: "YouTube Kid Controller",
    description:
      "A YouTube controller for kids. Built with Arduino, designed for Windows & Chrome.",
    tags: [TAGS.arduino],
    internalUrl: "",
    externalUrl: "",
  },
  {
    name: "OLED Matrix Display Demo",
    description:
      "A showcase of the capabilities of an OLED Screen for Arduino devices.",
    tags: [TAGS.arduino, TAGS.educationTech],
    internalUrl: "",
    externalUrl: "",
  },
  {
    name: "RGB LED Demo",
    description:
      "An interactive educational experience built to demonstrate an Arduino's analog and PWD pins for a young audience. Built for developers and educators alike.",
    tags: [TAGS.arduino, TAGS.educationTech],
    internalUrl: "",
    externalUrl: "",
  },
];

export const miscProjects: Array<ProjectItem> = [
  {
    name: "PyBot",
    description: "A Python-based chatbot that integrates with various APIs, include OpenAI's GPT models.",
    tags: [TAGS.python, TAGS.genai, TAGS.educationTech],
    internalUrl: "/projects/pybot",
    externalUrl: "",
  },
];

const projects: Array<ProjectItem> = [
  ...webDevProjects,
  ...miscProjects,
  ...gameDevProjects,
  ...arduinoProjects,
];

export default projects;
