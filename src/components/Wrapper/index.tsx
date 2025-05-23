import clsx from "clsx";

interface WrapperProps extends React.PropsWithChildren, React.ComponentProps<'div'> {}

export default function Wrapper({ children, className }: WrapperProps ) {
  const classes = clsx(
    "mx-auto min-h-screen max-w-screen-xl px-3 lg:px-12",
    className
  );
  return (
    <div className={classes}>{children}</div>
  );
}
