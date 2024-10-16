import { useState, useRef } from "react";
import Modal from "./Modal";
import Task from "./Task";

const ToDo = ({ tasks, setTasks, onDragStart, onDragOver, onDrop }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const titleRef = useRef("");
  const descriptionRef = useRef("");

  // Add New Task
  function onAddTask() {
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const taskId = Math.floor(Math.random() * 100000);

    if (titleValue.length && descriptionValue.length > 0) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: taskId,
          title: titleValue,
          description: descriptionValue,
        },
      ]);
      setIsModalOpen(false);
    } else if (titleValue.length && descriptionValue.length === 0) {
      alert("Please enter both a title and a description for the task.");
    }
  }

  // Edit Task Button
  function onEditBtn(task) {
    setEditingTask(task);
    openModal();
  }

  // Update Task Functionality
  function onEditTask() {
    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    if (editingTask && titleValue.length > 0 && descriptionValue.length > 0) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, title: titleValue, description: descriptionValue }
            : task
        )
      );
      closeModal();
      setEditingTask(null);
    } else {
      alert("Please enter both a title and a description for the task.");
    }
  }

  //  Delete Task
  function onDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  // Open and Close Modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  console.log("Task State: ", tasks);
  console.log("Edit Task State: ", editingTask);

  return (
    <section
      className="flex flex-col w-[50%] gap-5 items-center"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h2 className="text-2xl font-semibold">To Dos</h2>

      {/* Add Task Button - Opens Modal */}
      <button
        onClick={openModal}
        className="w-32 px-3 py-4 rounded-lg text-gray-800 bg-slate-300 hover:bg-slate-200"
      >
        Add Task
      </button>

      <div>
        {/* Mapping of Task state */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={onDeleteTask}
            editBtn={() => onEditBtn(task)}
            onDragStart={onDragStart}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          addTask={onAddTask}
          onClose={closeModal}
          editTask={onEditTask}
          editingTask={editingTask}
        />
      )}
    </section>
  );
};

export default ToDo;
