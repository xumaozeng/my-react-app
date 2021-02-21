import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("Index page");
    return () => {
      console.log("Leave Index page");
    };
  }, []);
  return <h3>首页</h3>;
}

function List() {
  return <h3>列表页</h3>;
}

function UseEffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`);
    return () => {
      console.log("===========");
    };
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <Router>
        <nav>
          <Link to="/">首页</Link> <Link to="/list">列表页</Link>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}
export default UseEffectPage;
