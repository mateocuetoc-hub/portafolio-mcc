"use client";

import { useEffect, useState } from "react";

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const useDarkMode = savedTheme
      ? savedTheme === "dark"
      : prefersDark;

    setDarkMode(useDarkMode);
    document.documentElement.dataset.theme =
      useDarkMode ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    document.documentElement.dataset.theme =
      nextMode ? "dark" : "light";

    localStorage.setItem(
      "portfolio-theme",
      nextMode ? "dark" : "light"
    );
  }

  return (
    <button
      className="themeToggle"
      type="button"
      onClick={toggleTheme}
      aria-label={
        darkMode ? "Activar modo claro" : "Activar modo oscuro"
      }
      title={darkMode ? "Modo claro" : "Modo oscuro"}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
