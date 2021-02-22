import React, { useContext, useReducer } from "react";
import ColorContext from "./ColorContext";

function ShowArea(props) {
  const { color } = useContext(ColorContext);
  return (
    <div style={{ color }}>
      <h5>字体颜色为{color}</h5>
    </div>
  );
}

function Buttons(props) {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: "red" })}>
        红色
      </button>
      <button onClick={() => dispatch({ type: UPDATE_COLOR, color: "yellow" })}>
        黄色
      </button>
    </div>
  );
}

const UPDATE_COLOR = "UPDATE_COLOR";
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color;
    default:
      return state;
  }
};

function UseReducerPage(props) {
  const [color, dispatch] = useReducer(reducer, "blue");
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      <ShowArea />
      <Buttons />
    </ColorContext.Provider>
  );
}

export default UseReducerPage;
