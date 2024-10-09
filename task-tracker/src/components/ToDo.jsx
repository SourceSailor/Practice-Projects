import React, { useState } from "react";
import Modal from "./Modal";
import Task from "./Task";

const ToDo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="flex flex-col w-[50%] gap-5 items-center">
      <h2 className="text-2xl font-semibold">To Dos</h2>
      <button
        onClick={openModal}
        className="w-32 px-3 py-4 rounded-lg text-gray-800 bg-slate-300 hover:bg-slate-200"
      >
        Add Task
      </button>
      <div>
        <Task />
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </section>
  );
};

export default ToDo;
