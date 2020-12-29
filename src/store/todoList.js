import { createStore } from "redux";

const defaultState = {
  inputValue: "Writing something",
  data: ["早上8点起床", "8:45到公司会议", "18:30下班"]
};

const todoReducers = (state = defaultState, actions) => {
  return { ...state, actions };
};

const store = createStore(todoReducers);

export default store;
