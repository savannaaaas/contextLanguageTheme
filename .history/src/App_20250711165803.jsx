import "./App.css";
import { ThemeContext } from "./providers/ThemeContext";

function App() {
  const [theme] = useContext(ThemeContext);

  const themeStyle = { backgroundColor: theme === "light" };
  return (
    <div>
      <ControlsPanel />
    </div>
  );
}

export default App;
