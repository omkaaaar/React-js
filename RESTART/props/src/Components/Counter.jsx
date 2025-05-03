import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {" "}
      <div>
        <p>Counter Application</p>
        <h1>{count}</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
