import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const btnCss =
    "flex w-24 px-2 py-2 rounded-lg align-middle justify-center bg-slate-300 hover:bg-slate-600 hover:text-white";

  return (
    <main className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-6xl">To-Do Board</h1>

      <div className="flex flex-row gap-5">
        <input
          className="border-2 w-52 pl-2"
          placeholder="Task Description"
          type="text"
          name="addTaskInp"
          id="addTaskInp"
        />
        <button className={btnCss}>Enter</button>
      </div>

      <section className="flex flex-row justify-center align-middle">
        <div className="flex flex-col justify-between border-gray-400 border-2 w-[400px] h-[200px] py-5 align-middle ">
          <h4 className="flex-grow flex items-center justify-center">
            Task Text
          </h4>
          <div className="flex flex-row gap-3 align-middle justify-center">
            <button className={btnCss}>Delete</button>
            <button className={btnCss}>Edit</button>
            <button className={btnCss}>Complete</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
