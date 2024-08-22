import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import Header from "./Header";

export default function Page() {
  const { lightMode } = useContext(ThemeContext);
  return (
    <div className={lightMode ? "light" : "dark"} id="app">
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
