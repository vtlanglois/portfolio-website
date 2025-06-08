"use client";

import toggleTheme from "@/utils/themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   localStorage.removeItem("theme");
    //   return;
    // }

    toggleTheme()

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  const handleToggle = () => {
    if (theme === "light") {
      console.log("is light, swithcing to darj");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      // toggleTheme("dark")
      console.log("is dark, swithcing to lighjt");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    toggleTheme();
    // console.log(theme);
  };

  return (
    <>
      <button onClick={() => handleToggle(theme)}>{theme}</button>
    </>
  );
}
