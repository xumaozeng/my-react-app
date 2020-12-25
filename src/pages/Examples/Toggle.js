import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  handleClick = e => {
    e.preventDefault();
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <div>
        <h3>Toggle</h3>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
export default Toggle;
