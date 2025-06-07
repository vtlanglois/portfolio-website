import Stack from "@/components/Stack";

export function MarkdownArticle({ children }: React.PropsWithChildren) {
  return (
    <article>
      <Stack>{children}</Stack>
    </article>
  );
}
