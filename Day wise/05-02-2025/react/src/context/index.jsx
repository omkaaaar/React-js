import { createContext, useState } from "react";

// create context
export const GlobalContext = createContext(null);

// create global state that receive component as children
function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
