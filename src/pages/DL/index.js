import DlPage from "./dl";
import data from "./data";
import "./index.css";
import { useState } from "react";

const htmlData = `
<h2>React修炼</h2>
<p>从零开始学习</p>
`;

function DL() {
  const [openName, setOpenName] = useState("");

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlData
        }}
      ></div>
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
    </>
  );
}
export default DL;
