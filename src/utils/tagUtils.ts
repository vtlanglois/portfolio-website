import type { TagItem } from "@/components/TagList";

export const sortTags = (tags: TagItem[]): TagItem[] => {
  return tags.sort((a, b) => {
    if (a.variant !== b.variant) {
      return a.variant === "tech" ? -1 : 1; // Place tech tags first
    }
    return 0;
  });
};
