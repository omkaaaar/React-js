import ChildA from "./components/ChildA";
import { createContext, useState } from "react";
import "./App.css";

// step 1: Create a context
//? const UserContext = createContext();

// Step 2: Wrap all the child components inside the provider
// step 3: Pass the value
// Step 4: Consume the value

const ThemeContext = createContext();
function App() {
  //? const [user, setUser] = useState({ name: "Omkar" });

  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>

    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </>
  );
}

export default App;
export { ThemeContext };
