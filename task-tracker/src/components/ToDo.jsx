import { useState, useRef } from "react";
import Modal from "./Modal";
import Task from "./Task";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, IsEditing] = useState(false);

  const titleRef = useRef("");
  const descriptionRef = useRef("");

  function onAddTask() {
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const taskId = Math.floor(Math.random() * 100000);

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: taskId,
        title: titleValue,
        description: descriptionValue,
      },
    ]);
    setIsModalOpen(false);
  }

  function onEditTask(titleRef) {
    tasks.map((task) =>
      task.title === titleRef
        ? setTasks({
            id: task.id,
            title: titleValue,
            description: descriptionValue,
          })
        : task
    );
  }

  function onDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function onEditBtn() {
    openModal();
    IsEditing(true);
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  console.log(tasks);

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
        {tasks.map((task) => (
          <Task
            id={task.id}
            key={task.id}
            title={task.title}
            description={task.description}
            deleteTask={onDeleteTask}
            openModal={openModal}
            editBtn={onEditBtn}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          addTask={onAddTask}
          onClose={closeModal}
          editTask={onEditTask}
          isEditing={isEditing}
        />
      )}
    </section>
  );
};

export default ToDo;
