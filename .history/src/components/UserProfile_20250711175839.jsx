import { Typography } from "@mui/material";
import { translations } from "../App";
import React, { useContext } from "react";
import { LanguageContext } from "../providers/LanguageContext";
import { ThemeContext } from "../providers/ThemeContext";
export const UserProfile = React.memo(() => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <Typography
      variant="h5"
      style={{
        color: theme === "light" ? "black" : "white",
        backgroundColor: theme === "light" ? "pink" : "red",
      }}
    >
      {translations[language].profile}
    </Typography>
  );
});
