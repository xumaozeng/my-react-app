import { createStore } from "redux";
import _ from "lodash";

const defaultState = {
  inputValue: "Writing something",
  data: ["早上8点起床", "8:45到公司会议", "18:30下班"]
};

const todoReducers = (state = defaultState, actions) => {
  switch (actions.type) {
    case "add-todo":
      return {
        inputValue: state.inputValue,
        data: [...state.data, actions.data]
      };
    case "delete-todo":
      const newState = _.cloneDeep(state);
      newState.data.splice(actions.index, 1);
      return newState;
    default:
      return defaultState;
  }
};

const store = createStore(
  todoReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
