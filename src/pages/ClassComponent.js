import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // 使用state属性维护状态，在构造函数中初始化状态
    this.state = {
      date: new Date()
    };
  }

  // 组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  // 组件卸载之前清除定时器
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    const { date } = this.state;
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
