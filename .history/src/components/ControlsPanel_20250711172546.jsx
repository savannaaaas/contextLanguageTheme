import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { LanguageContext } from "../providers/LanguageContext";
import Button from "@mui/material/Button";
export const ControlsPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <Button
        onClick={toggleTheme}
        style={{ backgroundColor: "pink", color: "#fff" }}
      >
        Change theme
      </Button>
      <Button
        onClick={() => toggleLanguage()}
        style={{ backgroundColor: "pink", color: "#fff" }}
      >
        Change language
      </Button>
    </>
  );
};
