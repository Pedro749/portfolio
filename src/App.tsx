import React from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.scss";
import Header from "./Header/Header";

const App = () => {
  const [theme, setTheme] = React.useState<ThemeContextType>("light");
  return (
    <ThemeContext.Provider value={theme}>
      <main className={`${theme}`}>
        <Header setTheme={setTheme} />
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
