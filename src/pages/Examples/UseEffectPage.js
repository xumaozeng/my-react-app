import { useEffect, useState } from "react";

function UseEffectPage(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(2);
    console.log(1);
    setCount(0);
  }, []);

  console.log("useEffect");

  return (
    <div>
      <h3>UseEffectPage</h3>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </div>
  );
}
export default UseEffectPage;
