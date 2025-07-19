import projects from "@/data/projects";
import { DetailedProjectItem } from "@/types/projectTypes";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div>My Project: {slug}</div>;
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
