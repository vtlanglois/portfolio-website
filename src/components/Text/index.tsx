import { WithVariant } from "@/types";
import clsx from "clsx";
import { useMemo } from "react";

type TextVariant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "paragraph"
  | "caption";

interface TextProps
  extends WithVariant<TextVariant>,
    React.ComponentProps<"div"> {
  /** The HTML element to render as the semantic meaning of Text */
  as: React.ElementType;
}

const variantStyles = {
  heading1: "font-serif font-bold text-3xl lg:text-4xl",
  heading2:
    "flex flex-row items-center gap-2 font-serif text-2xl lg:text-3xl font-bold",
  heading3:
    "font-semibold flex flex-row items-center gap-2 font-serif text-lg lg:text-xl",
  paragraph: "font-sans text-lg lg:text-xl tracking-tight",
  caption: "font-sans text-sm tracking-tight",
};

export default function Text({
  as,
  variant,
  children,
  className,
  ...rest
}: TextProps) {
  const Element = as;
  const classes = useMemo(
    () => clsx(variantStyles[variant], className, "text-foreground"),
    [variant, className],
  );
  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}
