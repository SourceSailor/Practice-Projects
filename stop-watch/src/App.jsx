import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <h1 className="text-xl">Stopwatch</h1>
      {time}

      <div className="flex flex-row justify-center">
        <span className="mr-5">
          {!running ? (
            <button onClick={() => setRunning(true)}>Start</button>
          ) : (
            <button onClick={() => setRunning(false)}>Stop</button>
          )}
        </span>

        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
