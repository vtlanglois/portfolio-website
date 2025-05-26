import clsx from "clsx";

interface StackProps extends React.PropsWithChildren, React.ComponentProps<"div"> {}


export default function Stack({
  children,
  className,
}: StackProps) {
  const classes = clsx("flex flex-col gap-4", className);
  return <div className={classes}>{children}</div>;
}


