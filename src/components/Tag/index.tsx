import { WithVariant } from "@/types";
import { PersonIcon, WrenchIcon } from "@phosphor-icons/react/dist/ssr";
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

const variantIcons = {
  tech: <WrenchIcon weight="fill" className="inline-block" />,
  human: <PersonIcon weight="fill" className="inline-block" />,
};

export default function Tag({
  variant = "tech",
  children,
  className = "",
}: TagProps) {
  const classes = clsx(
    "rounded-full px-3 py-2 font-sans text-sm font-bold flex gap-1 items-center",
    variantStyles[variant],
    className,
  );
  return (
    <span className={classes}>
      {variantIcons[variant]}
      {children}
    </span>
  );
}
