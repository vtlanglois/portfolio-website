import type { MDXComponents } from "mdx/types";
import Text from "@/components/Text";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <Text as="h2" variant="heading2">
        {children}
      </Text>
    ),
    p: ({ children }) => (
      <Text as="p" variant="paragraph">
        {children}
      </Text>
    ),

    ...components,
  };
}
