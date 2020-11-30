import React, { useState, useEffect } from "react";

function HookPage(props) {
  // 声明一个叫'count'的state变量，初始化为0
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // 与componentDidMount和componentDidUpdate相似
  useEffect(() => {
    console.log("count effect"); //sy-log
    // 更新title
    document.title = `React点击${count}次`;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
export default HookPage;
