import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function getInitialDark(): boolean {
  if (typeof window === "undefined") return true; // SSR-safe default: dark
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  // No saved preference → default to dark
  return true;
}

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(getInitialDark);

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Keep in sync across multiple tabs/windows
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") setDark(e.newValue === "dark");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      title={dark ? "Switch to light" : "Switch to dark"}
      aria-label="Toggle theme"
      className={[
        "inline-flex h-9 w-9 items-center justify-center rounded-lg font-medium transition",
        // light UI
        "border border-slate-200 bg-white/70 hover:bg-slate-100",
        // dark UI overrides
        "dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800",
        // focus ring
        "focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600",
      ].join(" ")}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
