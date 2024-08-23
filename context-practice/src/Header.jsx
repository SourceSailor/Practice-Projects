import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function Header() {
  const { lightMode, toggleLightMode } = useContext(ThemeContext);

  console.log(lightMode);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleLightMode}>Toggle Theme</button>
    </header>
  );
}
