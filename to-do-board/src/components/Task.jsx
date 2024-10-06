import { useState, forwardRef } from "react";
import { FiEdit2 } from "react-icons/fi";

const Task = forwardRef(
  ({ task, btnCss, onDeleteTask, onComplete, editTask }, ref) => {
    const [isEditing, setIsEditing] = useState(false);

    function onUpdateTask() {
      const updatedText = ref.current.value; // Use the forwarded ref for task text update
      editTask(task.id, updatedText);
      setIsEditing(false); // Reset editing state after update
    }

    return (
      <div className="flex flex-col justify-between border-gray-400 border-2 w-[400px] h-[200px] py-5 align-middle rounded-lg mx-5">
        {isEditing ? (
          <div className="flex flex-row gap-2 items-center justify-center grow">
            <input
              className="border-2 w-52 pl-2"
              type="text"
              name="editTask"
              id="editTask"
              defaultValue={task.text}
              ref={ref} // Forwarding ref from the parent
            />
            <button onClick={onUpdateTask} className={btnCss}>
              Update
            </button>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center flex-grow">
            <h4 className={`${task.complete && "line-through"}`}>
              {task.text}
            </h4>
            <span className="ml-2" onClick={() => setIsEditing(true)}>
              <FiEdit2 />
            </span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-row gap-3 align-middle justify-center">
          {/* DELETE */}
          <button onClick={() => onDeleteTask(task.id)} className={btnCss}>
            Delete
          </button>

          {/* COMPLETE */}
          <button onClick={() => onComplete(task.id)} className={btnCss}>
            {!task.complete ? "Complete" : "Incomplete"}
          </button>
        </div>
      </div>
    );
  }
);

// Set display name for debugging purposes
Task.displayName = "Task";

export default Task;
