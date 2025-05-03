// import React from 'react'

import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("Stopeed when the component is removed from the page");

      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Timer application</p>
      <h1>Timer: {seconds}</h1>
    </div>
  );
};

export default Timer;
