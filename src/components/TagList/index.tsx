import Tag from "@/components/Tag";
import type { TagVariant, TagItem } from "@/types/tagTypes";
import { sortTags } from "@/utils/tagUtils";
import clsx from "clsx";
import { useMemo } from "react";

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
  const classes = useMemo(() => clsx("flex flex-wrap gap-x-2 gap-y-3", className), [className]);

  const sortedTags = useMemo(() => sortTags(tags), [tags]);

  return (
    <ul className={classes} aria-label={ariaLabel}>
      {sortedTags.map((tag) => (
        <li key={`${tag.text}-${tag.variant || defaultVariant}`}>
          <Tag variant={tag.variant || defaultVariant} icon={tag.icon}>
            {tag.text}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
