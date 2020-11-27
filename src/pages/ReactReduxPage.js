import React, { Component } from "react";
import { connect } from 'react-redux';

class ReactReduxPage extends Component {
  render() {
    console.log('props', this.props);
    const { num, add, minus } = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}

export default connect(
  // mapStateToProps 把state映射到props，是一个函数返回一个对象
  state => ({ num: state }),
  // mapDispatchToProps 把dispatch内置方法映射到props
  {
    add: () => ({ type: "ADD" }),
    minus: () => ({ type: 'MINUS' })
  }
)(ReactReduxPage);
