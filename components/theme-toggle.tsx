"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { MagneticButton } from "./magnetic-button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <MagneticButton
    variant="secondary"
      className="flex items-center justify-center rounded-md h-9 w-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunIcon className="h-5 w-5 dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </MagneticButton>
  );
}
