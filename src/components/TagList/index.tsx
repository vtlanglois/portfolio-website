import Tag from "@/components/Tag";
import clsx from "clsx";

interface TagListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Tags to render in list format */
  tags: string[];
  /** Optional aria-label for accessibility */
  ariaLabel?: string;
}

export default function TagList({ tags, ariaLabel, className }: TagListProps) {
  const classes = clsx("flex flex-wrap gap-x-2 gap-y-4", className);
  return (
    <ul className={classes} aria-label={ariaLabel}>
      {tags.map((tag, index) => (
        <li key={index}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
