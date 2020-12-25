import React, { useState, useEffect } from "react";

function Example() {
  // 声明一个叫count的state变量
  const [count, setCount] = useState(1);

  // 相当于componentDidMount和componentDidUpdate
  useEffect(() => {
    // 使用浏览器的API更新页面标题
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(1)}>reset</button>
      <button onClick={() => setCount(count => count + 2)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Example;
