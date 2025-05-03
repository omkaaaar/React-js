// import { useEffect, useState } from "react";

import DataFetcher from "./components/DataFetcher";
// import ResizeComponent from "./components/ResizeComponent";

// import TimerComponent from "./components/TimerComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // const increment = () => {
  //   setCount(count + 1);
  //   setTotal(total + 1);
  // };
  // const decrement = () => {
  //   setCount(count - 1);
  //   setTotal(total - 1);
  // };
  // const reset = () => {
  //   setCount(0), setTotal(1);
  // };

  //! useEffect variation 1 and 2
  // useEffect(() => {
  //   alert("Hellooooo this is alert");
  // }, []);

  //! useEffect variation 3
  // useEffect(() => {
  //   alert(`Hellooooo this is alert: ${count}`);
  // }, [count]); //Display alert box everytime the the count is incremented or decremented

  //! useEffect variation 4 using multiple dependencies
  // useEffect(() => {
  //   alert("Hellooooo this is alert");
  // }, [count, total]);

  return (
    <div>
      {/*   <h1>hellowww</h1>
      <div>
        <button onClick={increment}>increment</button>
        <p>
          Count is: {count},<br /> Total is: {total}
        </p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div> */}

      {/* COMPONENTS RENDERING */}
      {/* //! <TimerComponent /> */}

      <DataFetcher />
      {/* <ResizeComponent /> */}
    </div>
  );
}

export default App;
