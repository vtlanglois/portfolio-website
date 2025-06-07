import type { TagItem } from "@/components/TagList";

export const sortTags = (tags: TagItem[]): TagItem[] => {
  return tags.sort((a, b) => {
    // Sort by variant priority: tech > human > topic
    const variantPriority: Record<string, number> = {
      tech: 1,
      human: 2,
      topic: 3,
    };
    const aPriority = variantPriority[a.variant || "tech"] || 0;
    const bPriority = variantPriority[b.variant || "tech"] || 0;
    if (aPriority !== bPriority) {
      return aPriority - bPriority; // Sort by priority
    }
    // If variants are the same, sort alphabetically by text
    return a.text.localeCompare(b.text, undefined, { sensitivity: "base" });
  });
};
