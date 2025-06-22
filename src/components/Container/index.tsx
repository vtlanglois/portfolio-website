import clsx from "clsx";
import { useMemo } from "react";

interface ContainerProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Container({ children, className }: ContainerProps) {
  const classes = useMemo(() => clsx("mx-auto max-w-screen-xl px-3 lg:px-16", className), [className]);
  return <div className={classes}>{children}</div>;
}
