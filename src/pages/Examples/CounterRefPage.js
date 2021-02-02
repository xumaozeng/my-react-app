import React, { useEffect, useRef, useState } from "react";

function CounterRefPage() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;
  return (
    <div>
      <h3>CounterRefPage</h3>
      <p>
        Now: {count}, before:{prevCount}
      </p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
export default CounterRefPage;
