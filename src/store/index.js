import { createStore } from "redux";

// 定义state初始化和修改规则，reducer是一个纯函数
function counterReducer(state = 0, action) {
  //   console.log("state", state);
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

/**
 * 1、combineReducers({reducer1,reducer2...})创建多个reducers对象集合
 * 2、createStore创建store
 * 3、reducer纯函数初始化、修改状态
 * 4、getState获取状态值
 * 5、dispatch提交更新
 * 6、subscribe变更订阅(其中强制更新渲染函数使用forceUpdate函数)
 */

export default store;
