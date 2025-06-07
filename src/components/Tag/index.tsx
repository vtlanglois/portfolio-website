import { WithVariant } from "@/types";
import {
  PersonArmsSpreadIcon,
  PersonIcon,
  WrenchIcon,
  ScrollIcon,
  RobotIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export type TagVariant = "tech" | "human" | "topic";

export type IconName = "a11y" | "robot" | TagVariant;

interface TagProps
  extends WithVariant<TagVariant>,
    React.PropsWithChildren,
    React.ComponentProps<"span"> {
  /** Optional icon to display in the tag */
  icon?: IconName;
}

const variantStyles = {
  tech: "bg-secondary-100 text-foreground-secondary dark:bg-red dark:text-foreground",
  human: "bg-green text-foreground dark:bg-purple",
  topic: "bg-magenta text-foreground",
};

const variantIcons = {
  tech: <WrenchIcon weight="fill" className="inline-block" />,
  human: <PersonIcon weight="fill" className="inline-block" />,
  topic: <ScrollIcon weight="fill" className="inline-block" />,
};

const icons = {
  a11y: <PersonArmsSpreadIcon weight="fill" className="inline-block" />,
  robot: <RobotIcon weight="fill" className="inline-block" />,
};

export default function Tag({
  variant = "tech",
  icon,
  children,
  className = "",
}: TagProps) {
  const classes = clsx(
    "rounded-full px-3 py-2 font-sans text-sm font-bold flex gap-1 items-center",
    variantStyles[variant],
    className,
  );

  const selectedIcon = () => {
    if (icon) {
      console.log("ICON!!!");
      return icons[icon];
    }
    return variantIcons[variant];
  };

  return (
    <span className={classes}>
      {selectedIcon()}
      {children}
    </span>
  );
}
