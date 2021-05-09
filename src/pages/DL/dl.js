import { useState } from "react";

function DlPage(props) {
  const { dlData } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"friend-group " + (isOpen ? "expanded" : "")}>
      <dt
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {dlData.title}
      </dt>
      {dlData.list.map((item, index) => (
        <dd key={index}>{item.name}</dd>
      ))}
    </div>
  );
}
export default DlPage;
