// import React from "react";

const PropsChildren = (props) => {
  return (
    <div>
      {props.children}

      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};

export default PropsChildren;
