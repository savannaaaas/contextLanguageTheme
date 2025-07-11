import { createContext, useState } from "react";
export const LanguageContext = createContext(null);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((language) => (language === "en" ? "ru" : "en"));
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
