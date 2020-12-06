import React, { Component } from "react";
import Dialog from "../components/Dialog";

class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }

  handleToggle = () => {
    this.setState({
      showDialog: !this.state.showDialog
    });
  };

  render() {
    const { showDialog } = this.state;
    return (
      <div className="dialogPage">
        <h3>DialogPage</h3>
        <button onClick={this.handleToggle}>toggle</button>
        {showDialog && <Dialog />}
      </div>
    );
  }
}
export default DialogPage;
