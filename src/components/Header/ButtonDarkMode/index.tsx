import React from "react";
import { ThemeContext } from "../../../ThemeContext";
import Sun from "../../../assets/sol.svg";
import Moon from "../../../assets/lua.svg";
import "./ButtonDarkMode.scss";

const ButtonDarkMode = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  function handleClick(): void {
    const changedTheme = theme === "light" ? "dark" : "light";
    if (changeTheme) {
      changeTheme(changedTheme);
    }
  }

  return (
    <div className={`${theme} buttonDarkMode`} onClick={handleClick}>
      <div className={`${theme} divButton`}>
        <img src={theme === "dark" ? Moon : Sun} alt="Your SVG" />
      </div>
    </div>
  );
};

export default ButtonDarkMode;
