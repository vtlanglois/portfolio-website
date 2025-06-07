import Text from "@/components/Text";
import {
  HandPeaceIcon,
  HandWavingIcon,
  HandPointingIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  InfoIcon,
  NotebookIcon,
  KanbanIcon,
  BriefcaseIcon,
  BooksIcon,
  ListStarIcon,
  CodeBlockIcon,
  ToolboxIcon,
  UsersThreeIcon,
  BrowserIcon,
} from "@phosphor-icons/react/ssr";
import Link from "@/components/Link";
import Card from "@/components/Card";
import Section, { SectionHeader } from "@/components/Section";
import Grid from "@/components/Grid";
import Stack from "@/components/Stack";
import TagList from "@/components/TagList";
import { TAGS } from "@/data/tags";

export default function Home() {
  return (
    <>
      <Section>
        <Card className="flex max-w-4xl flex-col items-start justify-start gap-3">
          <div className="flex flex-row gap-1">
            <HandWavingIcon size="64" weight="duotone" className="hand-icon" />
            <HandPeaceIcon size="64" weight="duotone" className="hand-icon" />
            <HandPointingIcon
              size="64"
              weight="duotone"
              mirrored
              className="hand-icon"
            />
          </div>
          <Text as="h1" variant="heading1">
            Hiya! I'm
            <br />
            <span className="decoration-secondary text-5xl font-black italic underline decoration-wavy decoration-2 underline-offset-4 dark:decoration-solid">
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
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <div className="flex flex-row gap-3">
              <Link
                variant="button"
                appearance="primary"
                href="/about"
                aria-label="About Me"
              >
                <InfoIcon size="24" weight="fill" />
                About Me
              </Link>
              <Link
                variant="button"
                appearance="primary"
                href="#"
                aria-label="My Resume"
              >
                <NotebookIcon size="24" weight="fill" />
                Resume
              </Link>
            </div>
            <div>
              <Link
                variant="icon"
                appearance="primary"
                href="https://github.com/vtlanglois"
                aria-label="Github"
              >
                <GithubLogoIcon size="32" weight="fill" />
              </Link>
              <Link
                variant="icon"
                appearance="primary"
                href="https://www.linkedin.com/in/vtlanglois/"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size="32" weight="fill" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>
      <Section>
        <SectionHeader>
          <BriefcaseIcon size="32" weight="fill" />
          Experience
        </SectionHeader>
        <Stack className="gap-6">
          <Stack>
            <Text as="h3" variant="heading3">
              Senior Software Engineer at Eli Lilly and Company
            </Text>
            <Text as="p" variant="paragraph">
              Currently working on building and maintaining software solutions
              for the pharmaceutical industry, focusing on improving patient
              outcomes through technology.
            </Text>
          </Stack>
          <Stack>
            <Text as="h3" variant="heading3">
              Senior Software Engineer at Eli Lilly and Company
            </Text>
            <Text as="p" variant="paragraph">
              Currently working on building and maintaining software solutions
              for the pharmaceutical industry, focusing on improving patient
              outcomes through technology.
            </Text>
            <TagList
              tags={[
                TAGS.JavaScript,
                TAGS.React,
                TAGS["Project Management"],
                TAGS["Node.js"],
                TAGS.Accessibility,
                TAGS.GenAI,
              ]}
            />
          </Stack>
          <Stack>
            <Text as="h3" variant="heading3">
              Senior Software Engineer at Eli Lilly and Company
            </Text>
            <Text as="p" variant="paragraph">
              Currently working on building and maintaining software solutions
              for the pharmaceutical industry, focusing on improving patient
              outcomes through technology.
            </Text>
          </Stack>
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
              TAGS.JavaScript,
              TAGS.TypeScript,
              TAGS.React,
              TAGS["Next.js"],
              TAGS.Tailwind,
              TAGS.Bootstrap,
              TAGS["Node.js"],
              TAGS.Accessibility,
              TAGS.HTML,
              TAGS.CSS,
              TAGS.SCSS,
              TAGS.Storybook,
              TAGS.Jest,
              TAGS.SEO,
              TAGS.WCAG,
              TAGS["API Integration"],
            ]}
          />
          <Text as="h3" variant="heading3">
            <UsersThreeIcon weight="fill" />
            Interpersonal
          </Text>
          <TagList
            tags={[
              TAGS["Project Management"],
              TAGS.Teamwork,
              TAGS["Problem Solving"],
              TAGS.Communication,
              TAGS.Documentation,
              TAGS.Empathy,
              TAGS["Cross-Functional Collaboration"],
              TAGS["Cross-Company Collaboration"],
              TAGS.Adaptability,
              TAGS.Passionate,
              TAGS.Mentorship,
              TAGS["Continuous Learning"],
            ]}
          />
          <Text as="h3" variant="heading3">
            <CodeBlockIcon weight="fill" />
            Technical
          </Text>
          <TagList
            tags={[
              TAGS.Python,
              TAGS.C,
              TAGS.Java,
              TAGS.Arduino,
              TAGS.Markdown,
              TAGS.GenAI,
              TAGS["Bug Hunting"],
              TAGS["Bug Fixing"],
              TAGS["Code Review"],
              TAGS.Prototyping,
              TAGS.SQL,
              TAGS["Game Development"],
              TAGS["Game Design"],
              TAGS["Game Testing"],
            ]}
          />
          <Text as="h3" variant="heading3">
            <ToolboxIcon weight="fill" />
            Tools
          </Text>
          <TagList
            tags={[
              TAGS.Git,
              TAGS.GitHub,
              TAGS.Figma,
              TAGS["GitHub Copilot"],
              TAGS["Visual Studio Code"],
              TAGS.JIRA,
              TAGS.Confluence,
              TAGS.Slack,
              TAGS["Microsoft Teams"],
              TAGS.Postman,
              TAGS.VoiceOver,
              TAGS.Trello,
            ]}
          />
        </Stack>
      </Section>
      <Section>
        <SectionHeader>
          <BooksIcon size="32" weight="fill" />
          Projects
        </SectionHeader>
        <Grid>
          <Stack>
            <Text as="h3" variant="heading3">
              Project 1
            </Text>
            <Text as="p" variant="paragraph">
              Description of project 1.
            </Text>
          </Stack>
          <Stack>
            <Text as="h3" variant="heading3">
              Project 2
            </Text>
            <Text as="p" variant="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              optio ut praesentium cum, laudantium reprehenderit, quisquam
              voluptatum tenetur debitis et a. Optio odit sunt ut, repellat in
              error temporibus nemo?
            </Text>
            <TagList
              tags={[
                TAGS.JavaScript,
                TAGS.React,
                TAGS["Project Management"],
                TAGS["Node.js"],
                TAGS.Accessibility,
                TAGS.GenAI,
              ]}
            />
          </Stack>
          <Stack>
            <Text as="h3" variant="heading3">
              Project 3
            </Text>
            <Text as="p" variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Quisquam, voluptatum.
            </Text>
          </Stack>
        </Grid>
        <Link
          variant="button"
          appearance="primary"
          href="/projects"
          className="self-end"
        >
          <KanbanIcon size="24" weight="duotone" />
          View All Projects
        </Link>
      </Section>
    </>
  );
}
