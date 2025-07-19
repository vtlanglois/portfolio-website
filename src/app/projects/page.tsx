import Section, { SectionHeader } from "@/components/Section";
import Text from "@/components/Text";
import Grid from "@/components/Grid";
import ProjectCard from "@/components/ProjectCard";
import { TAGS } from "@/data/tags";

export default function Projects() {
  return (
    <Section>
      <Text as="h1" variant="heading1">
        {" "}
        Projects
      </Text>
      <Text as="p" variant="paragraph">
        This is a collection of projects I have worked on, showcasing my skills
        and interests in various domains.
      </Text>
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
    </Section>
  );
}
