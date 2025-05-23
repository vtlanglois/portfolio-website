import clsx from "clsx";

interface SectionProps
  extends React.PropsWithChildren,
    React.ComponentProps<"section"> {}

export default function Section({ children, className }: SectionProps) {
  const classes = clsx(
    "flex flex-col items-center justify-center gap-4 py-6",
    className,
  );
  return <section className={classes}>{children}</section>;
}
