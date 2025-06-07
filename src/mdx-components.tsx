import type { MDXComponents } from "mdx/types";
import Text from "@/components/Text";
import { BugIcon } from "@phosphor-icons/react/ssr";

const emojiMap = {
  ":bug:": BugIcon,
} as const;

const emojiPattern = new RegExp(`(${Object.keys(emojiMap).join("|")})`, "g");

const processContent = (content: React.ReactNode): React.ReactNode => {
  if (typeof content !== "string") return content;

  const parts = content.split(emojiPattern);
  return parts.map((part, index) => {
    const Icon = emojiMap[part as keyof typeof emojiMap];
    if (Icon) {
      return <Icon key={index} className="inline-block" />;
    }
    return part;
  });
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <Text as="h2" variant="heading2">
        {processContent(children)}
      </Text>
    ),
    p: ({ children }) => (
      <Text as="p" variant="paragraph">
        {processContent(children)}
      </Text>
    ),
    ...components,
  };
}
