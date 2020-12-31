import React, { Component } from "react";

class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  componentDidMount() {
    // this.changeValue(1);
    document.getElementById("test").addEventListener("click", this.setCounter);
  }
  changeValue = v => {
    // setState在合成事件和生命周期中是异步的，这里的异步是指批量更新，达到性能优化的目的
    this.setState(
      {
        counter: this.state.counter + v
      } /* , () => {
      // callback就是在state更新完成之后在执行
      console.log("counter:", this.state.counter);
    } */
    );
    console.log("counter:", this.state.counter);
    // 批量叠加更新：setState第一个参数是函数
    /* this.setState(state => {
      return { counter: state.counter + v };
    }); */
  };
  setCounter = () => {
    this.changeValue(1);
    // this.changeValue(2);
    /**
     * setState在setTimeout和原生事件中是同步的，
     * 同步是指立马能拿到最新的值，还可以在setState(object|function, callback)
     * 第二个回调函数中拿到最新的值
     * 第三个是在componentDidUpdate()组件更新生命周期钩子函数中获取最新的值
     */
    /* setTimeout(() => {
      this.changeValue(1);
    }, 0); */
  };
  /* componentDidUpdate(prevProps, prevState) {
    console.log(this.state.counter);
  } */
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        {/* <button onClick={this.setCounter}>{this.state.counter}</button> */}
        <button id="test">原生事件*{this.state.counter}</button>
      </div>
    );
  }
}
export default SetStatePage;
