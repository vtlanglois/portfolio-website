import type { TagItem } from "@/components/TagList";

const frameworkTags: Record<string, TagItem> = {
  React: { text: "React", variant: "tech", icon: "atom", group: "frameworks" },
  "Next.js": {
    text: "Next.js",
    variant: "tech",
    icon: "atom",
    group: "frameworks",
  },
};

const languageTags: Record<string, TagItem> = {
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
  HTML: {
    text: "HTML",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
};

const cssTags: Record<string, TagItem> = {
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
  CSS: { text: "CSS", variant: "tech", icon: "file-code", group: "css" },
  SCSS: { text: "SCSS", variant: "tech", icon: "file-code", group: "css" },
};

const backendTags: Record<string, TagItem> = {
  "Node.js": { text: "Node.js", variant: "tech", group: "backend" },
};

const versionControlTags: Record<string, TagItem> = {
  Git: { text: "Git", variant: "tech", icon: "git", group: "version control" },
  GitHub: {
    text: "GitHub",
    variant: "tech",
    icon: "github",
    group: "version control",
  },
};

const hardwareTags: Record<string, TagItem> = {
  Arduino: {
    text: "Arduino",
    variant: "tech",
    group: "hardware",
    icon: "circuit",
  },
};

const miscTags: Record<string, TagItem> = {
  Markdown: { text: "Markdown", variant: "tech", group: "misc" },
};

const toolTags: Record<string, TagItem> = {
  Figma: { text: "Figma", variant: "tech", icon: "figma", group: "tool" },
  "Visual Studio Code": {
    text: "Visual Studio Code",
    variant: "tech",
    group: "tool",
  },
  Storybook: {
    text: "Storybook",
    variant: "tech",
    icon: "file-code",
    group: "tool",
  },
  Jest: { text: "Jest", variant: "tech", icon: "file-code", group: "tool" },
  JIRA: { text: "JIRA", variant: "tech", group: "tool", icon: "browser" },
  Confluence: {
    text: "Confluence",
    variant: "tech",
    group: "tool",
    icon: "browser",
  },
  Slack: { text: "Slack", variant: "tech", group: "tool", icon: "browser" },
  "Microsoft Teams": {
    text: "Microsoft Teams",
    variant: "tech",
    group: "tool",
    icon: "browser",
  },
};

const aiTags: Record<string, TagItem> = {
  "GitHub Copilot": {
    text: "GitHub Copilot",
    variant: "tech",
    icon: "robot",
    group: "ai",
  },
};

const interpersonalTags: Record<string, TagItem> = {
  "Project Management": {
    text: "Project Management",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  Teamwork: {
    text: "Teamwork",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  "Problem Solving": {
    text: "Problem Solving",
    variant: "human",
    group: "interpersonal",
  },
  "Bug Hunting": {
    text: "Bug Hunting",
    variant: "topic",
    group: "interpersonal",
  },
  "Code Review": {
    text: "Code Review",
    variant: "topic",
    group: "interpersonal",
  },
  Documentation: {
    text: "Documentation",
    variant: "topic",
    group: "interpersonal",
  },
  Communication: {
    text: "Communication",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  Empathy: { text: "Empathy", variant: "human", group: "interpersonal" },
  "Cross-Functional Collaboration": {
    text: "Cross-Functional Collaboration",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  "Cross-Company Collaboration": {
    text: "Cross-Company Collaboration",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  Passionate: { text: "Passionate", variant: "human", group: "interpersonal" },
};

const topicTags: Record<string, TagItem> = {
  SEO: { text: "SEO", variant: "topic", group: "topic" },
  Accessibility: {
    text: "Accessibility",
    variant: "topic",
    icon: "a11y",
    group: "topic",
  },
  GenAI: { text: "GenAI", variant: "topic", icon: "robot", group: "topic" },
};

export const TAGS: Record<string, TagItem> = {
  ...frameworkTags,
  ...languageTags,
  ...cssTags,
  ...backendTags,
  ...versionControlTags,
  ...hardwareTags,
  ...miscTags,
  ...toolTags,
  ...aiTags,
  ...interpersonalTags,
  ...topicTags,
};
