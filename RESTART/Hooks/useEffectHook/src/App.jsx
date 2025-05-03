// import { useState } from "react";
// import { useEffect } from "react";

import DataFetcher from "./components/DataFetcher";
import Timer from "./components/Timer";

const App = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   return alert(count);
  // }, [count]);

  return (
    <div>
      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button> */}
      <Timer />
      <DataFetcher />
    </div>
  );
};

export default App;
