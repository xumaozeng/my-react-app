import React, { useMemo, useState } from "react";

function UseMemoPage(props) {
  const [xiaohong, setXiaohong] = useState("小红待客状态");
  const [zhiling, setZhiling] = useState("志玲待客状态");
  return (
    <>
      <h5>UseMemoPage</h5>
      <button onClick={() => setXiaohong(new Date().getTime())}>小红</button>
      <button
        onClick={() => setZhiling(new Date().getTime() + ",志玲向我们走来了")}
      >
        志玲
      </button>

      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  );
}

function ChildComponent(props) {
  const { name, children } = props;
  const changeXiaohong = name => {
    console.log("她来了，小红向我们走来");
    return name + ",小红向我们走来";
  };
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);

  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  );
}
export default UseMemoPage;
