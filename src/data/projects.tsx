import { ProjectItem } from "@/types/projectTypes";
import { TAGS } from "./tags";
import Test from "@/content/test.mdx";

export const webDevProjects: Array<ProjectItem> = [
  {
    id: "portfolio-website",
    // slug: "portfolio-website",
    name: "Portfolio Website",
    summary:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    tags: [TAGS.webDevelopment, TAGS.nextjs, TAGS.tailwind],
    externalUrl: "https://github.com/vtlanglois/portfolio-website",
    body: <Test />,
  },
];

export const gameDevProjects: Array<ProjectItem> = [
  {
    id: "atlas-m-1",
    // slug: "atlas-m1",
    name: "Atlas M-1",
    summary:
      "A short visual and audio experience about a doomed submarine operator at the bottom of the ocean. Built with Construct 3.",
    tags: [TAGS.gameDevelopment, TAGS.gameTesting],
    externalUrl: "https://startcmd.itch.io/atlas-m-1",
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
    externalUrl: "https://github.com/vtlanglois/ArduinoKidController-I341",
  },
  {
    id: "oled-matrix-display-demo",
    name: "OLED Matrix Display Demo",
    summary:
      "A showcase of the capabilities of an OLED Screen for Arduino devices.",
    tags: [TAGS.arduino, TAGS.educationTech],
    externalUrl: "https://github.com/vtlanglois/OLED-Demo",
  },
  {
    id: "rgb-led-demo",
    name: "RGB LED Demo",
    summary:
      "An interactive educational experience built to demonstrate an Arduino's analog and PWD pins for a young audience. Built for developers and educators alike.",
    tags: [TAGS.arduino, TAGS.educationTech],
    externalUrl: "https://github.com/vtlanglois/RGB_LED_Dials",
  },
];

export const miscProjects: Array<ProjectItem> = [
  {
    id: "pybot",
    // slug: "pybot",
    name: "PyBot",
    summary:
      "A Python-based chatbot that integrates with various APIs, include OpenAI's GPT models.",
    tags: [TAGS.python, TAGS.genai, TAGS.educationTech, TAGS.apiIntegration],
    externalUrl: "https://github.com/vtlanglois/PyBot",
  },
];

export const showcaseProjects: Array<ProjectItem> = [
  webDevProjects[0],
  gameDevProjects[0],
  miscProjects[0],
];

const projects: Array<ProjectItem> = [
  ...webDevProjects,
  ...miscProjects,
  ...gameDevProjects,
  ...arduinoProjects,
];

export default projects;
