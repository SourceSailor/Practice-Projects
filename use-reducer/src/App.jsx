import { useReducer } from "react";

export function counterReducer(num, action) {
  if (action.type === "added") {
    console.log(num.message);
    return { count: num + 1, message: action.message };
  } else if (action.type === "decrement") {
    return num - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    num;
  }
}

function App() {
  let [count, counterDispatch] = useReducer(counterReducer, 0);

  function handleIncrement() {
    counterDispatch({
      type: "added",
      message: "You added!",
    });
  }
  function handleDecrement() {
    counterDispatch({
      type: "decrement",
    });
  }
  function handleReset() {
    counterDispatch({
      type: "reset",
    });
  }
  console.log(count);
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter"></p>
    </div>
  );
}

export default App;
