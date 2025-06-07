import type { TagItem } from "@/components/TagList";

export const TAGS: Record<string, TagItem> = {
  JavaScript: { text: "JavaScript", variant: "tech" },
  React: { text: "React", variant: "tech" },
  "Project Management": { text: "Project Management", variant: "human" },
  "Node.js": { text: "Node.js", variant: "tech" },
  Accessibility: { text: "Accessibility", variant: "topic", icon: "a11y" },
  GenAI: { text: "GenAI", variant: "topic", icon: "robot" },
};
