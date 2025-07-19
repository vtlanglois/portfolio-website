import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import Stack from "@/components/Stack";
import Text from "@/components/Text";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <Section>
      <Stack>
        <Text as="h1" variant="heading1">
          Project Not Found
        </Text>
        <Text as="p" variant="paragraph">
          The project you are looking for does not exist or has been removed.
        </Text>
        <div>
          <NavLink variant="button" appearance="primary" href="/projects">
            <ArrowLeftIcon size="24" weight="bold" />
            Back to Projects
          </NavLink>
        </div>
      </Stack>
    </Section>
  );
}
