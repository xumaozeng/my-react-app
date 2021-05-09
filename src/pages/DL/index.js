import DlPage from "./dl";
import data from "./data";
import "./index.css";

function DL(props) {
  return (
    <div className="friend-list">
      {Object.keys(data).map(itemName => (
        <DlPage key={itemName} dlData={data[itemName]} />
      ))}
    </div>
  );
}
export default DL;
