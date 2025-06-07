import clsx from "clsx";
import Text from "@/components/Text";
import Divider from "@/components/Divider";

interface SectionProps
  extends React.PropsWithChildren,
    React.ComponentProps<"section"> {
  /** The heading for the section */
  heading?: React.ReactNode | string;
}

interface SectionHeaderProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  const classes = clsx("w-full", className);
  return (
    <div className="w-full">
      <Text as="h2" variant="heading2" className="flex flex-row gap-3">
        {children}
      </Text>
      <Divider />
    </div>
  );
}

export default function Section({
  heading,
  children,
  className,
}: SectionProps) {
  const classes = clsx(
    "flex flex-col items-start justify-stretch gap-4 py-12",
    className,
  );
  return <section className={classes}>{children}</section>;
}
