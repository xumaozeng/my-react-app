import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";

function RouterPage() {
  return (
    <div>
      <h3>RouterPage</h3>
      <Router>
        <nav>
          <Link to="/">首页</Link> <Link to="/user">用户中心</Link>{" "}
          <Link to="/login">登录</Link> <Link to="/product">商品</Link>
        </nav>

        <Switch>
          <Route
            path="/"
            exact
            children={ChildrenPage}
            component={HomePage}
            render={RenderPage}
          >
            children page
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

function _404Page() {
  return <h4>_404Page</h4>;
}

function ChildrenPage() {
  return <h4>ChildrenPage</h4>;
}

function RenderPage() {
  return <h4>RenderPage</h4>;
}

export default RouterPage;
