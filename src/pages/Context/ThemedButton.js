import React, { Component } from "react";
import { ThemeContext } from "./themeContext";

class ThemedButton extends Component {
  static contextType = ThemeContext; // 静态属性
  render() {
    let theme = this.context;
    let props = this.props;
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}

export default ThemedButton;
