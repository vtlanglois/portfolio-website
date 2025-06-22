import Article from "@/components/Article";
import Markdown from "@/components/Markdown";
import Text from "@/components/Text";
import Stack from "@/components/Stack";
import Test from "@/content/test.mdx";
import Divider from "@/components/Divider";
import TagList from "@/components/TagList";
import { TAGS, hobbyTags, mediaTags } from "@/data/tags";
import {
  GitHubIconLink,
  LinkedInIconLink,
  CodepenIconLink,
} from "@/components/SocialIconLink";
import { GITHUB_URL, LINKEDIN_URL, CODEPEN_URL } from "@/constants";

export default function About() {
  return (
    <Article>
      <div className="col-span-3">
        <Stack>
          <Text as="h1" variant="heading1">
            About me
          </Text>
          <Markdown>
            <Test />
          </Markdown>
        </Stack>
      </div>
      <div className="col-span-2">
        <Stack>
          <Text as="h2" variant="heading3">
            My technical interests
          </Text>
          <TagList
            tags={[
              TAGS.webDevelopment,
              TAGS.gameDevelopment,
              TAGS.accessibility,
              TAGS.react,
            ]}
          />
          <Text as="h2" variant="heading3">
            My hobbies
          </Text>
          <TagList tags={Object.values(hobbyTags)} />
          <Text as="h2" variant="heading3">
            My favorite media
          </Text>
          <TagList tags={Object.values(mediaTags)} />
          <Divider className="hidden lg:block" />
          <div className="hidden flex-row gap-3 lg:flex">
            <GitHubIconLink href={GITHUB_URL} />
            <LinkedInIconLink href={LINKEDIN_URL} />
            <CodepenIconLink href={CODEPEN_URL} />
          </div>
        </Stack>
      </div>
    </Article>
  );
}
