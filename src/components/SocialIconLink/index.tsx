"use client";

import NavLink from "@/components/NavLink";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function GitHubIconLink() {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href="https://github.com/vtlanglois"
      aria-label="Github"
    >
      <GithubLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}

export function LinkedInIconLink() {
  return (
    <NavLink
      variant="icon"
      appearance="primary"
      href="https://www.linkedin.com/in/vtlanglois/"
      aria-label="LinkedIn"
    >
      <LinkedinLogoIcon size="32" weight="bold" />
    </NavLink>
  );
}
