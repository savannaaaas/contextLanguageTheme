import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
const translations = {
  en: {
    welcome: 'Welcome',
    profile: 'Your profile',
  },
  ru: {
    welcome: 'Добро пожаловать',
    profile: 'Твой профиль',
  },
};
export const Header = () => {
    const {theme} = useContext(ThemeContext)
  return <Typography style={{color: }}>{}</Typography>;
};
