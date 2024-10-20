import Task from "./Task";

const Completed = ({ completedTasks, onDragOver, onDrop }) => {
  return (
    <section
      className="flex flex-col w-[50%] gap-5 items-center"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h2 className="text-2xl font-semibold">Completed</h2>
      <div className="mt-16">
        {completedTasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={() => {}} // You might want to implement this
            editBtn={() => {}} // You might want to implement this
            onDragStart={() => {}} // You might want to implement this for dragging back
          />
        ))}
      </div>
    </section>
  );
};

export default Completed;
