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
  BrowserIcon,
  CircuitryIcon,
  UsersIcon,
  DatabaseIcon,
  GameControllerIcon,
  FlaskIcon,
  BugIcon,
  LegoIcon,
  StarIcon,
  PottedPlantIcon,
  PersonSimpleHikeIcon,
  CookingPotIcon,
  MusicNoteIcon,
  BookIcon,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { TagVariant, IconName } from "@/types/tagTypes";

interface TagProps
  extends WithVariant<TagVariant>,
    React.PropsWithChildren,
    React.ComponentProps<"span"> {
  /** Optional icon to display in the tag */
  icon?: IconName;
}

const variantStyles: Record<TagVariant, string> = {
  tech: "bg-secondary-100 text-foreground-secondary dark:bg-red dark:text-foreground",
  human: "bg-green text-foreground dark:bg-purple",
  topic: "bg-magenta text-foreground dark:bg-teal",
  tool: "bg-mint text-foreground-secondary dark:bg-cool-blue dark:text-foreground",
  hobby: "bg-green text-foreground dark:bg-purple",
};

const variantIcons = {
  tech: <FlaskIcon weight="fill" className="inline-block" />,
  human: <PersonIcon weight="fill" className="inline-block" />,
  topic: <ScrollIcon weight="fill" className="inline-block" />,
  tool: <WrenchIcon weight="fill" className="inline-block" />,
  hobby: <StarIcon weight="fill" className="inline-block" />,
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
  browser: <BrowserIcon weight="fill" className="inline-block" />,
  circuit: <CircuitryIcon weight="fill" className="inline-block" />,
  users: <UsersIcon weight="fill" className="inline-block" />,
  db: <DatabaseIcon weight="fill" className="inline-block" />,
  controller: <GameControllerIcon weight="fill" className="inline-block" />,
  bug: <BugIcon weight="fill" className="inline-block" />,
  lego: <LegoIcon weight="fill" className="inline-block" />,
  "potted-plant": <PottedPlantIcon weight="fill" className="inline-block" />,
  hiking: <PersonSimpleHikeIcon weight="fill" className="inline-block" />,
  cooking: <CookingPotIcon weight="fill" className="inline-block" />,
  song: <MusicNoteIcon weight="fill" className="inline-block" />,
  book: <BookIcon weight="fill" className="inline-block" />,
};

export default function Tag({
  variant = "tech",
  icon,
  children,
  className = "",
}: TagProps) {
  const classes = clsx(
    "flex items-center gap-1 rounded-full px-2 py-1 font-sans text-sm leading-none font-bold tracking-tight lg:px-3 lg:py-1.5 shadow-md dark:shadow-none",
    variantStyles[variant],
    className,
  );

  const selectedIcon = () => {
    if (icon && icon in icons) {
      return icons[icon as keyof typeof icons];
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
