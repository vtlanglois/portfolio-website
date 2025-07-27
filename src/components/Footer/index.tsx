import Container from "@/components/Container";
import Text from "@/components/Text";
import {
  CodepenIconLink,
  GitHubIconLink,
  LinkedInIconLink,
} from "@/components/SocialIconLink";
import { CODEPEN_URL, GITHUB_URL, LINKEDIN_URL } from "@/constants";

export default function Footer() {
  return (
    <footer className="dark:bg-red bg-primary-400 px-3 py-4 lg:px-16 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent">
      <Container className="flex flex-col gap-3">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <Text as="p" variant="caption" className="text-center lg:text-left">
            2025 - Vincent Langlois
            <br />
            Made with Next.js, Tailwind, and Typescript.
          </Text>
          <div className="flex flex-row gap-3">
            <GitHubIconLink
              className="dark:hover:!bg-black"
              href={GITHUB_URL}
            />
            <LinkedInIconLink
              className="dark:hover:!bg-black"
              href={LINKEDIN_URL}
            />
            <CodepenIconLink
              className="dark:hover:!bg-black"
              href={CODEPEN_URL}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
