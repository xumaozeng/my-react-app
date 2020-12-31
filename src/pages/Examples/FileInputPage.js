import React, { Component } from "react";

class FileInputPage extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          上传文件：
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="sumbit">Submit</button>
      </form>
    );
  }
}
export default FileInputPage;
