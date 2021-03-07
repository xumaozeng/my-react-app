import { PureComponent } from "react";

class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  setCounter = () => {
    this.setState({ counter: 100 });
  };
  render() {
    const { counter } = this.state;
    console.log("render");
    return (
      <div>
        <h3>PureComponentPage</h3>
        <div onClick={this.setCounter}>counter: {counter}</div>
      </div>
    );
  }
}
export default PureComponentPage;
