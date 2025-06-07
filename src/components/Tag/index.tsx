import { WithVariant } from "@/types";
import clsx from "clsx";

export type TagVariant = "tech" | "human";

interface TagProps
  extends WithVariant<TagVariant>,
    React.PropsWithChildren,
    React.ComponentProps<"span"> {}

const variantStyles = {
  tech: "bg-secondary-100 text-foreground-secondary dark:bg-red dark:text-foreground",
  human: "bg-green text-foreground dark:bg-purple",
};

export default function Tag({
  variant = "tech",
  children,
  className = "",
}: TagProps) {
  const classes = clsx(
    "rounded-full px-3 py-2 font-sans text-sm font-bold ",
    variantStyles[variant],
    className,
  );
  return <span className={classes}>{children}</span>;
}
