import { createContext, useState } from "react";
export const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en")
  return <LanguageContext.Provider value={}>{children}</LanguageContext.Provider>;
};
