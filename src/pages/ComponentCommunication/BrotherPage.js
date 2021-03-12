// 同级之间的信息传递

import { Component } from "react";

class BrotherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "同级组件传递信息"
    };
  }
  onChange = data => {
    this.setState({ message: data });
  };
  render() {
    return (
      <div>
        <h3>BrotherPage</h3>
        <p>{this.state.message}</p>
        <Brother1 onChange={this.onChange} message={this.state.message} />
        <Brother2 onChange={this.onChange} message={this.state.message} />
      </div>
    );
  }
}

class Brother1 extends Component {
  render() {
    const { onChange, message } = this.props;
    return (
      <button onClick={() => onChange("Brother1-message")}>
        Brother1-{message}
      </button>
    );
  }
}

class Brother2 extends Component {
  render() {
    const { onChange, message } = this.props;
    return (
      <button onClick={() => onChange("Brother2-message")}>
        Brother2-{message}
      </button>
    );
  }
}

export default BrotherPage;
