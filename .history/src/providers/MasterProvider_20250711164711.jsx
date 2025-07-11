import { LanguageProvider } from "./LanguageContext";

export const MasterProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
