import { createContext, useState } from "react";
export const LanguageContext = createContext(null);
const [language, setLanguage] = useState("en")
const toggleLanguage = ()=>{
    setLanguage((language)=> language === "en" ? "ru":"en")
}
const LanguageProvider = ({ children }) => {

  return <LanguageContext.Provider value={}>{children}</LanguageContext.Provider>;
};
