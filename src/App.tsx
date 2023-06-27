import React from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = React.useState<ThemeContextType>("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      <main className={`${theme}`}>
        <div className={`container ${theme}`}>
          <Header />
          <Home />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
