import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeContext";
import { ControlsPanel } from "./components/ControlsPanel";
import "./App.css";
function App() {
  const { theme } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "black",
    height: "100vh",
    display: "flex", // Flex-контейнер
    flexDirection: "column", // Кнопки друг под другом
    justifyContent: "center", // Центр по вертикали
    alignItems: "center",
  };
  return (
    <div style={themeStyle}>
      <ControlsPanel />
    </div>
  );
}

export default App;
