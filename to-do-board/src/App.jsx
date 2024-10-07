import { useState, useRef } from "react";
import "./App.css";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskRef = useRef("");
  const editTaskRef = useRef(null); // Separate ref for editing

  function onAddTask() {
    let taskText = addTaskRef.current.value;

    if (taskText.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: tasks.length + 1,
        text: taskText,
        complete: false,
      },
    ]);

    addTaskRef.current.value = "";
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

  function onEditTask(id, updatedText) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  }

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
          ref={addTaskRef} // Ref for adding new task
        />
        <button onClick={onAddTask} className={btnCss}>
          Enter
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-row md:flex-row justify-center align-middle">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            btnCss={btnCss}
            onDeleteTask={onDeleteTask}
            onComplete={onComplete}
            editTask={onEditTask}
            ref={editTaskRef} // Forward ref for editing task
          />
        ))}
      </section>
    </main>
  );
}

export default App;
