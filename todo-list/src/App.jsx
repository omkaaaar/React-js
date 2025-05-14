import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./Components/todoItems";
import TodoDetails from "./Components/todoDetails";
import { Skeleton } from "@mui/material";

function App() {
  // using state to store the data in array
  const [todoList, setTodoList] = useState([]);
  // using loading state for the data to be fetched from the API
  const [loading, setLoading] = useState(false);

  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // making use of useEffect hookk in order to load the data on page load
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchDetailsofCurrentTodo(getCurrentTodoItem) {
    console.log(getCurrentTodoItem);

    try {
      setLoading(true);
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoItem}`
      );
      const details = await apiResponse.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchTodoList() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();
      // console.log(result);

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

  // if (loading)
  // return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerStyle}>
        Simple To Do App using Material UI
      </h1>

      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todoItem) => (
              <TodoItem
                fetchDetailsofCurrentTodo={fetchDetailsofCurrentTodo}
                todo={todoItem}
              />
            ))
          : null}
      </div>
      <TodoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App;
