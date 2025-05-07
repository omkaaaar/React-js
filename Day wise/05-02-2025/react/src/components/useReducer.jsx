import React, { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStyleFlag: false,
};
const SHOW_TEXT = "SHOW_TEXT";
const HIDE_TEXT = "HIDE_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

const reducer = (state, action) => {
  switch (action.type) {
    case HIDE_TEXT:
      //   console.log(state, action);

      return { ...state, showTextFlag: false };
    case SHOW_TEXT:
      return { ...state, showTextFlag: true };
    case CHANGE_TEXT_STYLE:
      return { ...state, changeTextStyleFlag: !state.changeTextStyleFlag };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      {state.showTextFlag ? (
        <h2
          style={{
            backgroundColor: state.changeTextStyleFlag ? "yellow" : "cyan",
            color: state.changeTextStyleFlag ? "black" : "red",
          }}
        >
          Use Reducer Hook
        </h2>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Change Style Styles
      </button>
    </div>
  );
};

export default UseReducerExample;
