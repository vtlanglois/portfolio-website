
import clsx from "clsx";

interface CardProps extends React.PropsWithChildren, React.ComponentProps<"div"> {}

export default function Card({children, className}: CardProps) {
  const classes = clsx(
    "rounded-4xl border-1 border-b-4 border-solid border-gray-200 p-4 shadow-md bg-slate-50",
    className,
  );
  return (
    <div className={classes}>
      {children}
    </div>
  )