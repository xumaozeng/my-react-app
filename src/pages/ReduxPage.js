import React, { Component } from "react";
import store from "../store";

class ReduxPage extends Component {
  componentDidMount() {
    // 订阅事件
    store.subscribe(() => {
      // console.log("state发生变化了", store.getState());
      // 强制更新渲染函数render()，一般组件中props或state发生变化就更新了，
      // 此方法用在组件依赖其他数据时调用让组件重新渲染
      this.forceUpdate();
    });
  }
  add() {
    store.dispatch({ type: "ADD" });
  }
  minus() {
    store.dispatch({ type: "MINUS" });
  }
  render() {
    // console.log("store", store.getState());
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
export default ReduxPage;
