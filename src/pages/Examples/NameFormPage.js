import React, { Component } from "react";

class NameFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "lime" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    alert("你喜欢的风味是：" + this.state.value);
    e.preventDefault(); // 组织默认提交行为
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味：
          <select value={value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default NameFormPage;
