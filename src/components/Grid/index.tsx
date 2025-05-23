import clsx from "clsx";

interface GridProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}


export default function Grid({ children, className }: GridProps) {
  const classes = clsx(
    "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
    className,
  );
  return <div className={classes}>{children}</div>;
}