import Container from "@/components/Container";
import NavLink from "@/components/NavLink";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="border-primary-600 bg-primary-400 dark:bg-red light:shadow-lg sticky top-0 z-50 rounded-b-lg border-b-2 border-solid px-3 py-4 lg:px-16 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent">
      <Container>
        <nav className="grid-cols-5 content-between lg:grid">
          <div className="col-span-3">
            <NavLink
              variant="text"
              appearance="primary"
              href="/"
              className="mx-0 text-xl"
            >
              Vincent Langlois
            </NavLink>
          </div>
          <div className="col-span-2 hidden flex-row items-center justify-end gap-3 lg:flex">
            <NavLink
              variant="text"
              appearance="primary"
              href="/about"
              className="mx-0 text-xl"
            >
              About
            </NavLink>
            <NavLink
              variant="text"
              appearance="primary"
              href="/projects"
              className="mx-0 text-xl"
            >
              Projects
            </NavLink>
            <NavLink
              variant="text"
              appearance="primary"
              href="/"
              className="mx-0 text-xl"
            >
              Resume
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
