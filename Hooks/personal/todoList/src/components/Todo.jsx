import { useRef, useState } from "react";
import todoIcon from "../assets/icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoTask, setTodoTask] = useState([]);
  const input = useRef();

  // Add a new task
  const add = () => {
    const inputText = input.current.value.trim();
    if (inputText === "") return null;

    const newTask = {
      id: Date.now(),
      task: inputText,
      isompleted: false,
    };
    console.log(newTask);

    setTodoTask((prev) => [...prev, newTask]);
    input.current.value = "";
  };

  // Deleting
  const handleDelete = (id) => {
    setTodoTask((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="bg-blue place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todoIcon} alt="" className="w-[30px] h-[30px]" />
        <h1 className="text-3xl font-semibold text-skyBlue">
          To Do: the Things
        </h1>
      </div>

      {/* TAKE USER INPUT */}
      <div className="flex my-7 bg-skyBlue rounded-full">
        <input
          ref={input}
          className="bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2  placeholder:text-slate-700 font-semibold"
          type="text"
          placeholder="Add your task..."
        />
        <button
          onClick={add}
          className="rounded-full bg-orange-400 px-6 border-none text-white text-lg font-semibold"
        >
          Add
        </button>
      </div>

      {/* TODO ITEMS */}
      <div>
        {todoTask.map((item, index) => {
          return (
            <TodoItems
              key={index}
              task={item.task}
              id={item.id}
              isCompleted={item.isCompleted}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
