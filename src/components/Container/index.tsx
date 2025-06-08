import clsx from "clsx";

interface ContainerProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Container({ children, className }: ContainerProps) {
  const classes = clsx("mx-auto max-w-screen-xl px-3 lg:px-16", className);
  return <div className={classes}>{children}</div>;
}
