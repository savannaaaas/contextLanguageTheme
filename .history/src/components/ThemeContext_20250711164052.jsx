import { createContext, useState } from "react";
const ThemeContext = createContext(null);
const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
};
