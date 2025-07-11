import { useContext } from "react";
import { ThemeContext } from "./providers/ThemeContext";
import "./App.css";
function App() {
  const theme = useContext(ThemeContext);

  const themeStyle = { backgroundColor: theme === "light" ? "#fff" : "black" };
  return (
    <div style={themeStyle}>
      <ControlsPanel />
    </div>
  );
}

export default App;
