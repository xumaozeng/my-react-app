import React, { Component } from "react";

class ReactMemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0
    };
  }
  render() {
    const { count, date } = this.state;
    console.log("render", count);
    return (
      <div>
        <h3>ReactMemoPage</h3>
        <button onClick={() => this.setState({ count: 1 })}>
          click add {count}
        </button>
        <button onClick={() => this.setState({ date: new Date() })}>
          click reset {date.toLocaleTimeString()}
        </button>
        <MemoCounter count={{ count }} />
      </div>
    );
  }
}

const MemoCounter = React.memo(
  props => {
    console.log("MemoCounter");
    return <div>MemoCounter-{props.count.count}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.count.count === nextProps.count.count;
  }
);

export default ReactMemoPage;
