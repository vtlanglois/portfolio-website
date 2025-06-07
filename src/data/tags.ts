import type { TagItem } from "@/components/TagList";

export const TAGS: Record<string, TagItem> = {
  JavaScript: {
    text: "JavaScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  TypeScript: {
    text: "TypeScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  React: { text: "React", variant: "tech", icon: "atom", group: "frameworks" },
  "Next.js": {
    text: "Next.js",
    variant: "tech",
    icon: "atom",
    group: "frameworks",
  },
  Tailwind: {
    text: "Tailwind",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  Bootstrap: {
    text: "Bootstrap",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  "Node.js": { text: "Node.js", variant: "tech", group: "backend" },
  Python: {
    text: "Python",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  Java: {
    text: "Java",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  C: { text: "C", variant: "tech", icon: "file-code", group: "languages" },
  Git: { text: "Git", variant: "tech", icon: "git", group: "version control" },
  Arduino: { text: "Arduino", variant: "tech", group: "hardware" },
  Markdown: { text: "Markdown", variant: "tech", group: "misc" },
  GitHub: {
    text: "GitHub",
    variant: "tech",
    icon: "github",
    group: "version control",
  },
  Figma: { text: "Figma", variant: "tech", icon: "figma", group: "tool" },
  "GitHub Copilot": {
    text: "GitHub Copilot",
    variant: "tech",
    icon: "robot",
    group: "ai",
  },
  "Visual Studio Code": {
    text: "Visual Studio Code",
    variant: "tech",
    group: "tool",
  },
  "Project Management": {
    text: "Project Management",
    variant: "human",
    group: "interpersonal",
  },
  Teamwork: { text: "Teamwork", variant: "human", group: "interpersonal" },
  "Problem Solving": {
    text: "Problem Solving",
    variant: "human",
    group: "interpersonal",
  },
  Accessibility: {
    text: "Accessibility",
    variant: "topic",
    icon: "a11y",
    group: "topic",
  },
  GenAI: { text: "GenAI", variant: "topic", icon: "robot", group: "topic" },
};
