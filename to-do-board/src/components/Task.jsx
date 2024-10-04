import React from "react";

const Task = () => {
  return (
    <div>
      <h2>TASK</h2>
      <div className="flex flex-row gap-4">
        <button>Delete</button>
        <button>Complete</button>
      </div>
    </div>
  );
};

export default Task;
