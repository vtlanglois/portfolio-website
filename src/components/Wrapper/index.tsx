import clsx from "clsx";

interface WrapperProps extends React.PropsWithChildren, React.ComponentProps<'div'> {}

export default function Wrapper({ children, className }: WrapperProps ) {
  const classes = clsx(
    "mx-auto min-h-screen max-w-screen-xl p-3 lg:px-6",
    className
  );
  return (
    <div className={classes}>{children}</div>
  );
}
