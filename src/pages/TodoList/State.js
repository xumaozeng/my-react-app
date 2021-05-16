import { useDispatch, useSelector } from "react-redux";

function State() {
  const data = useSelector(state => state);
  const unDone = data.filter(item => !item.done);
  const done = data.filter(item => item.done);

  const dispatch = useDispatch();

  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="number">{unDone.length}</span>
        <span className="word">项目待完成</span>
      </span>
      {done.length > 0 ? (
        <span className="todo-clear">
          <a
            href="#"
            onClick={() => {
              dispatch({ type: "TODO_REMOVE_DONE" });
            }}
          >
            Clear <span>{done.length}</span>已完成事项
          </a>
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
export default State;
