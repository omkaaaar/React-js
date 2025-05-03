import tick from "../assets/checked.svg";
// import notTick from "../assets/unchecked.png";

const TodoItems = ({ task, id, isCompleted, handleDelete }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-5 text-skyBlue" src={tick} alt="" />
        <p className="ml-3 text-skyBlue text-[20px]">{task}</p>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="rounded-full bg-skyBlue px-3 border-none text-blue text-lg font-semibold"
      >
        DEL
      </button>
    </div>
  );
};

export default TodoItems;
