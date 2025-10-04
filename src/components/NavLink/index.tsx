"use client";

import { WithVariant, WithAppearance } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { useMemo } from "react";

type NavLinkVariant = "button" | "icon" | "text";
type NavLinkAppearance = "primary" | "secondary";

interface LinkProps
  extends WithVariant<NavLinkVariant>,
    WithAppearance<NavLinkAppearance>,
    React.ComponentProps<"a"> {
  href: string;
}

const variantStyles: Record<
  NavLinkVariant,
  Record<NavLinkAppearance, string> & { base: string }
> = {
  button: {
    base: "text-sm lg:text-md inline-flex items-center justify-center gap-2 rounded-md font-sans tracking-tight",
    primary:
      "transition-color bg-secondary p-3 font-bold text-foreground-secondary shadow-md dark:shadow-none hover:bg-secondary-50 hover:shadow-lg active:bg-secondary-300 motion-safe:transition-shadow motion-safe:duration-200 dark:bg-red dark:text-foreground dark:hover:bg-cool-blue",
    secondary:
      "p-2 text-foreground duration-200 hover:bg-primary-50  motion-safe:transition-colors dark:hover:bg-black",
  },
  icon: {
    base: "inline-flex items-center justify-center rounded-md p-2",
    primary:
      " bg-transparent text-white motion-safe:transition-colors hover:bg-secondary-100 dark:hover:bg-red motion-safe:duration-200",
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
  const classes = useMemo(
    () =>
      clsx(
        variantStyles[variant].base,
        variantStyles[variant][appearance],
        className,
      ),
    [variant, appearance, className],
  );

  if (!href?.startsWith("http") && !href?.endsWith(".pdf")) {
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
