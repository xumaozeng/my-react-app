import React, { useContext } from "react";
import { ThemeContext, UserContext } from "./Context";

function UseContextPage(props) {
  // useContext可以使用订阅多个context
  const themeContext = useContext(ThemeContext);
  const { themeColor } = themeContext;
  const userContext = useContext(UserContext);
  return (
    <div>
      <h3 className={themeColor}>UseContextPage</h3>
      <p>{userContext.name}</p>
    </div>
  );
}
export default UseContextPage;
