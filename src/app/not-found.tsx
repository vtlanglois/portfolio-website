import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import Stack from "@/components/Stack";
import Text from "@/components/Text";
import {
  ArrowLeftIcon,
  SmileyMeltingIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <Section>
      <Stack>
        <SmileyMeltingIcon size="64" weight="fill" className="text-secondary" />
        <Text as="h1" variant="heading1">
          Page Not Found
        </Text>
        <Text as="p" variant="paragraph">
          The page you are looking for does not exist or has been removed.
        </Text>
        <div>
          <NavLink variant="button" appearance="primary" href="/">
            <ArrowLeftIcon size="24" weight="bold" />
            Back to Home
          </NavLink>
        </div>
      </Stack>
    </Section>
  );
}
