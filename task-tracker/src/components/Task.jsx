import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Task = ({ title, description, deleteTask, id, editBtn }) => {
  const [timerRunning, setTimerRunning] = useState(null);
  const [time, setTime] = useState(0);

  // Number state should increase by 1 every second
  // Create a state and with the value of 0
  // update that variable every second using setInterval
  // Clear Interval when timer is reset

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  function onResetTimer() {
    setTimerRunning(false);
    setTime(0);
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  console.log(time);

  return (
    <section className="flex flex-col p-10 items-center justify-center bg-slate-400 gap-4 rounded-lg mt-5">
      <div className="flex flex-row justify-between w-full">
        {/* Task Title */}
        <h4 className="text-2xl font-semibold">{title}</h4>

        {/* Edit Task Button */}
        <button
          onClick={editBtn}
          className="px-4 py-2 bg-slate-300 rounded-lg hover:bg-slate-200"
        >
          Edit
        </button>
      </div>

      {/* Task Description */}
      <p className="text-left w-full">{description}</p>

      {/* Task Timer */}
      <div className="flex flex-col justify-between items-center px-20 w-full">
        {/* Time Display */}
        <p className="text-xl">{formatTime(time)}</p>

        {/* Stop and Start Timer Buttons Section */}
        <div className="flex flex-row gap-5 ml-5 mt-2">
          {/* Start Stop Timer Buttons */}

          <button
            onClick={
              timerRunning
                ? () => setTimerRunning(false)
                : () => setTimerRunning(true)
            }
            className="rounded-lg "
          >
            {timerRunning ? "Stop" : "Start"}
          </button>

          {/* Reset Time Button */}
          <button onClick={onResetTimer} className="rounded-lg">
            Restart
          </button>
        </div>
      </div>

      {/* Delete Task Button */}
      <button
        onClick={() => deleteTask(id)}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg mt-5"
      >
        DELETE
      </button>
    </section>
  );
};

// Prop Types
Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  editBtn: PropTypes.func.isRequired,
};

export default Task;
