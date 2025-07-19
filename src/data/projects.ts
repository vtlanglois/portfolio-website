import { ProjectItem, DetailedProjectItem } from "@/types/projectTypes";
import { TAGS } from "./tags";

export const webDevProjects: Array<DetailedProjectItem> = [
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    name: "Portfolio Website",
    summary:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    tags: [TAGS.webDevelopment, TAGS.nextjs, TAGS.tailwind],
    externalUrl: "",
    body: "",
  },
];

export const gameDevProjects: Array<DetailedProjectItem> = [
  {
    id: "atlas-m1",
    slug: "atlas-m1",
    name: "Atlas M1",
    summary:
      "A short visual and audio experience about a doomed submarine operator at the bottom of the ocean. Built with Construct 3.",
    tags: [TAGS.gameDevelopment, TAGS.gameTesting],
    externalUrl: "",
    body: "",
  },
];

export const arduinoProjects: Array<ProjectItem> = [
  {
    id: "youtube-kid-controller",
    name: "YouTube Kid Controller",
    summary:
      "A YouTube controller for kids. Built with Arduino, designed for Windows & Chrome.",
    tags: [TAGS.arduino],
    externalUrl: "",
  },
  {
    id: "oled-matrix-display-demo",
    name: "OLED Matrix Display Demo",
    summary:
      "A showcase of the capabilities of an OLED Screen for Arduino devices.",
    tags: [TAGS.arduino, TAGS.educationTech],
    externalUrl: "",
  },
  {
    id: "rgb-led-demo",
    name: "RGB LED Demo",
    summary:
      "An interactive educational experience built to demonstrate an Arduino's analog and PWD pins for a young audience. Built for developers and educators alike.",
    tags: [TAGS.arduino, TAGS.educationTech],
    externalUrl: "",
  },
];

export const miscProjects: Array<ProjectItem> = [
  {
    id: "pybot",
    name: "PyBot",
    summary:
      "A Python-based chatbot that integrates with various APIs, include OpenAI's GPT models.",
    tags: [TAGS.python, TAGS.genai, TAGS.educationTech],
    externalUrl: "",
  },
];

const projects: Array<ProjectItem | DetailedProjectItem> = [
  ...webDevProjects,
  ...miscProjects,
  ...gameDevProjects,
  ...arduinoProjects,
];

export default projects;
