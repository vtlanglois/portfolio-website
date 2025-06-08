import { TagVariant } from "@/types/tagTypes";
import type { TagGroup, TagItem } from "@/types/tagTypes";

export const sortTags = (tags: TagItem[]): TagItem[] => {
  // First, sort by variant and alphabetically
  const sorted = [...tags].sort((a, b) => {
    const variantPriority: Record<TagVariant, number> = {
      tech: 1,
      human: 2,
      topic: 3,
      tool: 4,
      hobby: 5,
    };
    const aPriority = variantPriority[a.variant || "tech"] || 0;
    const bPriority = variantPriority[b.variant || "tech"] || 0;
    if (aPriority !== bPriority) {
      return aPriority - bPriority; // Sort by priority
    }
    // If variants are the same, sort alphabetically by text
    return a.text.localeCompare(b.text, undefined, { sensitivity: "base" });
  });

  // Then, group by first letter (case-insensitive)
  const grouped: TagItem[] = [];
  const groups: Record<string, TagItem[]> = {};

  const groupPriority: Record<TagGroup, number> = {
    frameworks: 1,
    languages: 2,
    css: 3,
    backend: 4,
    "version control": 5,
    hardware: 6,
    misc: 7,
    ai: 8,
    soft: 9,
    interpersonal: 10,
    topic: 11,
    tool: 12,
    hobby: 13,
  };

  for (const tag of sorted) {
    const key = tag.group.toLowerCase();
    if (!groups[key]) groups[key] = [];
    groups[key].push(tag);
  }

  // Flatten the groups in alphabetical order
  Object.keys(groups)
    .sort(
      (a, b) =>
        (groupPriority[a as TagGroup] || 99) -
        (groupPriority[b as TagGroup] || 99),
    )
    .forEach((key) => {
      grouped.push(...groups[key]);
    });

  return grouped;
};
