import React, { useState } from "react";

import Completed from "./components/Completed";
import ToDo from "./components/ToDo";

import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetList) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const taskToMove = tasks.find((task) => task.id === parseInt(taskId));

    if (taskToMove) {
      if (targetList === "completed") {
        setTasks(tasks.filter((task) => task.id !== taskToMove.id));
        setCompletedTasks([...completedTasks, taskToMove]);
      } else {
        setCompletedTasks(
          completedTasks.filter((task) => task.id !== taskToMove.id)
        );
        setTasks([...tasks, taskToMove]);
      }
    }
  };

  return (
    <div className="flex flex-row justify-around">
      <ToDo
        tasks={tasks}
        setTasks={setTasks}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "todo")}
      />
      <Completed
        completedTasks={completedTasks}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "completed")}
      />
    </div>
  );
};

export default App;
