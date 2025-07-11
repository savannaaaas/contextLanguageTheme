import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import { LanguageContext } from "../providers/LanguageContext";
import {translations} from "../App"
export const Header = () => {
    const {theme} = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
  return <Typography style={{color: }}>{}</Typography>;
};
