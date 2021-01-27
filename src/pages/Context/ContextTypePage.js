import React, { Component } from "react";
import { ThemeContext } from "./Context";

// class组件
class ContextTypePage extends Component {
  static contextType = ThemeContext; // Class.contextType使其能用this.context
  render() {
    const { themeColor } = this.context;
    return (
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}
export default ContextTypePage;
