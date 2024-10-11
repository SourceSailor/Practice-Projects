import { useState } from "react";

const Task = ({ title, description, deleteTask, id, openModa, editBtn }) => {
  return (
    <section className="flex flex-col p-10 items-center justify-center bg-slate-400 gap-4 rounded-lg mt-5">
      <div className="flex flex-row justify-between w-full">
        <h4 className="text-xl">{title}</h4>
        <button
          onClick={editBtn}
          className="px-4 py-2 bg-slate-300 rounded-lg hover:bg-slate-200"
        >
          Edit
        </button>
      </div>

      <p className="text-left w-full">{description}</p>

      <div className="flex flex-row justify-between px-20 w-full">
        <p>00:00</p>
        <div className="flex flex-row gap-4">
          <button className="rounded-lg ">stop/start</button>
          <button className="rounded-lg ">Restart</button>
        </div>
      </div>

      <button
        onClick={() => deleteTask(id)}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg mt-5"
      >
        DELETE
      </button>
    </section>
  );
};

export default Task;
