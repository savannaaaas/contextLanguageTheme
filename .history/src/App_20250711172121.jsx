import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeContext";
import { ControlsPanel } from "./components/ControlsPanel";
import { Header } from "./components/Header";
import "./App.css";
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
      <ControlsPanel />
    </div>
  );
}

export default App;
