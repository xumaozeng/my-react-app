import { createStore } from "redux";

// 定义state初始化和修改规则
function counterReducer(state = 0, action) {
//   console.log("state", state);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
