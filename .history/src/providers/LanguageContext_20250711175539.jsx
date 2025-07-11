import { createContext, useCallback, useState } from "react";
export const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = useCallback(() => {
    setLanguage((language) => (language === "en" ? "ru" : "en"));
  }, [setLanguage]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
