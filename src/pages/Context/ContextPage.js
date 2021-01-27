import React, { Component } from "react";
import ContextTypePage from "./ContextTypePage";
import { ThemeContext, UserContext } from "./Context";
import ConsumerPage from "./ConsumerPage";
import UseContextPage from "./UseContextPage";

class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      },
      user: {
        name: "xiaoming"
      }
    };
  }
  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ? "green" : "red"
      }
    });
  };
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        {/* Provide一个context */}
        <ThemeContext.Provider value={theme}>
          <ContextTypePage />
          <UserContext.Provider value={user}>
            {/* 函数组件 */}
            <UseContextPage />
            <ConsumerPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default ContextPage;
