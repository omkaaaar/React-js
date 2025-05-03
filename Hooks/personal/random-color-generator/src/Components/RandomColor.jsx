import { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("");

  const randomColorGenerator = () => {
    //! COLOR GENERATION USING RGB
    // const red = Math.floor(Math.random() * 256); // Random value for red (0-255)
    // const green = Math.floor(Math.random() * 256); // Random value for green (0-255)
    // const blue = Math.floor(Math.random() * 256); // Random value for blue (0-255)
    // return `rgb(${red}, ${green}, ${blue})`;

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  const handleClick = () => {
    const color = randomColorGenerator();
    setColor(color);
    // document.body.style.backgroundColor = color;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
    >
      <h1>Color Changer</h1>

      <button
        onClick={handleClick}
        style={{ backgroundColor: color, border: "2px solid black" }}
      >
        Change it {color}
      </button>
      {/* <div style={{ backgroundColor: color }}>dgfdsfgsajfh</div> */}
    </div>
  );
};

export default RandomColor;
