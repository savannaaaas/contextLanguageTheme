import { Typography } from "@mui/material";
import { translations } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../providers/LanguageContext";
import { ThemeContext } from "../providers/ThemeContext";
export const UserProfile = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return <Typography variant="h6">{translations[language].profile}</Typography>;
};
