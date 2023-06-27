import React, { Dispatch, SetStateAction } from "react";

declare global {
  type ThemeContextType = "light" | "dark";
  interface ThemeContext {
    theme: ThemeContextType;
    changeTheme: Dispatch<SetStateAction<ThemeContextType>> | null;
  }
}

export const ThemeContext = React.createContext<ThemeContext>({
  theme: "light",
  changeTheme: null,
});
