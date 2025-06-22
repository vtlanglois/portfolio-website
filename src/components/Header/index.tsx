import Container from "@/components/Container";
import NavLink from "@/components/NavLink";
import ThemeToggle from "../ThemeToggle";
import Divider from "../Divider";

export default function Header() {
  return (
    <header className="border-primary-600 bg-primary-400 dark:bg-red sticky top-0 z-40 rounded-b-lg border-b-2 border-solid p-2 shadow-lg lg:px-16 lg:py-4 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent dark:shadow-none">
      <Container>
        <nav className="justify-content-center grid-cols-5 place-content-center content-between lg:grid">
          <div className="col-span-3">
            <NavLink
              variant="button"
              appearance="secondary"
              href="/"
              className="mx-0 font-bold lg:text-xl"
            >
              Vincent Langlois
            </NavLink>
          </div>
          <div className="col-span-2 hidden flex-row items-center justify-end gap-3 lg:flex">
            <NavLink
              variant="button"
              appearance="secondary"
              href="/about"
              className="mx-0 text-xl font-bold"
            >
              About
            </NavLink>
            <NavLink
              variant="button"
              appearance="secondary"
              href="/projects"
              className="mx-0 text-xl font-bold"
            >
              Projects
            </NavLink>
            <NavLink
              variant="button"
              appearance="secondary"
              href="/"
              className="mx-0 border-y-0 text-xl font-bold"
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
