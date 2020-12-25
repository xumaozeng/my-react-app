import React, { Component } from "react";

export default class HelloMessage extends Component {
  handleClick(e) {
    e.preventDefault(); // 阻止默认行为，比如默认打开链接
    console.log(this);
  }
  render() {
    return (
      <>
        <div>Hello, {this.props.name}</div>
        <a href="#/usename" onClick={this.handleClick.bind(this)}>
          Click me
        </a>
      </>
    );
  }
}
