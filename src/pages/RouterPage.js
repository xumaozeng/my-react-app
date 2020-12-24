import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <span> </span>
          <Link to="/user">用户中心</Link>
          {/* 根路由要添加exact，实现精准匹配 */}
          <Switch>
            {/* 添加Switch表示仅匹配一个路由 */}
            <Route
              exact
              path="/"
              component={HomePage}
              // Route渲染的三种方式：children>component>render，互斥，只能用一种
              // children={() => <div>children</div>}
              // render={() => <div>render</div>}
            />
            <Route path="/user" component={UserPage} />
            <Route component={EmptyPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
      </div>
    );
  }
}

class UserPage extends Component {
  render() {
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}

class EmptyPage extends Component {
  render() {
    return (
      <div>
        <h3>EmptyPage-404</h3>
      </div>
    );
  }
}

export default RouterPage;
