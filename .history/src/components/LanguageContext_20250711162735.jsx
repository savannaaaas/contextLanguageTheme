import { createContext } from "react";
export const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useS
  return <LanguageContext.Provider value={}>{children}</LanguageContext.Provider>;
};
