import projects from "@/data/projects";
import { DetailedProjectItem } from "@/types/projectTypes";
import Article from "@/components/Article";
import Text from "@/components/Text";
import TagList from "@/components/TagList";
import Stack from "@/components/Stack";
import { useCallback } from "react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (p): p is DetailedProjectItem =>
      "slug" in p && typeof p.slug === "string" && p.slug === slug,
  );
  if (!project) {
    notFound();
  }

  return (
    <Article>
      <div className="col-span-3">
        <Text as="h1" variant="heading1">
          {project?.name}
        </Text>
        <div className="mt-4">{project?.body}</div>
      </div>
      <aside className="col-span-2">
        <Stack>
          <Text as="h2" variant="heading3">
            Technologies & Topics
          </Text>
          <TagList tags={project?.tags || []} />
        </Stack>
      </aside>
    </Article>
  );
}

export async function generateStaticParams() {
  const projectSlugs = projects
    .filter(
      (project): project is DetailedProjectItem =>
        "slug" in project && typeof project.slug === "string",
    )
    .map((project) => ({
      slug: project.slug,
    }));

  return projectSlugs;
}
