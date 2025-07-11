import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeContext";
import { ControlsPanel } from "./components/ControlsPanel";
import { Header } from "./components/Header";
import { UserProfile } from "./components/UserProfile";
import "./App.css";
export const translations = {
  en: {
    welcome: "Welcome",
    profile: "Your profile",
  },
  ru: {
    welcome: "Добро пожаловать",
    profile: "Твой профиль",
  },
};
function App() {
  const { theme } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "black",
    height: "100vh",
    display: "flex", // Flex-контейнер
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1em",
  };
  return (
    <div style={themeStyle}>
      <Header />
      <UserProfile />
      <ControlsPanel />
    </div>
  );
}

export default App;
