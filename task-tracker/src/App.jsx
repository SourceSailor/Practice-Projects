import { useState } from "react";

import Completed from "./components/Completed";
import ToDo from "./components/ToDo";

import "./App.css";
function App() {
  const [task, setTask] = useState([]);

  return (
    <>
      <header>
        <h1>Task Tracker</h1>
      </header>
      <main className="flex flex-row">
        <ToDo />
        <Completed />
      </main>
    </>
  );
}

export default App;
