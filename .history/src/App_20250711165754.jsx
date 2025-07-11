import "./App.css";
import { MasterProvider } from "./providers/MasterProvider";

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
