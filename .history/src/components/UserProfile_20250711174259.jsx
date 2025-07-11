import { Typography } from "@mui/material";
import { translations } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../providers/LanguageContext";
export const UserProfile = () => {
    const {language} = useContext(LanguageContext)
  return <Typography>{translations[]}</Typography>;
};
