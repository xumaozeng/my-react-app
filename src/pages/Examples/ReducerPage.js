import { createContext, useCallback, useContext, useReducer } from "react";

const CountDispatch = createContext(null);

function ReducerPage() {
  const [count, dispatch] = useReducer(x => x + 1, 0);
  return (
    <CountDispatch.Provider value={dispatch}>
      <DeepTree count={count} />
    </CountDispatch.Provider>
  );
}
export default ReducerPage;

function DeepTree(props) {
  const dispatch = useContext(CountDispatch);
  const handleAdd = useCallback(() => dispatch(), [dispatch]);
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={handleAdd}>Add Count</button>
    </div>
  );
}
