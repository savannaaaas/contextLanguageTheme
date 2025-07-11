import { createContext, useState } from "react";
export const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("")
  return <LanguageContext.Provider value={}>{children}</LanguageContext.Provider>;
};
