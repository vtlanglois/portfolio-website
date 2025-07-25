import Text from "@/components/Text";
import Markdown from "@/components/Markdown";
import Stack from "@/components/Stack";
import Article from "@/components/Article";

interface DetailsTemplateProps {
  /** Heading to show above all content */
  heading: string;
  /** Summary to show below heading */
  summary: string;
  /** MDX content to render */
  mainContent: React.ReactNode;
  /** Aside content to render alongside content */
  asideContent: React.ReactNode;
  /**  */
}

export default function DetailsTemplate({
  heading,
  summary,
  mainContent,
  asideContent,
}: DetailsTemplateProps) {
  return (
    <Article>
      <div className="col-span-3">
        <Stack>
          <Text as="h1" variant="heading1">
            {heading}
          </Text>
          <Text as="p" variant="caption" className="italic">
            {summary}
          </Text>
          <Markdown>{mainContent}</Markdown>
        </Stack>
      </div>
      <aside className="col-span-2 lg:sticky lg:top-24 lg:self-start">
        {asideContent}
      </aside>
    </Article>
  );
}
