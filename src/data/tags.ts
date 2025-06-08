import type { TagItem } from "@/types/tagTypes";

const frameworkTags: Record<string, TagItem> = {
  react: { text: "React", variant: "tech", icon: "atom", group: "frameworks" },
  nextjs: {
    text: "Next.js",
    variant: "tech",
    icon: "atom",
    group: "frameworks",
  },
};

const languageTags: Record<string, TagItem> = {
  javascript: {
    text: "JavaScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  typescript: {
    text: "TypeScript",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  python: {
    text: "Python",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  java: {
    text: "Java",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  c: { text: "C", variant: "tech", icon: "file-code", group: "languages" },
  html: {
    text: "HTML",
    variant: "tech",
    icon: "file-code",
    group: "languages",
  },
  semanticHtml: {
    text: "Semantic HTML",
    variant: "tech",
    icon: "a11y",
    group: "languages",
  },
};

const cssTags: Record<string, TagItem> = {
  tailwind: {
    text: "Tailwind",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  bootstrap: {
    text: "Bootstrap",
    variant: "tech",
    icon: "palette",
    group: "css",
  },
  css: { text: "CSS", variant: "tech", icon: "file-code", group: "css" },
  scss: { text: "SCSS", variant: "tech", icon: "file-code", group: "css" },
  sql: {
    text: "SQL",
    variant: "tech",
    icon: "db",
    group: "misc",
  },
};

const backendTags: Record<string, TagItem> = {
  nodejs: { text: "Node.js", variant: "tech", group: "backend" },
  apiIntegration: {
    text: "API Integration",
    variant: "topic",
    group: "backend",
  },
};

const versionControlTags: Record<string, TagItem> = {
  git: { text: "Git", variant: "tool", icon: "git", group: "version control" },
  github: {
    text: "GitHub",
    variant: "tool",
    icon: "github",
    group: "version control",
  },
};

const hardwareTags: Record<string, TagItem> = {
  arduino: {
    text: "Arduino",
    variant: "tech",
    group: "hardware",
    icon: "circuit",
  },
};

const miscTags: Record<string, TagItem> = {
  markdown: {
    text: "Markdown",
    variant: "tech",
    group: "misc",
    icon: "file-code",
  },
};

const toolTags: Record<string, TagItem> = {
  figma: { text: "Figma", variant: "tool", icon: "figma", group: "tool" },
  vscode: {
    text: "Visual Studio Code",
    variant: "tool",
    group: "tool",
  },
  storybook: {
    text: "Storybook",
    variant: "tool",
    icon: "file-code",
    group: "tool",
  },
  jest: { text: "Jest", variant: "tool", icon: "file-code", group: "tool" },
  jira: { text: "JIRA", variant: "tool", group: "tool", icon: "browser" },
  confluence: {
    text: "Confluence",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  slack: { text: "Slack", variant: "tool", group: "tool", icon: "browser" },
  teams: {
    text: "Microsoft Teams",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  postman: {
    text: "Postman",
    variant: "tool",
    group: "tool",
    icon: "browser",
  },
  voiceover: {
    text: "VoiceOver",
    variant: "tool",
    group: "tool",
    icon: "a11y",
  },
  trello: {
    text: "Trello",
    variant: "tool",
    group: "tool",
  },
  prettier: {
    text: "Prettier",
    variant: "tool",
    group: "tool",
  },
  npm: {
    text: "npm",
    variant: "tool",
    group: "tool",
  },
};

const aiTags: Record<string, TagItem> = {
  copilot: {
    text: "GitHub Copilot",
    variant: "tool",
    icon: "robot",
    group: "ai",
  },
  promptEngineering: {
    text: "Prompt Engineering",
    variant: "topic",
    icon: "robot",
    group: "ai",
  },
};

const interpersonalTags: Record<string, TagItem> = {
  projectManagement: {
    text: "Project Management",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  bugHunting: {
    text: "Bug Hunting",
    variant: "topic",
    group: "interpersonal",
    icon: "bug",
  },
  bugFixing: {
    text: "Bug Fixing",
    variant: "topic",
    group: "interpersonal",
    icon: "bug",
  },
  codeReview: {
    text: "Code Review",
    variant: "topic",
    group: "interpersonal",
  },
  prototyping: {
    text: "Prototyping",
    variant: "topic",
    group: "interpersonal",
  },
  documentation: {
    text: "Documentation",
    variant: "topic",
    group: "interpersonal",
  },
  empathy: { text: "Empathy", variant: "human", group: "interpersonal" },
  crossFunctionalCollaboration: {
    text: "Cross-Functional Collaboration",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
  crossCompanyCollaboration: {
    text: "Cross-Company Collaboration",
    variant: "human",
    group: "interpersonal",
    icon: "users",
  },
};

const softSkillTags: Record<string, TagItem> = {
  teamwork: {
    text: "Teamwork",
    variant: "human",
    group: "soft",
    icon: "users",
  },
  problemSolving: {
    text: "Problem Solving",
    variant: "human",
    group: "soft",
  },
  adaptability: {
    text: "Adaptability",
    variant: "human",
    group: "soft",
  },
  mentorship: {
    text: "Mentorship",
    variant: "human",
    group: "soft",
    icon: "users",
  },
  communication: {
    text: "Communication",
    variant: "human",
    group: "soft",
    icon: "users",
  },
  passionate: { text: "Passionate", variant: "human", group: "soft" },
  continuousLearning: {
    text: "Continuous Learning",
    variant: "human",
    group: "soft",
  },
};

const topicTags: Record<string, TagItem> = {
  seo: { text: "SEO", variant: "topic", group: "topic" },
  accessibility: {
    text: "Accessibility",
    variant: "topic",
    icon: "a11y",
    group: "topic",
  },
  wcag: { text: "WCAG", variant: "topic", icon: "a11y", group: "topic" },
  genai: { text: "GenAI", variant: "topic", icon: "robot", group: "ai" },
  gameDesign: {
    text: "Game Design",
    variant: "topic",
    group: "topic",
    icon: "palette",
  },
  gameDevelopment: {
    text: "Game Development",
    variant: "topic",
    group: "topic",
    icon: "controller",
  },
  gameTesting: {
    text: "Game Testing",
    variant: "topic",
    group: "topic",
    icon: "bug",
  },
  webDevelopment: {
    text: "Web Development",
    variant: "topic",
    icon: "atom",
    group: "topic",
  },
};

export const hobbyTags: Record<string, TagItem> = {
  legos: {
    text: "LEGOs",
    variant: "hobby",
    group: "hobby",
    icon: "lego",
  },
  gardening: {
    text: "Gardening",
    variant: "hobby",
    group: "hobby",
    icon: "potted-plant",
  },
  videoGames: {
    text: "Video Games",
    variant: "hobby",
    group: "hobby",
    icon: "controller",
  },
  hiking: {
    text: "Hiking",
    variant: "hobby",
    group: "hobby",
    icon: "hiking",
  },
  cooking: {
    text: "Cooking",
    variant: "hobby",
    group: "hobby",
    icon: "cooking",
  },
  reading: {
    text: "Reading",
    variant: "hobby",
    group: "hobby",
    icon: "book"
  }
};

export const mediaTags: Record<string, TagItem> = {
  houseOfLeaves: {
    text: "House of Leaves",
    variant: "hobby",
    group: "hobby",
    icon: "book",
  },
  mrBlueSky: {
    text: "Mr Blue Sky",
    variant: "hobby",
    group: "hobby",
    icon: "song",
  },
  starless: {
    text: "Starless",
    variant: "hobby",
    group: "hobby",
    icon: "song",
  },
  electricState: {
    text: "The Electric State",
    variant: "hobby",
    group: "hobby",
    icon: "book",
  },
  minecraft: {
    text: "Minecraft",
    variant: "hobby",
    group: "hobby",
    icon: "controller",
  },
  cyberpunk: {
    text: "Cyberpunk 2077",
    variant: "hobby",
    group: "hobby",
    icon: "controller",
  },
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
  ...softSkillTags,
  ...interpersonalTags,
  ...topicTags,
  ...hobbyTags,
  ...mediaTags,
};
