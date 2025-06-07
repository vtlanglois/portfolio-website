'use client';

import { WithVariant, WithAppearance } from "@/types";
import clsx from "clsx";
import * as NextLink from "next/link";

type LinkVariant = "button" | "icon" | "text";
type LinkAppearance = "primary" | "secondary";

interface LinkProps
  extends WithVariant<LinkVariant>,
    WithAppearance<LinkAppearance>,
    React.ComponentProps<"a"> {}

const variantStyles: Record<
  LinkVariant,
  Record<LinkAppearance, string> & { base: string }
> = {
  button: {
    base: "text-md inline-flex items-center justify-center gap-2 rounded-xl p-3 font-sans tracking-tight",
    primary:
      "bg-secondary transition-color text-foreground-secondary font-bold shadow-none motion-safe:transition-shadow motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:translate-x-0.5 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 hover:bg-secondary-50 active:bg-secondary-300 hover:shadow-sm",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  },
  icon: {
    base: "inline-flex items-center justify-center rounded-xl p-2",
    primary:
      "transition-color bg-transparent text-secondary dark:text-secondary shadow-none motion-safe:transition-shadow motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:translate-x-0.5 motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm",
    secondary: "text-gray-800 hover:text-gray-900",
  },
  text: {
    base: "inline font-sans font-bold underline decoration-solid mx-0.2",
    primary: "text-foreground hover:text-cream dark:hover:text-cyan",
    secondary: "text-gray-800 hover:text-gray-900",
  },
};

export default function Link({
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
      <NextLink className={classes} href={href} {...props}>
        {children}
      </NextLink>
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
