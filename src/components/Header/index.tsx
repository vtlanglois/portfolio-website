import Container from "@/components/Container";
import Link from "@/components//Link";
import { UserIcon } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  return (
    <header className="border-primary-600 bg-primary-400 dark:bg-secondary light:shadow-lg sticky top-0 z-50 rounded-b-lg border-b-2 border-solid px-3 py-4 lg:px-12 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent">
      <Container>
        <Link variant="text" appearance="primary" href="/" className="text-xl">
          Vincent Langlois
        </Link>
      </Container>
    </header>
  );
}
