
import clsx from "clsx";

interface CardProps extends React.PropsWithChildren, React.ComponentProps<"div"> {}

export default function Card({children, className}: CardProps) {
  const classes = clsx(
    // "rounded-4xl border-2 border-solid border-gray-200 p-6 shadow-lg bg-slate-50",
    className,
  );
  return (
    <div className={classes}>
      {children}
    </div>
  )