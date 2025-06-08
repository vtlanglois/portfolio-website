import Test from "@/content/test.mdx";
import Markdown from "@/components/Markdown";
import TagList from "@/components/TagList";
import { TAGS } from "@/data/tags";
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Image from "next/image";
import DetailsTemplate from "@/templates/details";

export default function About() {
  return (
    <DetailsTemplate
      mainContent={<Test />}
      asideContent={
        <Stack>
          <Text as="h3" variant="heading3">
            My favs
          </Text>
          <TagList
            tags={[
              TAGS.javascript,
              TAGS.typescript,
              TAGS.react,
              TAGS.nextjs,
              TAGS.tailwind,
              TAGS.bootstrap,
            ]}
          />
          <Text as="h3" variant="heading3">
            My favs
          </Text>
          <TagList
            tags={[
              TAGS.javascript,
              TAGS.typescript,
              TAGS.react,
              TAGS.nextjs,
              TAGS.tailwind,
              TAGS.bootstrap,
            ]}
          />
          <Text as="h3" variant="heading3">
            My favs
          </Text>
          <TagList
            tags={[
              TAGS.javascript,
              TAGS.typescript,
              TAGS.react,
              TAGS.nextjs,
              TAGS.tailwind,
              TAGS.bootstrap,
            ]}
          />
          <Text as="h3" variant="heading3">
            My favs
          </Text>
          <TagList
            tags={[
              TAGS.javascript,
              TAGS.typescript,
              TAGS.react,
              TAGS.nextjs,
              TAGS.tailwind,
              TAGS.bootstrap,
            ]}
          />
        </Stack>
      }
    />
  );
}
