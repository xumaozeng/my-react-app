import { useParams } from "react-router";
import List from "../component/list";
import Pagination from "../component/pagination";
import data from "../data/data";

const pageLength = Math.ceil(data.length / 3);

function ListView() {
  let { page = 1 } = useParams();
  return (
    <div>
      <h3>列表视图</h3>
      <List activePage={page} />
      <Pagination activePage={page} pageLength={pageLength} />
    </div>
  );
}
export default ListView;
