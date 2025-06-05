import clsx from "clsx";
import Text from "@/components/Text";
import Divider from "@/components/Divider";

interface SectionProps
  extends React.PropsWithChildren,
    React.ComponentProps<"section"> {
  /** The heading for the section */
  heading?: React.ReactNode | string;
}

export default function Section({
  heading,
  children,
  className,
}: SectionProps) {
  const classes = clsx(
    "flex flex-col items-start justify-stretch gap-4 py-12",
    className,
  );
  return (
    <section className={classes}>
      <>
        {heading && (
          <div className="w-full">
            <Text as="h2" variant="heading2">
              {heading}
            </Text>
            <Divider />
          </div>
        )}
        {children}
      </>
    </section>
  );
}
