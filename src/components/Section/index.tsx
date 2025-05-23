import clsx from "clsx";

interface SectionProps
  extends React.PropsWithChildren,
    React.ComponentProps<"section"> {}

export default function Section({ children, className }: SectionProps) {
  const classes = clsx(
    "flex flex-col items-start justify-stretch gap-4 py-12",
    className,
  );
  return <section className={classes}>{children}</section>;
}
