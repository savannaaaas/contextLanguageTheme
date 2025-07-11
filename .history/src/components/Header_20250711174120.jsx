import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { LanguageContext } from "../providers/LanguageContext";
import { translations } from "../App";
/*const translations = {
  en: {
    welcome: "Welcome",
    profile: "Your profile",
  },
  ru: {
    welcome: "Добро пожаловать",
    profile: "Твой профиль",
  },
}; */
export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <Typography
      variant="h3"
      style={{
        color: theme === "light" ? "black" : "white",
        backgroundColor: theme === "light" ? "pink" : "red",
      }}
    >
      {translations[language].welcome}
    </Typography>
  );
};
