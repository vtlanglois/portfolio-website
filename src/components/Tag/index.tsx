import { WithVariant } from "@/types";
import {
  PersonArmsSpreadIcon,
  PersonIcon,
  WrenchIcon,
  ScrollIcon,
  RobotIcon,
  AtomIcon,
  PaletteIcon,
  FigmaLogoIcon,
  GitMergeIcon,
  GithubLogoIcon,
  FileCodeIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export type TagVariant = "tech" | "human" | "topic";

export type IconName =
  | "a11y"
  | "robot"
  | "atom"
  | "palette"
  | "figma"
  | "git"
  | "github"
  | "file-code"
  | TagVariant;

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
  topic: "bg-magenta text-foreground dark:bg-teal",
};

const variantIcons = {
  tech: <WrenchIcon weight="fill" className="inline-block" />,
  human: <PersonIcon weight="fill" className="inline-block" />,
  topic: <ScrollIcon weight="fill" className="inline-block" />,
};

const icons = {
  a11y: <PersonArmsSpreadIcon weight="fill" className="inline-block" />,
  robot: <RobotIcon weight="fill" className="inline-block" />,
  atom: <AtomIcon weight="fill" className="inline-block" />,
  palette: <PaletteIcon weight="fill" className="inline-block" />,
  figma: <FigmaLogoIcon weight="fill" className="inline-block" />,
  git: <GitMergeIcon weight="fill" className="inline-block" />,
  github: <GithubLogoIcon weight="fill" className="inline-block" />,
  "file-code": <FileCodeIcon weight="fill" className="inline-block" />,
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
