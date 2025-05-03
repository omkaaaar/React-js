import { useState } from "react";
import Parameters from "./Parameters";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is a Counter Application</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h2 onClick={() => setCount(0)} style={{ cursor: "pointer" }}>
        Count is: {count}
      </h2>
      <p>*Click on count to reset</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <Parameters />
    </div>
  );
};

export default CounterApp;
