export type Theme = "light" | "dark" | "system";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme) return storedTheme;

  return "system";
}
