import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStyle: false,
  changeTextColor: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";
const CHANGE_TEXT_COLOR = "CHANGE_TEXT_COLOR";

function reducer(state, action) {
  switch (action.type) {
    case "HIDE_TEXT":
      return {
        ...state,
        showTextFlag: false,
      };
    case "SHOW_TEXT":
      return {
        ...state,
        showTextFlag: true,
      };
    case "CHANGE_TEXT_STYLE":
      return {
        ...state,
        changeTextStyle: !state.changeTextStyle,
      };
    case "CHANGE_TEXT_COLOR":
      return {
        ...state,
        changeTextColor: !state.changeTextColor,
      };
    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      {state.showTextFlag ? (
        <h1
          style={{
            backgroundColor: state.changeTextStyle ? "beige" : "pink",
            color: state.changeTextColor ? "aqua" : "blue",
          }}
        >
          Hello useReduce Hook
        </h1>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Change Text Style
      </button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_COLOR })}>
        Change Text Style
      </button>
    </div>
  );
};

export default UseReducerExample;
