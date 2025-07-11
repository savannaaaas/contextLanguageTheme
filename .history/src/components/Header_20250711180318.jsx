import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { LanguageContext } from "../providers/LanguageContext";
import { translations } from "../App";
import { Typography } from "@mui/material";

export const Header = React.memo(() => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  console.log("rerender Header");
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
});
