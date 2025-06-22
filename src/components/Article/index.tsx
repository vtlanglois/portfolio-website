import clsx from "clsx";
import { useMemo } from "react";

interface ArticleProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Article({ className, children }: ArticleProps) {
  const classes = useMemo(
    () =>
      clsx(
        "grid grid-cols-1 gap-12 py-3 lg:grid-cols-5 lg:py-12",
        className,
      ),
    [className],
  );
  return <article className={classes}>{children}</article>;
}
