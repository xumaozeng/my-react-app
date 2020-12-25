import React, { Component } from "react";
import _ from "lodash";

/**
 * 防抖：确保函数不会在上一次被调用之后一定量的时间内执行
 * 当必须进行一些费时的计算来响应快速派发的事件时(如鼠标滚动或键盘事件时)，防抖是非常有用的
 */

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = _.debounce(this.emitChange, 2000);
  }

  handleChange(e) {
    this.emitChangeDebounced(e.target.value);
  }

  emitChange(value) {
    console.log("dobounce:", value);
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.handleChange}
        placeholder="Search..."
        defaultValue="debounce"
      />
    );
  }
}

export default SearchBox;
