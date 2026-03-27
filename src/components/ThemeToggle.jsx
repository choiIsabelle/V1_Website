import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-nav-link);
  line-height: 0;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: var(--color-nav-hover);
    background-color: var(--color-theme-toggle-hover-bg);
  }

  &:focus-visible {
    outline: 2px solid var(--color-nav-link);
    outline-offset: 2px;
  }
`;

function MoonIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <IconButton
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
