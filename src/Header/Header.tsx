import React from "react";
import { ThemeContext } from "../ThemeContext";
import ButtonDarkMode from "./ButtonDarkMode/ButtonDarkMode";
import logoLight from "../assets/logoLight.svg";
import logoDark from "../assets/logoDark.svg";
import "./Header.scss";

const Header = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`${theme} header`}>
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt="LogoPedro Augusto"
      />
      <ul>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Habilidades</a>
        </li>
        <li>
          <a className={`header__contato`} href="">
            Contato
          </a>
        </li>
        <li>
          <ButtonDarkMode />
        </li>
      </ul>
    </div>
  );
};

export default Header;
