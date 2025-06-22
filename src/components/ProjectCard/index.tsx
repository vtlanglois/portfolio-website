import Text from "@/components/Text";
import TagList from "@/components/TagList";
import NavLink from "@/components/NavLink";
import { TagItem } from "@/types/tagTypes";
import { GitHubIconLink } from "../SocialIconLink";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

interface ProjectCardProps {
  /** Heading for the project card. Is also part of the internal link */
  heading: string | React.ReactNode;
  /** Paragraph summary of the project */
  summary: string | React.ReactNode;
  /** Tools, concepts, etc that is associated with the project.
   * @example The tag `React` is for projects that use React
   */
  tags: TagItem[];
  /** URL for the project's internal details page. Only one per project, not all projects have details pages */
  internalUrl: string;
  /** External URL for the project, such as GitHub repos, itch.io sources, etc. Only one per card */
  externalUrl: string;
}

export default function ProjectCard({
  heading,
  summary,
  tags,
  internalUrl,
  externalUrl,
}: ProjectCardProps) {
  // const headingClasses = clsx(internalUrl && "hover:underline");

  return (
    <div className="border-primary-400 bg-primary-400 dark:bg-red dark:border-red row-span-4 mb-3 grid grid-rows-subgrid gap-3 rounded-xl border-4 shadow-lg transition-transform duration-200 ease-in-out motion-safe:hover:scale-105 dark:bg-transparent dark:shadow-none">
      <header className="dark:bg-red rounded-t-lg p-3">
        <Text as="h3" variant="heading3">
          {heading}
        </Text>
      </header>
      <Text as="p" variant="paragraph" className="p-3">
        {summary}
      </Text>
      <TagList tags={tags} className="p-3" />
      <footer className="dark:bg-red flex flex-row items-stretch justify-between rounded-b-lg p-3">
        {internalUrl && (
          <NavLink variant="button" appearance="secondary" href={internalUrl}>
            Read More <ArrowRightIcon size="20" weight="bold" />
          </NavLink>
        )}
        <GitHubIconLink className="dark:hover:!bg-black" />
      </footer>
    </div>
  );
}
