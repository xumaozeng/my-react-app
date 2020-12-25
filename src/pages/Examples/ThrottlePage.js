import React, { Component } from "react";
import _ from "lodash";

/**
 * 节流：在给定的时间窗口内函数被调用不超过一次
 */
class LoadMoreButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = _.throttle(this.handleClick, 1000);
  }
  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }

  handleClick() {
    // this.props.loadMore();
    console.log("throttle");
  }

  render() {
    return <button onClick={this.handleClickThrottled}>Load More</button>;
  }
}

export default LoadMoreButton;
