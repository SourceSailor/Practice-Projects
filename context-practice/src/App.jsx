import ThemeContextProvider from "./ThemeContextProvider";
import Page from "./Page";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
