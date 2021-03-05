import { useMemo, useState } from "react";

function UseMemoPage(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // useMemo返回一个缓存值
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive: {expensive}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}
export default UseMemoPage;
