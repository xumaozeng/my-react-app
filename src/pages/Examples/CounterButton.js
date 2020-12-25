import React, { PureComponent } from "react";

/* class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) return true;
    if (this.state.count < 3) return true;
    return false;
  }

  handleClick = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };
  render() {
    console.log("render");
    return (
      <button color={this.props.color} onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
} */

class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  handleClick = () => {
    this.setState({ count: 2 });
  };
  render() {
    console.log("render");
    return (
      <button color={this.props.color} onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
