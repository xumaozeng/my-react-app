import React, { PureComponent } from "react";

export class PureCompantPage extends PureComponent {
  /**
   * 只是进行了浅比较，有更深层次的obj:{num:10}就不行了
   * 就绪渲染render函数，并且实现了shouldComponentUpdate()
   */
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  setCounter = () => {
    this.setState({
      counter: 100
    });
  };

  render() {
    const { counter } = this.state;
    console.log("render");
    return (
      <div>
        <h1>PureCompantPage</h1>
        <button onClick={this.setCounter}>counter: {counter}</button>
      </div>
    );
  }
}

export default PureCompantPage;
