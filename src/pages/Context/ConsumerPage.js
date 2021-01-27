import React, { Component } from "react";
import { ThemeContext, UserContext } from "./Context";

class ConsumerPage extends Component {
  render() {
    return (
      <div>
        {/* 除了使用Class.contextType之外还有Consumer */}
        <ThemeContext.Consumer>
          {themeContext => (
            <>
              <h3 className={themeContext.themeColor}>ConsumerPage</h3>
              <UserContext.Consumer>
                {userContext => <HandleUserPage {...userContext} />}
              </UserContext.Consumer>
            </>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

function HandleUserPage(userCtx) {
  return <div>{userCtx.name}</div>;
}
export default ConsumerPage;
