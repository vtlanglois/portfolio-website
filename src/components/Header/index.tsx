"use client";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import NavLink from "@/components/NavLink";
import ThemeToggle from "../ThemeToggle";
import Divider from "../Divider";
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Hide all elements outside the menu from tab order when menu is open
  useEffect(() => {
    const focusableElements = document.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusableElements.forEach((el) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(el as Node)
      ) {
        (el as HTMLElement).tabIndex = -1;
      } else {
        (el as HTMLElement).tabIndex = 0;
      }
    });
  }, [menuOpen]);

  return (
    <header className="border-primary-600 bg-primary-400 dark:bg-red sticky top-0 z-40 rounded-b-lg border-b-2 border-solid p-2 shadow-lg lg:px-16 lg:py-4 2xl:mx-auto 2xl:max-w-screen-xl dark:border-transparent dark:shadow-none">
      <Container>
        <nav className="justify-content-center grid grid-cols-5 place-content-center content-between">
          <div className="col-span-3 flex items-center">
            <NavLink
              variant="button"
              appearance="secondary"
              href="/"
              className="mx-0 font-bold lg:text-xl"
            >
              Vincent Langlois
            </NavLink>
          </div>
          <div className="col-span-2 ml-auto flex lg:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              aria-hidden={menuOpen}
            >
              <ListIcon size={32} weight="bold" className="text-white" />
            </button>
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

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-50 motion-safe:transition-colors motion-safe:duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto bg-black/50"
            : "pointer-events-none bg-transparent",
        )}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Mobile Menu Drawer */}
      <aside
        className={clsx(
          "bg-primary-500 dark:bg-red fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs transform rounded-br-4xl shadow-xl motion-safe:transition-transform motion-safe:duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-hidden={!menuOpen}
        ref={menuRef}
      >
        <button
          className="absolute top-2.5 right-4"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <XIcon size={32} weight="bold" className="text-white" />
        </button>
        <nav className="flex flex-col gap-4 p-6">
          <NavLink
            href="/"
            variant="text"
            appearance="primary"
            className="!text-foreground text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            href="/about"
            variant="text"
            appearance="primary"
            className="!text-foreground text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            href="/projects"
            variant="text"
            appearance="primary"
            className="!text-foreground text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <Divider variant="secondary" />
          <ThemeToggle className="mt-auto !p-0" size="32" />
        </nav>
      </aside>
    </header>
  );
}
