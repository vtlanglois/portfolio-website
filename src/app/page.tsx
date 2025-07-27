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
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";
import { showcaseProjects } from "@/data/projects";
import { allExperience } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Introducing Vincent Langlois, a software engineer who loves to build things. Explore my projects, experience, and skills in software development.",
};

export default function Home() {
  const experiences = allExperience.map((experience) => (
    <ExperienceCard
      key={experience.heading}
      heading={experience.heading}
      location={experience.location}
      duration={experience.duration}
      summary={experience.summary}
      tags={experience.tags}
    />
  ));
  return (
    <>
      <Section>
        <div className="flex flex-col items-start justify-start gap-3">
          <div className="flex w-full flex-row items-center justify-center gap-1 lg:justify-start">
            <HandWavingIcon
              size="64"
              weight="duotone"
              className="hand-icon animation-wave"
            />
            <HandPeaceIcon
              size="64"
              weight="duotone"
              className="hand-icon animation-bouncing"
            />
            <HandPointingIcon
              size="64"
              weight="duotone"
              className="hand-icon animation-bouncing delay"
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
              <GitHubIconLink href={GITHUB_URL} />
              <LinkedInIconLink href={LINKEDIN_URL} />
              <CodepenIconLink href={CODEPEN_URL} />
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
          {experiences}
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
            {showcaseProjects.map((project) => (
              <ProjectCard
                key={project.id}
                heading={project.name}
                summary={project.summary}
                tags={project.tags}
                slug={project.slug}
                externalUrl={project.externalUrl}
              />
            ))}
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
