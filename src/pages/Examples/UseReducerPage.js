import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
}

function UseReducerPage() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>现在的分数是{count}</h2>
      <button onClick={() => dispatch({ type: "add" })}>增加</button>
      <button onClick={() => dispatch({ type: "sub" })}>减少</button>
    </div>
  );
}
export default UseReducerPage;
