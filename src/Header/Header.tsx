import React from "react";
import { ThemeContext } from "../ThemeContext";

interface AppProps {
  setTheme: (param: ThemeContextType) => void;
}

const Header = ({ setTheme }: AppProps) => {
  const theme = React.useContext(ThemeContext);

  function handleClick(): void {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
  }

  return (
    <div className={`${theme}`} onClick={handleClick}>
      {theme}
    </div>
  );
};

export default Header;
