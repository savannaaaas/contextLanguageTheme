import "./App.css";
import { MasterProvider } from "./providers/MasterProvider";

function App() {
  return (
    <MasterProvider>
      <ControlsPanel />
    </MasterProvider>
  );
}

export default App;
