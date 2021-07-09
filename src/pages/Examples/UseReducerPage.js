import React, { useReducer } from "react";

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error("error");
  }
}

function UseReducerPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <div>
      <h2>现在的分数是{state.count}</h2>
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        重置
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>增加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减少</button>
    </div>
  );
}
export default UseReducerPage;
