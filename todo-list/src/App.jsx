import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./Components/todoItems";

function App() {
  // using state to store the data in array
  const [todoList, setTodoList] = useState([]);
  // using loading state for the data to be fetched from the API
  const [loading, setLoading] = useState(false);

  // making use of useEffect hookk in order to load the data on page load
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchTodoList() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      console.log(result);

      if (result.todos && result.todos.length > 0) {
        setTodoList(result.todos);
        setLoading(false);
      } else {
        setTodoList([]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerStyle}>
        Simple To Do App using Material UI
      </h1>
      <div>

{
   todoList && todoList.length > 0 ? todoList.map(todoItem=><TodoItem />) : null;

}

      </div>
    </div>
  );
}

export default App;
