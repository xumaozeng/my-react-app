import DlPage from "./dl";
import data from "./data";
import "./index.css";
import { useState } from "react";

function DL() {
  const [openName, setOpenName] = useState("");

  return (
    <div className="friend-list">
      {Object.keys(data).map(itemName => (
        <DlPage
          name={itemName}
          openName={openName}
          changeOpen={setOpenName}
          key={itemName}
          dlData={data[itemName]}
        />
      ))}
    </div>
  );
}
export default DL;
