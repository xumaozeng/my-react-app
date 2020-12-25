import React, { Component } from "react";
import { connect } from "react-redux"; // 映射store中的数据和方法到组件的props上

class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props);
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

const mapStateToProps = state => ({ num: state });

const mapDispatchToProps = {
  add: () => ({ type: "ADD" }),
  minus: () => ({ type: "MINUS" })
};

/**
 * react-redux提供两个API
 * 1、Provider为后代组件提供store
 * 2、connect为组件提供数据和变更方法
 */

export default connect(
  // mapStateToProps 把state映射到props，是一个函数返回一个对象
  mapStateToProps,
  // mapDispatchToProps 把dispatch内置方法映射到props(默认把dispatch映射到props上)
  mapDispatchToProps
)(ReactReduxPage);
