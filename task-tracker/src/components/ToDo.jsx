import React from "react";
import Task from "./Task";

const ToDo = () => {
  return (
    <section className="flex flex-col w-[50%]">
      <h2 className="text-2xl font-semibold">To Dos</h2>

      <div>
        <Task />
      </div>
    </section>
  );
};

export default ToDo;
