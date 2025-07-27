import Text from "@/components/Text";
import TagList from "@/components/TagList";
import NavLink from "@/components/NavLink";
import { TagItem } from "@/types/tagTypes";
import { ArrowRightIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

interface ProjectCardProps {
  /** Heading for the project card. Is also part of the internal link */
  heading: string | React.ReactNode;
  /** Paragraph summary of the project */
  summary: string | React.ReactNode;
  /** Tools, concepts, etc that is associated with the project.
   * @example The tag `React` is for projects that use React
   */
  tags: TagItem[];
  /** slug for the project's internal details page. Only one per project, not all projects have details pages */
  slug?: string;
  /** External URL for the project, such as GitHub repos, itch.io sources, etc. Only one per card */
  externalUrl: string;
}

export default function ProjectCard({
  heading,
  summary,
  tags,
  slug,
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
        {slug && (
          <NavLink
            variant="button"
            appearance="primary"
            className="dark:hover:!bg-cool-blue dark:!bg-black"
            href={`/projects/${slug}`}
          >
            Read More <ArrowRightIcon size="20" weight="bold" />
          </NavLink>
        )}
        <NavLink
          variant="icon"
          appearance="primary"
          href={externalUrl}
          className="dark:hover:!bg-cool-blue ml-auto"
          aria-label="GitHub repository link (opens in a new tab)"
        >
          <GithubLogoIcon size="32" weight="bold" className="text-foreground" />
        </NavLink>
      </footer>
    </div>
  );
}
