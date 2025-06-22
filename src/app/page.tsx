import Text from "@/components/Text";
import {
  HandPeaceIcon,
  HandWavingIcon,
  HandPointingIcon,
  BriefcaseIcon,
  BooksIcon,
  ListStarIcon,
  CodeBlockIcon,
  ToolboxIcon,
  UsersThreeIcon,
  BrowserIcon,
  ArrowRightIcon,
  DownloadIcon,
} from "@phosphor-icons/react/ssr";
import NavLink from "@/components/NavLink";
import Section, { SectionHeader } from "@/components/Section";
import Grid from "@/components/Grid";
import Stack from "@/components/Stack";
import TagList from "@/components/TagList";
import { TAGS } from "@/data/tags";
import {
  GitHubIconLink,
  LinkedInIconLink,
  CodepenIconLink,
} from "@/components/SocialIconLink";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";

export default function Home() {
  return (
    <>
      <Section>
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex w-full flex-row items-center justify-center gap-1 lg:justify-start">
            <HandWavingIcon size="64" weight="duotone" className="hand-icon" />
            <HandPeaceIcon size="64" weight="duotone" className="hand-icon" />
            <HandPointingIcon
              size="64"
              weight="duotone"
              mirrored
              className="hand-icon"
            />
          </div>
          <Text as="h1" variant="heading1" className="">
            Hiya! I&apos;m
            <br />
            <span className="decoration-secondary dark:decoration-red text-4xl font-black italic underline decoration-2 underline-offset-4 lg:text-5xl dark:decoration-solid">
              Vincent Langlois
            </span>
            ,
            <br />
            software engineer.
          </Text>
          <Text as="p" variant="paragraph">
            I build digital products, and I love to learn new things. I am
            currently working at Eli Lilly and Company as a senior software
            engineer.
          </Text>
          <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center">
            <div className="flex flex-row gap-3">
              <NavLink
                variant="button"
                appearance="primary"
                href="/about"
                aria-label="About Me"
              >
                About Me
                <ArrowRightIcon size="24" weight="bold" />
              </NavLink>
            </div>

            <div className="flex flex-row gap-3">
              <GitHubIconLink />
              <LinkedInIconLink />
              <CodepenIconLink />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeader>
          <BriefcaseIcon size="32" weight="fill" />
          Experience
        </SectionHeader>
        <Stack className="gap-6">
          <ExperienceCard
            heading="Senior Software Engineer at Eli Lilly and Company"
            duration={{
              text: "July 2023 - Present",
              ariaLabel: "July 2023 to Present",
            }}
            summary="Currently working on building and maintaining software solutions
              for the pharmaceutical industry, focusing on improving patient
              outcomes through technology."
            tags={[
              TAGS.javascript,
              TAGS.react,
              TAGS.projectManagement,
              TAGS.nodejs,
              TAGS.accessibility,
              TAGS.genai,
            ]}
          />
          <ExperienceCard
            heading="Senior Software Engineer at Eli Lilly and Company"
            duration={{
              text: "July 2023 - Present",
              ariaLabel: "July 2023 to Present",
            }}
            summary="Currently working on building and maintaining software solutions
              for the pharmaceutical industry, focusing on improving patient
              outcomes through technology."
            tags={[
              TAGS.javascript,
              TAGS.react,
              TAGS.projectManagement,
              TAGS.nodejs,
              TAGS.accessibility,
              TAGS.genai,
            ]}
          />
          <ExperienceCard
            heading="Senior Software Engineer at Eli Lilly and Company"
            duration={{
              text: "July 2023 - Present",
              ariaLabel: "July 2023 to Present",
            }}
            summary="Currently working "
            tags={[
              TAGS.javascript,
              TAGS.react,
              TAGS.projectManagement,
              TAGS.nodejs,
              TAGS.accessibility,
              TAGS.genai,
            ]}
          />
          <NavLink
            variant="button"
            appearance="primary"
            href="#"
            aria-label="My Resume"
            className="self-end"
          >
            View Resume
            <DownloadIcon size="24" weight="bold" />
          </NavLink>
        </Stack>
      </Section>
      <Section>
        <SectionHeader>
          <BooksIcon size="32" weight="fill" />
          Projects
        </SectionHeader>
        <Stack>
          <Grid>
            <ProjectCard
              heading="Project 1"
              summary="This is a test"
              tags={[TAGS.javascript, TAGS.react, TAGS.nodejs]}
              internalUrl="/"
            />
            <ProjectCard
              heading="Project 1"
              summary="Lorem Ipsum aisubfiasufbuiasjfbviasjkdvn hjb andoklnvjk bijkhwa vijkbn foikhcvwiousaghbnvjcpoascisz "
              tags={[TAGS.javascript, TAGS.react, TAGS.projectManagement]}
              internalUrl="/"
            />
            <ProjectCard
              heading="Project 1"
              summary="This is a test"
              tags={[TAGS.accessibility, TAGS.genai]}
              internalUrl="/"
            />
          </Grid>
          <NavLink
            variant="button"
            appearance="primary"
            href="/projects"
            className="self-end"
          >
            View All Projects
            <ArrowRightIcon size="24" weight="bold" />
          </NavLink>
        </Stack>
      </Section>
      <Section>
        <SectionHeader>
          <ListStarIcon size="32" weight="fill" />
          Skills
        </SectionHeader>
        <Stack>
          <Text as="h3" variant="heading3">
            <BrowserIcon weight="fill" />
            Web Development
          </Text>
          <TagList
            tags={[
              TAGS.javascript,
              TAGS.typescript,
              TAGS.react,
              TAGS.nextjs,
              TAGS.tailwind,
              TAGS.bootstrap,
              TAGS.nodejs,
              TAGS.accessibility,
              TAGS.html,
              TAGS.semanticHtml,
              TAGS.css,
              TAGS.scss,
              TAGS.storybook,
              TAGS.jest,
              TAGS.seo,
              TAGS.wcag,
              TAGS.apiIntegration,
              TAGS.postman,
              TAGS.npm,
            ]}
          />
          <Text as="h3" variant="heading3">
            <UsersThreeIcon weight="fill" />
            Interpersonal
          </Text>
          <TagList
            tags={[
              TAGS.projectManagement,
              TAGS.teamwork,
              TAGS.problemSolving,
              TAGS.communication,
              TAGS.documentation,
              TAGS.empathy,
              TAGS.crossFunctionalCollaboration,
              TAGS.crossCompanyCollaboration,
              TAGS.adaptability,
              TAGS.passionate,
              TAGS.mentorship,
              TAGS.continuousLearning,
            ]}
          />
          <Text as="h3" variant="heading3">
            <CodeBlockIcon weight="fill" />
            Technical
          </Text>
          <TagList
            tags={[
              TAGS.python,
              TAGS.c,
              TAGS.java,
              TAGS.arduino,
              TAGS.markdown,
              TAGS.genai,
              TAGS.bugHunting,
              TAGS.bugFixing,
              TAGS.codeReview,
              TAGS.prototyping,
              TAGS.sql,
              TAGS.gameDevelopment,
              TAGS.gameDesign,
              TAGS.gameTesting,
              TAGS.promptEngineering,
            ]}
          />
          <Text as="h3" variant="heading3">
            <ToolboxIcon weight="fill" />
            Tools
          </Text>
          <TagList
            tags={[
              TAGS.git,
              TAGS.github,
              TAGS.figma,
              TAGS.copilot,
              TAGS.vscode,
              TAGS.jira,
              TAGS.confluence,
              TAGS.slack,
              TAGS.teams,
              TAGS.voiceover,
              TAGS.trello,
              TAGS.prettier,
            ]}
          />
        </Stack>
      </Section>
    </>
  );
}
