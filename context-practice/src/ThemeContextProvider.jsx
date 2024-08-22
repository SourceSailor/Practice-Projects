import { useState, createContext } from "react";

export const ThemeContext = createContext({
  lightMode: false,
  toggleLightMode: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);

  function toggleLightMode() {
    setLightMode((prevMode) => !prevMode);
  }

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
