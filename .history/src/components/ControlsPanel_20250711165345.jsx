import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
export const ControlsPanel = () => {
  const [toggleTheme] = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};
