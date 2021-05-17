import { NavLink, useLocation } from "react-router-dom";
import { navs } from "../router/router";
import { Fragment } from "react";

function Nav() {
  const { pathname } = useLocation();
  return (
    <nav>
      <span> | </span>
      {navs.map(item => {
        return (
          <Fragment key={item.to}>
            <NavLink
              to={item.to}
              exact={item.exact}
              isActive={
                item.isActive
                  ? () => {
                      return item.isActive(pathname);
                    }
                  : null
              }
              activeStyle={{
                color: "red"
              }}
            >
              {item.title}
            </NavLink>
            <span> | </span>
          </Fragment>
        );
      })}
    </nav>
  );
}

export default Nav;
