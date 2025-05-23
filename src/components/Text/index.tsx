import { WithVariant } from "@/types";
import clsx from "clsx";

type TextVariant = "heading1" | "heading2" | "heading3" | "paragraph";

interface TextProps
  extends WithVariant<TextVariant>,
    React.ComponentProps<"div"> {
  /** The HTML element to render as the semantic meaning of Text */
  as: string;
}

const variantStyles = {
  heading1: "text-4xl",
  heading2: "text-2xl",
  heading3: "text-1xl",
  paragraph: "text-1xl",
};

export default function Text({ as, variant, children }: TextProps) {
  const Element = as;
  const classes = clsx(variantStyles[variant]);
  return <Element className={classes}>{children}</Element>;
}
