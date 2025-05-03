import { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default TimerComponent;
