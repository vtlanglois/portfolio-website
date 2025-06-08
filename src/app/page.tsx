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
import NavLink from "@/components/NavLink";
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
            Hiya! I&apos;m
            <br />
            <span className="decoration-secondary dark:decoration-red text-5xl font-black italic underline decoration-wavy decoration-2 underline-offset-4 dark:decoration-solid">
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
          <Text as="p" variant="paragraph">
            Well this{" "}
            <NavLink
              variant="text"
              appearance="primary"
              href="https://www.example.com/"
            >
              a link
            </NavLink>{" "}
            is good
          </Text>
          <p>
            Well this is a <a href="#">Link</a>
          </p>
          <div className="flex w-full flex-row items-center justify-between gap-3">
            <div className="flex flex-row gap-3">
              <NavLink
                variant="button"
                appearance="primary"
                href="/about"
                aria-label="About Me"
              >
                <InfoIcon size="24" weight="fill" />
                About Me
              </NavLink>
              <NavLink
                variant="button"
                appearance="primary"
                href="#"
                aria-label="My Resume"
              >
                <NotebookIcon size="24" weight="fill" />
                Resume
              </NavLink>
            </div>
            <div>
              <NavLink
                variant="icon"
                appearance="primary"
                href="https://github.com/vtlanglois"
                aria-label="Github"
              >
                <GithubLogoIcon size="32" weight="fill" />
              </NavLink>
              <NavLink
                variant="icon"
                appearance="primary"
                href="https://www.linkedin.com/in/vtlanglois/"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size="32" weight="fill" />
              </NavLink>
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
                TAGS.javascript,
                TAGS.react,
                TAGS.projectManagement,
                TAGS.nodejs,
                TAGS.accessibility,
                TAGS.genai,
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
                TAGS.javascript,
                TAGS.react,
                TAGS.projectManagement,
                TAGS.nodejs,
                TAGS.accessibility,
                TAGS.genai,
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
        <NavLink
          variant="button"
          appearance="primary"
          href="/projects"
          className="self-end"
        >
          <KanbanIcon size="24" weight="duotone" />
          View All Projects
        </NavLink>
      </Section>
    </>
  );
}
