import { useState } from "react";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleClick = () => {
    setLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  };
  //! Conditional rendering using if else
  // if (isLoggedIn) {
  //   return <LoginBtn />;
  // } else {
  //   return <LogoutBtn />;
  // }

  //! Conditional rendering using Ternary operators
  // return isLoggedIn ? <LoginBtn /> : <LogoutBtn />;
  return (
    <div>
      {isLoggedIn
        ? "Do you wand to log in?"
        : "You are logged in, do you want to logout from your account"}
      <button onClick={handleClick}>
        {isLoggedIn ? <LoginBtn /> : <LogoutBtn />}
      </button>
      ;
    </div>
  );
}

export default App;
