import Section, { SectionHeader } from "@/components/Section";
import Text from "@/components/Text";
import Grid from "@/components/Grid";
import ProjectCard from "@/components/ProjectCard";
import { TAGS } from "@/data/tags";
import { useMemo } from "react";
import projects from "@/data/projects";
import { ProjectItem } from "@/types/projectTypes";

export default function Projects() {
  const projectCards = useMemo(() => {
    return projects.map((project: ProjectItem) => (
      <ProjectCard
        key={project.name}
        heading={project.name}
        summary={project.description}
        tags={project.tags}
        internalUrl={project.internalUrl}
        externalUrl={project.externalUrl}
      />
    ));
  }, [projects]);

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
        {projectCards}
      </Grid>
    </Section>
  );
}
