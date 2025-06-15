import Container from "@/components/Container";
import Text from "@/components/Text";
import { GitHubIconLink, LinkedInIconLink } from "@/components/SocialIconLink";
import Divider from "../Divider";

export default function Footer() {
  return (
    <footer className="dark:bg-red bg-primary-400 px-3 py-4 lg:px-16 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent">
      <Container className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <Text as="p" variant="caption">
            2025 - Vincent Langlois
            <br />
            Made with Next.js, Tailwind, and Typescript.
          </Text>
          <div className="flex flex-row gap-3">
            <GitHubIconLink className="dark:hover:!bg-black" />
            <LinkedInIconLink className="dark:hover:!bg-black" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
