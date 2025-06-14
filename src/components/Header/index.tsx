import Container from "@/components/Container";
import NavLink from "@/components/NavLink";
import ThemeToggle from "../ThemeToggle";
import Divider from "../Divider";

export default function Header() {
  return (
    <header className="border-primary-600 bg-primary-400 dark:bg-red shadow-lg dark:shadow-none sticky top-0 z-40 rounded-b-lg border-b-2 border-solid p-2 lg:py-4 lg:px-16 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent">
      <Container>
        <nav className="grid-cols-5 content-between lg:grid place-content-center justify-content-center">
          <div className="col-span-3">
            <NavLink
              variant="button"
              appearance="secondary"
              href="/"
              className="mx-0 lg:text-xl"
            >
              Vincent Langlois
            </NavLink>
          </div>
          <div className="col-span-2 hidden flex-row items-center justify-end gap-3 lg:flex">
            <NavLink
              variant="button"
              appearance="secondary"
              href="/about"
              className="mx-0 text-xl"
            >
              About
            </NavLink>
            <NavLink
              variant="button"
              appearance="secondary"
              href="/projects"
              className="mx-0 text-xl"
            >
              Projects
            </NavLink>
            <NavLink
              variant="button"
              appearance="secondary"
              href="/"
              className="mx-0 border-y-0 text-xl"
            >
              Resume
            </NavLink>
            <Divider variant="secondary" ariaOrientation="vertical" />
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
