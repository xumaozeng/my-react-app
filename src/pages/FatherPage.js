import React, { Component } from "react";
import SonPage from "./SonPage";

class FatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      son: ""
    };
  }

  changeHandler(e) {
    this.setState({ son: e.target.value });
  }
  render() {
    const { son } = this.state;
    return (
      <div>
        <SonPage onChange={this.changeHandler.bind(this)} />
        <p>这里显示Son的内容：{son}</p>
      </div>
    );
  }
}
export default FatherPage;
