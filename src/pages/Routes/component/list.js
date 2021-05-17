import data from "../data/data";

const pageLen = 3;

function List(props) {
  let { activePage } = props;
  let start = (activePage - 1) * pageLen; // 当前页从第几条开始，注意页码从 1 开始计数，但是JS从0开始计数，所以减1。
  let end = activePage * pageLen; // 当前页到第几条结束
  let nowData = data.filter((item, index) => index >= start && index < end);
  return (
    <ul>
      {nowData.map(item => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
