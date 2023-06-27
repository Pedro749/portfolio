import React from "react";

declare global {
  type ThemeContextType = "light" | "dark";
}

export const ThemeContext = React.createContext<ThemeContextType>("light");
