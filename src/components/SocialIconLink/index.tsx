"use client";

import NavLink from "@/components/NavLink";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  CodepenLogoIcon,
} from "@phosphor-icons/react";

interface IconLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function GitHubIconLink({ className, href }: IconLinkProps) {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href={href}
      aria-label="Github"
      className={className}
    >
      <GithubLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}

export function LinkedInIconLink({ className, href }: IconLinkProps) {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href={href}
      aria-label="LinkedIn"
      className={className}
    >
      <LinkedinLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}

export function CodepenIconLink({ className, href }: IconLinkProps) {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href={href}
      aria-label="CodePen"
      className={className}
    >
      <CodepenLogoIcon size="32" />
    </NavLink>
  );
}
