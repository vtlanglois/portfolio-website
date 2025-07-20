import type { ExperienceCardProps } from "@/components/ExperienceCard";
import { TAGS } from "@/data/tags";

export const seniorLillyExperience: ExperienceCardProps = {
  heading: "Senior Software Engineer at Eli Lilly & Company",
  location: "Indianapolis, IN",
  duration: {
    text: "July 2023 - Present",
    ariaLabel: "July 2023 to Present",
  },
  summary:
    "Currently working on building and maintaining software solutions for the pharmaceutical industry, focusing on improving patient outcomes through technology.",
  tags: [
    TAGS.typescript,
    TAGS.javascript,
    TAGS.react,
    TAGS.webDevelopment,
    TAGS.bugHunting,
    TAGS.bugFixing,
    TAGS.accessibility,
    TAGS.nextjs,
    TAGS.documentation,
    TAGS.codeReview,
    TAGS.tailwind,
    TAGS.apiIntegration,
    TAGS.crossFunctionalCollaboration,
    TAGS.adaptability,
    TAGS.teamwork,
  ],
};

export const bcForwardExperience: ExperienceCardProps = {
  heading: "Software Engineer Intern at BCForward",
  location: "Carmel, IN",
  duration: {
    text: "May 2022 - August 2022",
    ariaLabel: "May 2022 to August 2022",
  },
  summary:
    "Worked on developing and maintaining the Indiana Prosecutor Case Management System, focusing on enhancing user experience and performance.",
  tags: [
    TAGS.javascript,
    TAGS.react,
    TAGS.nodejs,
    TAGS.sql,
    TAGS.bootstrap,
    TAGS.webDevelopment,
    TAGS.prototyping,
    TAGS.problemSolving,
  ],
};

export const luddyExperience: ExperienceCardProps = {
  heading:
    "Community Outreach Intern at IU Luddy School of Informatics, Computing, and Engineering",
  location: "Bloomington, IN",
  duration: {
    text: "August 2020 - July 2023",
    ariaLabel: "August 2020 to July 2023",
  },
  summary:
    "Directed and coordinated community outreach programs, focusing on promoting STEM education and engaging with local schools to inspire the next generation of technologists.",
  tags: [
    TAGS.educationTech,
    TAGS.projectManagement,
    TAGS.teamwork,
    TAGS.communication,
    TAGS.empathy,
    TAGS.crossFunctionalCollaboration,
    TAGS.crossCompanyCollaboration,
    TAGS.adaptability,
  ],
};

export const allExperience: ExperienceCardProps[] = [
  seniorLillyExperience,
  bcForwardExperience,
  luddyExperience,
];
