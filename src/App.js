import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Routes/HomePage";
import UserPage from "./pages/Routes/UserPage";
import LoginPage from "./pages/Routes/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">首页</Link> {}
          <Link to="/user">用户</Link> {}
          <Link to="/login">登录</Link>
        </nav>
        {/* 添加Switch表示仅匹配一个 */}
        <Switch>
          {/* 根据路由要添加exact，实现精确匹配 */}
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
