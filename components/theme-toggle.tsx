"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className="p-2 flex flex-col justify-center"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="mb-2 m-auto size-5 text-black dark:text-white dark:hidden" />
      <Moon className="mb-2 m-auto hidden size-5  dark:block" />
      <div className="text-sm m-auto">Mood</div>
    </button>
  );
}
