import { TagItem } from "@/types/tagTypes";
import Stack from "@/components/Stack";
import Text from "@/components/Text";
import TagList from "@/components/TagList";
import React from "react";

export interface ExperienceCardProps {
  /** Heading for the experience, serves at the title held during the experience */
  heading: string | React.ReactNode;
  /** Location for the experience */
  location?: string | React.ReactNode;
  /** Time duration at experience. Includes accessible text */
  duration: {
    text: string | React.ReactNode;
    ariaLabel: string;
  };
  /** Summary of the experience */
  summary: string | React.ReactNode;
  /** Tools, concepts, etc that is associated with the experience.
   * @example The tag `React` is for projects that use React
   */
  tags: TagItem[];
}

export default function ExperienceCard({
  heading,
  location,
  duration,
  summary,
  tags,
}: ExperienceCardProps) {
  return (
    <Stack className="border-primary-400 bg-primary-400 dark:border-red rounded-xl border-4 shadow-lg transition-transform duration-200 ease-in-out motion-safe:hover:scale-105 dark:bg-transparent dark:shadow-none">
      <div className="dark:bg-red flex flex-col items-start justify-between rounded-t-lg p-3 lg:flex-row">
        <div>
          <Text as="h3" variant="heading3">
            {heading}
          </Text>
          <Text as="p" variant="caption" className="font-bold">
            {location}
          </Text>
        </div>
        <Text
          as="p"
          variant="caption"
          aria-label={duration.ariaLabel}
          className="font-bold"
        >
          {duration.text}
        </Text>
      </div>
      <Text as="p" variant="paragraph" className="px-3">
        {summary}
      </Text>
      {tags && <TagList tags={tags} className="px-3 pt-0 pb-3" />}
    </Stack>
  );
}
