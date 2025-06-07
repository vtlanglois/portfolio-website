import Stack from "@/components/Stack";

interface MarkdownArticleProps extends React.PropsWithChildren {}

export function MarkdownArticle({ children }: MarkdownArticleProps) {
  return (
    <article>
      <Stack>{children}</Stack>
    </article>
  );
}
