import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { LanguageContext } from "../providers/LanguageContext";
import Button from "@mui/material/Button";
export const ControlsPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
      <button onClick={() => toggleLanguage()}>Change language</button>
    </>
  );
};
