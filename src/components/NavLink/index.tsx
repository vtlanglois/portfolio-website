"use client";

import { WithVariant, WithAppearance } from "@/types";
import clsx from "clsx";
import Link from "next/link";

type NavLinkVariant = "button" | "icon" | "text";
type NavLinkAppearance = "primary" | "secondary";

interface LinkProps
  extends WithVariant<NavLinkVariant>,
    WithAppearance<NavLinkAppearance>,
    React.ComponentProps<"a"> {
      href: string,
    }

const variantStyles: Record<
  NavLinkVariant,
  Record<NavLinkAppearance, string> & { base: string }
> = {
  button: {
    base: "text-md inline-flex items-center justify-center gap-2 rounded-xl p-3 font-sans tracking-tight",
    primary:
      "bg-secondary dark:bg-red transition-color text-foreground-secondary dark:text-foreground font-bold shadow-none motion-safe:transition-shadow motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:translate-x-0.5 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 hover:bg-secondary-50 active:bg-secondary-300 hover:shadow-sm",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  },
  icon: {
    base: "inline-flex items-center justify-center rounded-xl p-2",
    primary:
      "transition-color bg-transparent text-white shadow-none motion-safe:transition-shadow motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:translate-x-0.5 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm",
    secondary: "text-gray-800 hover:text-gray-900",
  },
  text: {
    base: "inline font-sans font-bold underline decoration-solid mx-0.2",
    primary: "text-foreground hover:text-cream dark:hover:text-cyan",
    secondary: "text-gray-800 hover:text-gray-900",
  },
};

export default function NavLink({
  variant = "text",
  appearance = "primary",
  children,
  className,
  href,
  target,
  rel,
  ...props
}: LinkProps) {
  const classes = clsx(
    variantStyles[variant].base,
    variantStyles[variant][appearance],
    className,
  );

  if (!href?.startsWith("http")) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target={target || "_blank"}
      rel={rel || "noreferrer noopener"}
      {...props}
    >
      {children}
    </a>
  );
}
