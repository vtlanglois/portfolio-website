import clsx from "clsx";

interface TagProps
  extends React.PropsWithChildren,
    React.ComponentProps<"span"> {}

export default function Tag({ children, className = "" }: TagProps) {
  const classes = clsx(
    "rounded-full bg-secondary px-3 py-2 font-sans text-sm font-bold text-foreground-secondary",
    className,
  );
  return <span className={classes}>{children}</span>;
}
