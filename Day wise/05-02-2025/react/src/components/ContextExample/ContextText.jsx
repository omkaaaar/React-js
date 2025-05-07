import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const ContextText = () => {
  const { theme } = useContext(GlobalContext);
  console.log(theme);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "blue" : "yellow",
      }}
    >
      Hello My Name is Omkar Kallekar
    </h1>
  );
};

export default ContextText;
