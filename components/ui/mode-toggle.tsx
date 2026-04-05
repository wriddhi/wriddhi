"use client";

import { useTheme } from "next-themes";
import {
  Resolved,
  ThemeSelection,
  ThemeToggler,
} from "@/components/animate-ui/primitives/effects/theme-toggler";
import { Monitor, Moon, SunDim } from "lucide-react";
import { useMemo } from "react";
import GlassSurface from "@/components/ui/glass-surface";

export const ModeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const typedTheme = theme as ThemeSelection;
  const typedResolvedTheme = resolvedTheme as Resolved;

  const nextTheme = useMemo(() => {
    return typedResolvedTheme === "light" ? "dark" : "light";
  }, [typedResolvedTheme]);

  return (
    <ThemeToggler
      theme={typedTheme}
      resolvedTheme={typedResolvedTheme}
      setTheme={setTheme}
    >
      {({ effective, toggleTheme }) => (
        <GlassSurface height={40} width={40} distortionScale={-100}>
          <button
            onClick={() => toggleTheme(nextTheme)}
            className="cursor-pointer"
          >
            {effective === "system" ? (
              <Monitor className="size-4" />
            ) : effective === "dark" ? (
              <Moon className="size-4" />
            ) : (
              <SunDim className="size-4" />
            )}
          </button>
        </GlassSurface>
      )}
    </ThemeToggler>
  );
};
