import { Component } from "react";
import cat from "../../assets/images/cat.jpg";

function Cat(props) {
  const { mouse } = props;
  return (
    <img
      alt="cat"
      src={cat}
      style={{
        position: "absolute",
        left: mouse.x,
        top: mouse.y
      }}
    />
  );
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }
  handleMouseMove = e => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* 使用了render- prop动态的决定要渲染的内容
        而不是给出一个<Mouse>渲染结果的静态表示 */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends Component {
  render() {
    return (
      <div>
        <h3>移动鼠标</h3>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    );
  }
}
export default MouseTracker;
