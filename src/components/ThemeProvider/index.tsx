"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "@/utils/cookieTheme";

type ThemeContextType = {
  theme: Theme;
  effectiveTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  effectiveTheme: "light",
  setTheme: () => null,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>("system");
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">(
    "light",
  );

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange() {
      if (theme === "system") {
        setEffectiveTheme(mediaQuery.matches ? "dark" : "light");
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Initial setup
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    const initialTheme = stored || "system";
    setThemeState(initialTheme);

    if (initialTheme === "system") {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setEffectiveTheme(systemDark ? "dark" : "light");
    } else {
      setEffectiveTheme(initialTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setEffectiveTheme(systemDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemDark);
    } else {
      localStorage.setItem("theme", newTheme);
      setEffectiveTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
