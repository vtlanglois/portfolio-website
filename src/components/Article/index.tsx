import clsx from "clsx";

interface ArticleProps
  extends React.PropsWithChildren,
    React.ComponentProps<"div"> {}

export default function Article({ className, children }: ArticleProps) {
  const classes = clsx(
    "grid grid-cols-1 gap-12 py-3 lg:grid-cols-5 lg:py-12",
    className,
  );
  return <article className={classes}>{children}</article>;
}
