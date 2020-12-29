import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import styles from "./index.module.scss"; // 模块化
import { Provider } from "react-redux"; // 使后代组件都能获取到store
import store from "./store";

/**
 * React负责逻辑控制，数据->VDOM
 * ReactDOM渲染实际DOM，VDOM->DOM
 * React使用JSX来描述UI
 * babel-loader把JSX编译成相应的JS对象
 * React.createElement再把这个JS对象构造成React需要的虚拟dom
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
