import { useState } from "react";

import Counter from "./Components/Counter";
import PropsChildren from "./Components/PropsChildren";
import StudentDetails from "./Components/StudentDetails";
import EventHandling from "./Components/EventHandling";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Counter />
      <hr />
      <br />
      <br />
      <StudentDetails
        name="Omkar"
        surname="Kallekar"
        designation="Associate Software Engineer"
      />
      <hr />
      <br />
      <br />

      <PropsChildren handleClick={increment}>
        <h1>Props Children</h1>
        <p>
          Anything inside the PROPSCHILDREN component tag is called the prop
          children
        </p>
        <p>
          USECASE: When we dont have idea of what are the coming tags we can
          handle it using props children
        </p>
        {counter}
      </PropsChildren>

      <EventHandling />

      {/* <PropsChildren handleClick={increment}></PropsChildren> */}
    </div>
  );
};

export default App;
