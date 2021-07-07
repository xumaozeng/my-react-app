import { Component } from "react";

class SetStatePage extends Component {
  state = {
    name: "开课吧",
    age: 9,
    off: true
  };

  render() {
    const { age, name, off } = this.state;
    console.log("渲染");
    return (
      <div>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <button
          onClick={() => {
            if (off) {
              this.setState({ name: "北京开课吧科技有限公司" });
            } else {
              this.setState({ name: "开课吧" });
            }
            this.setState({ off: !off });
          }}
        >
          {off ? "显示全称" : "显示简称"}
        </button>
      </div>
    );
  }
}
export default SetStatePage;
