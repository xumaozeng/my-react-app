import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.setCounter = this.setCounter.bind(this);
  }
  componentDidMount() {
    // this.changeValue(1);
    // document.getElementById("test").addEventListener("click", this.setCounter);
  }
  // 实例属性
  changeValue(v) {
    // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更行的，达到了性能优化的目的
    this.setState(
      {
        counter: this.state.counter + v
      },
      () => {
        // callback就是在state更新完成之后执行
        console.log("counter", this.state.counter);
      }
    );
    /* this.setState(state => {
      // 链式调用，参数是函数
      return {
        counter: state.counter + v
      };
    }); */
  }
  setCounter() {
    // setState在setTimeout和原生事件中是同步的
    // setTimeout(() => {
    this.changeValue(1);
    // this.changeValue(2);
    // this.changeValue(3);
    // }, 0);
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{counter}</button>
        {/* <button id="test">原生事件*{counter}</button> */}
      </div>
    );
  }
}
