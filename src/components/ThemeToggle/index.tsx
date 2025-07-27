"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";
import type { Theme } from "@/utils/cookieTheme";
import { Desktop, MoonStars, SunDim } from "phosphor-react";
import clsx from "clsx";

interface ThemeToggleProps {
  className?: string;
  /** Overridable size of the button */
  size?: string;
}

export default function ThemeToggle({
  className,
  size = "24",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme =
      theme === "system" ? "light" : theme === "light" ? "dark" : "system";

    setTheme(newTheme);
  };

  if (!mounted) return null;

  const getIcon = () => {
    if (theme === "system") {
      // Always show computer icon when in system mode
      return <Desktop weight="fill" size={size} />;
    }
    // For manual modes, show the corresponding icon
    return theme === "dark" ? (
      <MoonStars weight="fill" size={size} />
    ) : (
      <SunDim weight="fill" size={size} />
    );
  };

  // Get the currently active theme for the tooltip/aria-label
  const getNextTheme = () => {
    if (theme === "system") return "light";
    if (theme === "light") return "dark";
    return "system";
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "hover:bg-secondary-100 rounded-md p-2 motion-safe:transition-colors motion-safe:duration-200 dark:hover:bg-gray-800",
        className,
      )}
      aria-label={`Switch to ${getNextTheme()} theme`}
      title={`Switch to ${getNextTheme()} theme`}
    >
      <span className="sr-only">Toggle theme (Light/Dark/System)</span>
      {getIcon()}
    </button>
  );
}
