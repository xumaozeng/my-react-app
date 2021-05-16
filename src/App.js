import TodoList from "./pages/TodoList";
import store from "./pages/TodoList/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
