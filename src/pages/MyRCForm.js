import React, { Component } from "react";
import Input from "../components/Input";

class MyRCForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  nameChange = e => {
    this.setState({ username: e.target.value });
  };

  passwordChange = e => {
    this.setState({ password: e.target.value });
  };

  submit = () => {
    const { username, password } = this.state;
    console.log("syta", username, password); //sy-log
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h3>MyRCForm</h3>
        <Input
          placeholder="Username"
          value={username}
          onChange={this.nameChange}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={this.passwordChange}
        />
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default MyRCForm;
