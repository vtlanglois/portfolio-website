import projects from "@/data/projects";
import Text from "@/components/Text";
import TagList from "@/components/TagList";
import Stack from "@/components/Stack";
import { notFound } from "next/navigation";
import DetailsTemplate from "@/templates/details";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (project) =>
      "slug" in project &&
      typeof project.slug === "string" &&
      project.slug === slug,
  );

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (project) =>
      "slug" in project &&
      typeof project.slug === "string" &&
      project.slug === slug,
  );
  if (!project) {
    notFound();
  }

  return (
    <DetailsTemplate
      heading={project.name}
      summary={project.summary}
      mainContent={project.body}
      asideContent={
        <Stack>
          <Text as="h2" variant="heading2">
            Technologies & Topics
          </Text>
          <TagList tags={project.tags} />
        </Stack>
      }
    />
  );
}

export async function generateStaticParams() {
  const projectSlugs = projects
    .filter((project) => "slug" in project && typeof project.slug === "string")
    .map((project) => ({
      slug: project.slug,
    }));

  return projectSlugs;
}
