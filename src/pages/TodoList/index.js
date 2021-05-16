import { useSelector } from "react-redux";

import Title from "./Title";
import Create from "./Create";
import Todos from "./Todos";
import State from "./State";

import "./index.css";

function TodoList() {
  const data = useSelector(state => state);
  return (
    <div id="todoapp">
      <Title />
      <div className="content">
        <Create />
        {data.length > 0 ? (
          <>
            <Todos />
            <State />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default TodoList;
