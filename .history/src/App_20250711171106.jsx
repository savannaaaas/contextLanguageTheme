import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeContext";
import { ControlsPanel } from "./components/ControlsPanel";
import "./App.css";
function App() {
  const { theme } = useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: theme === "light" ? "#fff" : "black",
    padding: "0",
  };
  return (
    <div style={themeStyle}>
      <ControlsPanel />
    </div>
  );
}

export default App;
