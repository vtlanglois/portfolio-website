import React from "react";
import { TagItem } from "./tagTypes";

export interface ProjectItem {
  /** Unique identifier for the project */
  id: string;
  /** Unique path for the projects details page, if one exists */
  slug?: string;
  /** Name of the project */
  name: string;
  /** Summary of the project */
  summary: string;
  /** List of tags associated with the project */
  tags: TagItem[];
  /** External URL for the project, such as GitHub repos, itch.io sources, etc. Only one per card */
  externalUrl: string;
  /** Body for the details page, if one exists */
  body?: React.ReactNode;
}

export interface ExperienceItem {
  /** Unique identifier for the experience */
  id: string;
  /** Heading for the experience, serves at the title held during the experience */
  heading: string | React.ReactNode;
  /** Location for the experience */
  location?: string | React.ReactNode;
  /** Time duration at experience. Includes accessible text */
  duration: {
    text: string | React.ReactNode;
    ariaLabel: string;
  };
  /** Summary of the experience */
  summary: string | React.ReactNode;
  /** Tools, concepts, etc that is associated with the experience.
   * @example The tag `React` is for projects that use React
   */
  tags: TagItem[];
}
