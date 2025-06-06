export type TagVariant = "tech" | "human" | "topic" | "tool";

export type IconName =
  | "a11y"
  | "robot"
  | "atom"
  | "palette"
  | "figma"
  | "git"
  | "github"
  | "file-code"
  | "browser"
  | "circuit"
  | "users"
  | "db"
  | "controller"
  | "bug"
  | TagVariant;

/** Used to pair similar tags together */
export type TagGroup =
  | "languages"
  | "frameworks"
  | "css"
  | "backend"
  | "version control"
  | "hardware"
  | "misc"
  | "tool"
  | "ai"
  | "soft"
  | "interpersonal"
  | "topic";

export interface TagItem {
  /** The tag text */
  text: string;
  /** Optional variant for the tag */
  variant?: TagVariant;
  /** Optional icon name for the tag */
  icon?: IconName;
  /** Group name for the tag */
  group: TagGroup;
}
