import React, { useState, useEffect } from "react";

function CustomHookPage(props) {
  // 定义一个叫count的变量，初始化为0
  const [count, setCount] = useState(0);
  // 和didMount、didUpdate类似
  useEffect(() => {
    console.log("count effect");
    // 只需要在count发生改变的时候执行就可以了
    document.title = `点击了${count}次`;
  }, [count]);
  return (
    <div>
      <h3>自定义Hook</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  );
}

// 自定义hook，命名必须以use开头
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("date effect");
    // 只需要在didMount时候执行就可以了
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 清除定时器
    return () => clearInterval(timer);
  }, []);
  return date;
}

export default CustomHookPage;
