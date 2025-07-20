import Section, { SectionHeader } from "@/components/Section";
import Text from "@/components/Text";
import Grid from "@/components/Grid";
import ProjectCard from "@/components/ProjectCard";
import { useMemo } from "react";
import Stack from "@/components/Stack";
import projects from "@/data/projects";
import { DetailedProjectItem, ProjectItem } from "@/types/projectTypes";

export default function Projects() {
  const projectCards = useMemo(() => {
    return projects.map((project: ProjectItem | DetailedProjectItem) => (
      <ProjectCard
        key={project.id}
        heading={project.name}
        summary={project.summary}
        tags={project.tags}
        slug={project.slug}
        externalUrl={project.externalUrl}
      />
    ));
  }, [projects]);

  return (
    <Section>
      <Stack>
        <Text as="h1" variant="heading1">
          Projects
        </Text>
        <Text as="p" variant="paragraph" className="mb-6">
          This is a collection of projects I have worked on, showcasing my
          skills and interests in various domains.
        </Text>
        <Grid>{projectCards}</Grid>
      </Stack>
    </Section>
  );
}
