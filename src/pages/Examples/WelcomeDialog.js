import React, { Component } from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

/* function WelcomeDialog(props) {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
} */

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ""
    };
  }

  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`);
  };

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

export default SignUpDialog;
