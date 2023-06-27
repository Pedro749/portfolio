import React from "react";
import bannerHome from "../../assets/home.png";
import { ThemeContext } from "../../ThemeContext";
import "./Home.scss";

const Home = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <div className={`home__text`}>
        <h3>Olá, eu sou o </h3>
        <h1>Pedro Augusto</h1>
        <h3>Sou um programador Full Stack</h3>
        <p>
          Altamente qualificado e com experiência em desenvolvimento de
          software. Minhas habilidades excepcionais em programação me permitem
          oferecer soluções criativas e eficazes para meus clientes.
        </p>
      </div>
      <div>
        <img src={bannerHome} alt="foto Pedro Augusto" />
      </div>
    </div>
  );
};

export default Home;
