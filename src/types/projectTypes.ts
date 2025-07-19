import { TagItem } from "./tagTypes";

export interface ProjectItem {
  /** Name of the project */
  name: string;
  /** Description of the project */
  description: string;
  /** List of tags associated with the project */
  tags: TagItem[];
  /** URL for the project's internal details page. Only one per project, not all projects have details pages */
  internalUrl?: string;
  /** External URL for the project, such as GitHub repos, itch.io sources, etc. Only one per card */
  externalUrl: string;
}
