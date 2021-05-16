import { useSelector } from "react-redux";
import Li from "./Li";

function Todos() {
  const data = useSelector(state => state);
  return (
    <ul id="todo-list">
      {data.map(item => (
        <Li key={item.id} {...item} />
      ))}
    </ul>
  );
}
export default Todos;
