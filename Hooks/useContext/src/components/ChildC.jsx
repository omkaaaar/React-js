import { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  //   const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div>
      {/* <h1>HEhawwww</h1> */}
      {/* {theme} */}

      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ChildC;
