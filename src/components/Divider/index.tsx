import clsx from "clsx";
import { useMemo } from "react";
import { WithVariant } from "@/types";

type DividerVariant = "primary" | "secondary";
interface DividerProps
  extends WithVariant<DividerVariant>,
    React.ComponentProps<"hr"> {
  ariaOrientation?: React.AriaAttributes["aria-orientation"];
}

export default function Divider({
  variant = "primary",
  ariaOrientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  const classes = useMemo(
    () =>
      clsx(
        variant === "primary" && "border-foreground dark:border-red",
        variant === "secondary" && "border-white",
        ariaOrientation === "horizontal" &&
          "h-2 w-full translate-y-0.5 border-t-3",
        ariaOrientation === "vertical" && "h-[75%] w-0.5 border-0 border-s-2",
        className,
      ),
    [className, variant, ariaOrientation],
  );

  return (
    <hr aria-orientation={ariaOrientation} className={classes} {...props} />
  );
}
