import React, { Component } from "react";
import rafSchedule from "raf-schd";
import yasuo from "../assets/images/yasuo.jpg";

class ScrollListener extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.scheduleUpdate = rafSchedule(point => console.log("point"));
  }

  handleScroll(e) {
    this.scheduleUpdate({ x: e.clientX, y: e.clientY });
  }

  componentWillUnmount() {
    this.scheduleUpdate.cancel();
  }

  render() {
    return (
      <div style={{ overflow: "scroll" }} onScroll={this.handleScroll}>
        <img alt="yasuo" src={yasuo} style={{ height: "400px" }} />
      </div>
    );
  }
}
export default ScrollListener;
