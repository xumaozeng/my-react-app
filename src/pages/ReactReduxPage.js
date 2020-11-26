import React, { Component } from "react";
import { connect } from "react-redux";

class ReactReduxPage extends Component {
  render() {
    const { num, add, minus } = this.props;
    console.log("props", this.props);
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={add}>add</button>
      </div>
    );
  }
}

export default connect(state => ({ num: state }), {
  add: () => ({ type: "ADD" })
})(ReactReduxPage);
