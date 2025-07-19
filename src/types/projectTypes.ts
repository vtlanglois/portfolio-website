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
