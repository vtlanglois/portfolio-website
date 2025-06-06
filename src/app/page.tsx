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
} from "@phosphor-icons/react/ssr";
import Wrapper from "@/components/Wrapper";
import Link from "@/components/Link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import Grid from "@/components/Grid";
import Stack from "@/components/Stack";
import TagList from "@/components/TagList";

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
                <InfoIcon size="24" weight="duotone" />
                About Me
              </Link>
              <Link
                variant="button"
                appearance="primary"
                href="#"
                aria-label="My Resume"
              >
                <NotebookIcon size="24" weight="duotone" />
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
                <GithubLogoIcon size="32" weight="duotone" />
              </Link>
              <Link
                variant="icon"
                appearance="primary"
                href="https://www.linkedin.com/in/vtlanglois/"
                aria-label="LinkedIn"
              >
                <LinkedinLogoIcon size="32" weight="duotone" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>
      <Section heading="Experience">
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
            <TagList tags={["JavaScript", "React", "Node.js"]} />
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
      <Section heading="Projects">
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
              tags={["JavaScript", "React", "Node.js", "HTML & CSS", "A11y"]}
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
