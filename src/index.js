import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import logo from "./logo.svg";
// import styles from "./index.module.scss"; // 模块化
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

/**
 * React负责逻辑控制，数据->VDOM
 * ReactDOM渲染实际DOM，VDOM->DOM
 * React使用JSX来描述UI
 * babel-loader把JSX编译成相应的JS对象
 * React.createElement再把这个JS对象构造成React需要的虚拟dom
 */
// 基本使用表达式用{}包裹
// const name = "React";
// const obj = {
//   name: "xiaoxu",
//   age: 25
// };
// // 函数
// function formatName(obj) {
//   return obj.name + "的年龄是" + obj.age;
// }
// // JSX对象
// const great = <div>good</div>;
// // 条件语句
// const show = true;
// // 数组
// const a = [1, 2, 3];

// const jsx = (
//   <div className={styles.app}>
//     <div>Hello, {name}</div>
//     <div>{formatName(obj)}</div>
//     {great}
//     {show ? great : "登录"}
//     {show && great}
//     <ul>
//       {/* diff时候，首先比较type,然后是key,所以同级同类型元素
//       key必须得唯一 */}
//       {a.map(item => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//     <img src={logo} alt="logo" className={styles.logo} />
//   </div>
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
