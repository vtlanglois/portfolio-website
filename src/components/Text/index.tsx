import { WithVariant } from "@/types";
import clsx from "clsx";

type TextVariant = "heading1" | "heading2" | "heading3" | "paragraph";

interface TextProps
  extends WithVariant<TextVariant>,
    React.ComponentProps<"div"> {
  /** The HTML element to render as the semantic meaning of Text */
  as: React.ElementType;
}

const variantStyles = {
  heading1: "font-serif font-bold text-4xl",
  heading2: "flex flex-row items-center gap-2 font-serif text-3xl font-bold",
  heading3:
    "light:font-light flex flex-row items-center gap-2 font-serif text-xl",
  paragraph: "font-sans text-xl tracking-tight",
};

export default function Text({ as, variant, children, className }: TextProps) {
  const Element = as;
  const classes = clsx(variantStyles[variant], className, "text-foreground");
  return <Element className={classes}>{children}</Element>;
}
