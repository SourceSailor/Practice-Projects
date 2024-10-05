import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskRef = useRef("");

  function onAddTask() {
    let taskText = taskRef.current.value;
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: tasks.length + 1,
        text: taskText,
        complete: false,
      },
    ]);
    return (taskRef.current.value = "");
  }

  function onDeleteTask(id) {
    const updatedTaskList = tasks.filter((prevList) => prevList.id !== id);
    setTasks(updatedTaskList);
  }

  function onComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  console.log(tasks);

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
          ref={taskRef}
        />
        <button onClick={onAddTask} className={btnCss}>
          Enter
        </button>
      </div>

      {/* Tasks */}
      <section className="flex flex-row justify-center align-middle">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col justify-between border-gray-400 border-2 w-[400px] h-[200px] py-5 align-middle rounded-lg"
          >
            <h4
              className={`flex-grow flex items-center justify-center ${
                task.complete && "line-through"
              }`}
            >
              {task.text}
            </h4>

            {/* Buttons */}
            <div className="flex flex-row gap-3 align-middle justify-center">
              {/* DELETE */}
              <button onClick={() => onDeleteTask(task.id)} className={btnCss}>
                Delete
              </button>

              {/* EDIT */}
              <button className={btnCss}>Edit</button>

              {/* COMPLETE */}
              <button onClick={() => onComplete(task.id)} className={btnCss}>
                {!task.complete ? "Complete" : "Incomplete"}
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
