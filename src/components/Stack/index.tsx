import clsx from "clsx";
import { useMemo } from "react";

interface StackProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Stack({ children, className }: StackProps) {
  const classes = useMemo(
    () => clsx("flex flex-col gap-4", className),
    [className],
  );
  return <div className={classes}>{children}</div>;
}
