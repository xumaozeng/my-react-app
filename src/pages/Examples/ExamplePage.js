import React, { useState, useEffect } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("useEffect=>老弟你来了Index页面");
    return () => {
      console.log("老弟你走了Index页面");
    };
  }, []);
  return <h2>Index-Page</h2>;
}

function List() {
  useEffect(() => {
    console.log("useEffect=>老弟你来了List页面");
  });
  return <h2>List-Page</h2>;
}

function ExamplePage() {
  const [count, setCount] = useState(0);

  // 副作用
  useEffect(() => {
    console.log(`useEffect, ${count}`);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表页</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}
export default ExamplePage;
