import React, { Component } from "react";

class NameFormPage extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = e => {
    alert("A name was submitted:" + this.input.current.value);
    e.preventDefault(); // 组织默认提交行为
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue="Bob" type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameFormPage;
