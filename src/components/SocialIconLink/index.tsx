"use client";

import NavLink from "@/components/NavLink";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function GitHubIconLink({ className }: React.HTMLAttributes<"a">) {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href="https://github.com/vtlanglois"
      aria-label="Github"
      className={className}
    >
      <GithubLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}

export function LinkedInIconLink({ className }: React.HTMLAttributes<"a">) {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href="https://www.linkedin.com/in/vtlanglois/"
      aria-label="LinkedIn"
      className={className}
    >
      <LinkedinLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}
