import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1 onClick={() => setCount(0)}>Count is: {count}</h1>
        <p>
          *Click on <b>Count</b> to reset
        </p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
