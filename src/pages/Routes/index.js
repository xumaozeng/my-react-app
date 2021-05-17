import { Route, Switch } from "react-router-dom";
import Nav from "./component/nav";
import { routes } from "./router/router";
function RouterPage() {
  return (
    <>
      <Nav />
      <Switch>
        {routes.map(item => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              render={item.render}
            />
          );
        })}
      </Switch>
    </>
  );
}
export default RouterPage;
