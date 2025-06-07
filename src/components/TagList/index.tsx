import Tag from "@/components/Tag";
import type { TagVariant, TagItem } from "@/types/tagTypes";
import { sortTags } from "@/utils/tagUtils";
import clsx from "clsx";

interface TagListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Tags to render in list format */
  tags: TagItem[];
  /** Default variant to apply to all tags */
  defaultVariant?: TagVariant;
  /** Optional aria-label for accessibility */
  ariaLabel?: string;
}

export default function TagList({
  tags,
  defaultVariant = "tech",
  ariaLabel,
  className,
}: TagListProps) {
  const classes = clsx("flex flex-wrap gap-x-2 gap-y-3", className);

  const sortedTags = sortTags(tags);
  console.log("Sorted Tags:", sortedTags);

  return (
    <ul className={classes} aria-label={ariaLabel}>
      {sortedTags.map((tag, index) => (
        <li key={index}>
          <Tag variant={tag.variant || defaultVariant} icon={tag.icon}>
            {tag.text}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
