import Text from "@/components/Text";
import clsx from "clsx";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function List({ children, className }: ListProps) {
  return (
    <ul className={clsx("list-inside list-disc", className)}>{children}</ul>
  );
}

export function ListItem({ children, className }: ListItemProps) {
  return (
    <Text as="li" variant="paragraph" className={className}>
      {children}
    </Text>
  );
}
