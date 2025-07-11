import { createContext, useState } from "react";
const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
