import clsx from "clsx";
import { useMemo } from "react";

interface WrapperProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Wrapper({ children, className }: WrapperProps) {
  const classes = useMemo(
    () => clsx("mx-auto min-h-screen max-w-screen-xl px-3 lg:px-16", className),
    [className],
  );
  return <div className={classes}>{children}</div>;
}
