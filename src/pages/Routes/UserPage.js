import React from "react";
import { useHistory } from "react-router-dom";

function UserPage(props) {
  const history = useHistory();

  const goTo = () => {
    history.push({
      pathname: "/login",
      search: "?id=1",
      state: {
        name: "xiaoxu"
      }
    });
  };
  return (
    <div>
      <h3>UserPage</h3>
      <button onClick={goTo}>跳转登录页</button>
    </div>
  );
}
export default UserPage;
