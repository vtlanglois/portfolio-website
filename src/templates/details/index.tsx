import Test from "@/content/test.mdx";
import Markdown from "@/components/Markdown";

interface DetailsTemplateProps {
  /** MDX content to render */
  mainContent: React.ReactNode;
  /** Aside content to render alongside content */
  asideContent: React.ReactNode;
  /**  */
}

export default function DetailsTemplate({
  mainContent,
  asideContent,
}: DetailsTemplateProps) {
  return (
    <article className="grid grid-cols-1 gap-12 py-3 lg:grid-cols-5 lg:py-12">
      <div className="col-span-3">
        <Markdown>{mainContent}</Markdown>
      </div>
      <aside className="col-span-2 lg:sticky lg:top-24 lg:self-start">
        {asideContent}
      </aside>
    </article>
  );
}
