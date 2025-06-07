import clsx from "clsx";
import Text from "@/components/Text";
import Divider from "@/components/Divider";

interface SectionProps
  extends React.PropsWithChildren,
    React.ComponentProps<"section"> {
}

interface SectionHeaderProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  const classes = clsx("w-full flex flex-row gap-3", className);
  return (
    <div className="w-full">
      <Text as="h2" variant="heading2" className={classes}>
        {children}
      </Text>
      <Divider />
    </div>
  );
}

export default function Section({
  children,
  className,
}: SectionProps) {
  const classes = clsx(
    "flex flex-col items-start justify-stretch gap-4 py-12",
    className,
  );
  return <section className={classes}>{children}</section>;
}
