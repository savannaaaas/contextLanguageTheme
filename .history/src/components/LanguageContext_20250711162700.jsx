import { createContext } from "react";
export const LanguageContext = createContext(null);
const LanguageProvider = ({ children }) => {
  return <LanguageContext.Provider></LanguageContext.Provider>;
};
